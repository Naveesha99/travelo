// App.js
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import Home from "./src/BottomTab/Home";
import Profile from "./src/BottomTab/Profile";
import Explore from "./src/BottomTab/Explore";
import Trips from "./src/BottomTab/Trips";

import Detail from "./src/Stack/Detail";
import AddLocation from "./src/Stack/AddLocation";
import EditMapLocation from "./src/Stack/EditMapLocation";
import CreateNewTrip from "./src/Stack/CreateNewTrip";
import MyTabBar from "./src/Components/MyTabBar";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

function ExploreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExploreScreen"
        component={Explore}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddLocation"
        component={AddLocation}
        options={{
          headerTitle: "Add Location",
        }}
      />
      <Stack.Screen
        name="EditMapLocation"
        component={EditMapLocation}
        options={{
          headerTitle: "Edit Map Location",
        }}
      />
    </Stack.Navigator>
  );
}

function TripStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TripScreen"
        component={Trips}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateNewTrip"
        component={CreateNewTrip}
        options={{
          headerTitle: "Create New Trip",
        }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={TripStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="travel-explore" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
