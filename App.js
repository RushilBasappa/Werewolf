import React, { Component } from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Container, Item, Form, Input, Button, Label } from "native-base";

import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./src/screens/Home";
import AddGame from "./src/screens/AddGame";
import List from "./src/screens/List";
import Game from "./src/screens/Game";
import SignUp from "./src/screens/SignUp";

import { auth } from "./src/config";

class AuthLoadingScreen extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const AppStack = createStackNavigator(
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

const AuthStack = createStackNavigator(
  {
    SignUp
  },
  {
    initialRouteName: "SignUp"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
