
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import Welcome from "./components/User/Welcome"
import Login from "./components/User/Login"
import Register from "./components/User/Register"
import Home from "./components/Home/Home";
import Chat from "./components/Home/Chat"

import MyUserReducer from "./reducers/MyUserReducer";
import { useContext, useReducer } from "react";
import { MyDispatchContext, MyUserContext } from "./configs/MyContexts";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PtProfiles from "./components/Home/PtProfiles"
import PtDetails from "./components/Home/PtDetails"
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const StackNavigator2 = () => {

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="pt-profiles" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="pt-profiles" component={PtProfiles} options={{ title: 'Danh sách pt' }} />
        <Stack.Screen name="pt-details" component={PtDetails} options={{ title: 'Chi tiết pt', headerShown: true }} />


      </Stack.Navigator>
    </SafeAreaProvider>
  );
}


const TabNavigator = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator >
        <Tab.Screen name="index" component={Home} options={{ title: 'Trang chu' }} />
        <Tab.Screen name="chat" component={Chat} options={{ title: 'Chat' }} />
        <Tab.Screen name="danh sách pt" component={StackNavigator2} />




      </Tab.Navigator>
    </SafeAreaProvider>
  );
}


const StackNavigator = () => {
  const user = useContext(MyUserContext);
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={TabNavigator} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />


      </Stack.Navigator>
    </SafeAreaProvider>
  );
}




export default function App() {
  const [user, dispatch] = useReducer(MyUserReducer, null);


  return (
    <MyUserContext.Provider value={user}>
      <MyDispatchContext.Provider value={dispatch}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </MyDispatchContext.Provider>
    </MyUserContext.Provider>
  );


  // return (
  //   <SafeAreaProvider>
  //     <NavigationContainer>
  //       <StatusBar style="auto" />
  //       <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
  //         <Stack.Screen name="Welcome" component={Welcome} />
  //         <Stack.Screen name="Login" component={Login} />
  //         <Stack.Screen name="Register" component={Register} />

  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </SafeAreaProvider>
  // )


}
