import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";

import Registration from "./userReg";
import HomeScreen from "./HomeScreen";

const HomeStack = createStackNavigator();
const RegistrationStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
    return (
      <HomeStack.Navigator
        initialRouteName="Registration"
        screenOptions={StackStyle}
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#009387"
                onPress={() => navigation.openDrawer()}
              />
            ),
          }}
        />
      </HomeStack.Navigator>
    );
};
  
const RegistrationStackScreen = ({ navigation }) => {
    return (
      <RegistrationStack.Navigator
        initialRouteName="Registration"
        screenOptions={StackStyle}
      >
        <RegistrationStack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerLeft: () => (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#009387"
                onPress={() => navigation.openDrawer()}
              />
            ),
          }}
        />
      </RegistrationStack.Navigator>
    );
};

const StackStyle = {
    headerStyle: {
      backgroundColor: "#009378",
    },
    headerTintColor: "#fff",
};

export {
    HomeStackScreen,
    RegistrationStackScreen
}