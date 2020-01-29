import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./src/screens/Home";
import AddGame from "./src/screens/AddGame";
import List from "./src/screens/List";
import Game from "./src/screens/Game";

const AppNavigator = createStackNavigator(
  {
    Home,
    AddGame,
    List,
    Game
  },
  {
    initialRouteName: "Home"
  }
);

const App = createAppContainer(AppNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
