import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../screens/Start";
import Home from "../screens/Home";

export type RootStackParamList = {
  Start: undefined;
  Home: undefined;
};

export default function AppNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Start"
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
