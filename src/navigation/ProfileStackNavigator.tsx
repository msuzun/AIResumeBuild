import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import PersonalDetailsScreen from "../screens/PersonalDetailsScreen";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PersonalDetailsScreen" component={PersonalDetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default ProfileStackNavigator;