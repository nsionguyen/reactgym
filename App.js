import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import Welcome from "./components/User/Welcome"
import Login from "./components/User/Login"
import Register from "./components/User/Register"


const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
