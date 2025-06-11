
import { AuthProvider } from "@/context/AuthContext";
import { Slot, Stack } from "expo-router";
import '@/global.css'

export default function RootLayout() {
  return (
      <AuthProvider>
        <Stack screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="(auth)"/>
          <Stack.Screen name="(app)"/>
        </Stack>
      </AuthProvider>

  )
}
