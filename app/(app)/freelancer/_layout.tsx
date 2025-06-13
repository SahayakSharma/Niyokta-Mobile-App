import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ClientLayout(){

    return(
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen name="explore-projects"/>
            </Drawer>
        </GestureHandlerRootView>
    )
}

