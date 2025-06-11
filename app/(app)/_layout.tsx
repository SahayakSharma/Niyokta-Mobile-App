import { useAuth } from "@/context/AuthContext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function AppLayout() {
    const { user, loading } = useAuth();

    const router = useRouter();
    useEffect(() => {
        if (!loading && !user) {
            router.replace("/(auth)")
        }
    }, [user, loading])

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{
                headerShown:true
            }}>
                <Drawer.Screen name="Dashboard" options={{
                    drawerLabel:"The Dashboard"
                }}/>
                <Drawer.Screen name="index" options={{
                    drawerLabel:"Home"
                }}/>
            </Drawer>
        </GestureHandlerRootView>
    )
}