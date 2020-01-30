import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { auth } from "../config";

import { updateCharacters } from "../db/seed";

export default class Home extends Component {
  SignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("SignOut successful");
      })
      .catch(() => {
        console.log("SignOut failed");
      });
  };

  render() {
    return (
      <View>
        <Button title="Update Characters" onPress={() => updateCharacters()} />
        <Button
          title="Add a Game"
          onPress={() => this.props.navigation.navigate("AddGame")}
        />
        <Button
          title="List of Games"
          onPress={() => this.props.navigation.navigate("List")}
        />
        <Button title="SignOut" onPress={() => this.SignOut()} />
      </View>
    );
  }
}
