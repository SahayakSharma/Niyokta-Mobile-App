import {ActivityIndicator, View} from "react-native";


export default function CustomSplashScreen(){
    return(
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator/>
        </View>
    )
}