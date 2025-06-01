import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TemplateScreen from "../screens/TemplateScreen";

const Stack = createNativeStackNavigator();

const TemplateStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Template" component={TemplateScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default TemplateStackNavigator;
