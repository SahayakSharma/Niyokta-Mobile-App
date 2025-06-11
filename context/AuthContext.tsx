import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import CustomSplashScreen from "@/components/CustomSplashScreen";
import { GoogleAuthProvider, getAuth, signInWithCredential, FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
});


type IAuthContent = {
    user: FirebaseAuthTypes.User | null,
    loading: boolean,
    handleGoogleSignIn:()=> Promise<FirebaseAuthTypes.UserCredential>,
    SignOut: ()=> void
}

const AuthContext = createContext<IAuthContent>({
    user: null,
    loading: true,
    handleGoogleSignIn: () => {
        throw new Error("Handle Signin With Google not implemented yet")
    },
    SignOut: () => {
        throw new Error("SignOut function now implemented yet");
    }
})


export function AuthProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function SignOut(){
        try{
            await getAuth().signOut();
        }
        catch(err){
            console.log("error signing out",err);
        }
    }
    async function handleGoogleSignIn() {
            await GoogleSignin.signOut();
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const signInResult = await GoogleSignin.signIn();
            let idToken = signInResult.data?.idToken;

            if (!idToken) {
                throw new Error('No ID token found');
            }

            const googleCredential = GoogleAuthProvider.credential(signInResult.data?.idToken);

            return signInWithCredential(getAuth(), googleCredential);
    }

    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        loading ? <CustomSplashScreen /> :
            <AuthContext.Provider value={{ user, loading, handleGoogleSignIn, SignOut }}>
                {children}
            </AuthContext.Provider>
    )
}


export function useAuth() {
    return useContext(AuthContext);
}