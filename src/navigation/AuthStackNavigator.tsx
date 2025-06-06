import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = ({ setIsAuthenticated }: { setIsAuthenticated: (auth: boolean) => void }) => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login">
                {props => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
            </AuthStack.Screen>
            <AuthStack.Screen name="Register">
                {props => <RegisterScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
            </AuthStack.Screen>
        </AuthStack.Navigator>
    )
}
export default AuthStackNavigator;