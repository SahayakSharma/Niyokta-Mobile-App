import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import {Mail} from "lucide-react-native"

export default function Signin() {
  const auth = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSigninWithGoogle() {
    setLoading(true);
    try {
      await auth.handleGoogleSignIn();
    } catch (err) {
      console.error("Error signing in with Google:", err);
      setLoading(false);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black justify-center items-center px-6">
      <View className="w-full items-center">
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Sign In
        </Text>

        <TouchableOpacity
          onPress={handleSigninWithGoogle}
          disabled={loading}
          className="flex-row items-center justify-center w-full bg-white border border-gray-300 rounded-xl p-4 shadow-md gap-5"
        >
          {loading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <>
              <Mail size={20} color="black"/>
              <Text className="text-base font-medium text-black">
                Sign in with Google
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
