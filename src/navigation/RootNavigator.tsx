import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import TemplateStackNavigator from "./TemplateStackNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon: ({focused, color, size})=>{
                let iconName;
                if(route.name === "HomeTab"){
                    iconName = focused ? "home" : "home-outline";
                }
                else if(route.name === "ProfileTab"){
                    iconName = focused ? "person" : "person-outline";
                }
                else if(route.name === "TemplateTab"){
                    iconName = focused ? "document-text" : "document-text-outline";
                }
                else{
                    iconName = "ellipsis-horizontal-outline";
                }
                return <Ionicons name={iconName as any} size={size} color={color} />
            },
            tabBarActiveTintColor: "#007AFF", 
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
                backgroundColor: "#f5f5f5"
            }
        })}>
            <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{headerShown: false}} />
            <Tab.Screen name="TemplateTab" component={TemplateStackNavigator} options={{headerShown: false}} />
            <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} options={{headerShown: false}} />
           
        </Tab.Navigator>
    )
}

export default RootNavigator;