import { useAuth } from "@/context/AuthContext";
import { Tabs, useRouter } from "expo-router";
import { useEffect } from "react";
import { User,Briefcase } from "lucide-react-native";
export default function AppLayout() {
    const { user, loading } = useAuth();

    const router = useRouter();
    useEffect(() => {
        if (!loading && !user) {
            router.replace("/(auth)")
        }
    }, [user, loading])

    return (
        <Tabs screenOptions={{
            headerShown:false,
            tabBarLabelStyle:{
                fontSize:15
            }
        }}>
            <Tabs.Screen name="freelancer" options={{
                title:"Freelancer",
                tabBarIcon:()=>{
                    return <User />
                }
            }}/>
            <Tabs.Screen name="client" options={{
                title:"Client",
                tabBarIcon:()=>{
                    return <Briefcase />
                }
            }}/>
        </Tabs>
    )
}