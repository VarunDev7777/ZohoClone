import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "./components/DrawerContent.jsx";

const Drawer = createDrawerNavigator();

import { HomeStackScreen, RegistrationStackScreen } from "./screens/mainScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen
          name="Registration"
          component={RegistrationStackScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
