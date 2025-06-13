import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserRoundPen,FolderPlus,Kanban } from "lucide-react-native";
export default function ClientLayout(){

    return(
        <GestureHandlerRootView>
            <Drawer screenOptions={{
                drawerStyle:{
                    borderEndEndRadius:0,
                    borderTopEndRadius:0
                },
                drawerLabelStyle:{
                    fontSize:15,
                }
            }}>
                <Drawer.Screen name="client-profile" options={{
                    title:"Client Profile",
                    drawerIcon:()=>{
                        return <UserRoundPen />
                    }
                }}/>
                <Drawer.Screen name="create-project" options={{
                    title:"New Project",
                    drawerIcon:()=>{
                        return <FolderPlus />
                    }
                }}/>
                <Drawer.Screen name="manage-projects" options={{
                    title:"Manage Projects",
                    drawerIcon:()=>{
                        return <Kanban />
                    }
                }}/>
            </Drawer>
        </GestureHandlerRootView>
    )
}