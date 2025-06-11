import { useAuth } from "@/context/AuthContext";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Home() {
    const { SignOut } = useAuth();
    return (
        <SafeAreaView>
            <Button title="Sign Out" onPress={SignOut} />
        </SafeAreaView>
    )
}