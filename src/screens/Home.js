import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import { updateCharacters } from "../db/seed";

export default class Home extends Component {
  render() {
    return (
      <View>
        {/* <Text>Home Screen</Text> */}
        <Button title="Update Characters" onPress={() => updateCharacters()} />
        <Button
          title="Add a Game"
          onPress={() => this.props.navigation.navigate("AddGame")}
        />
        <Button
          title="List of Games"
          onPress={() => this.props.navigation.navigate("List")}
        />
      </View>
    );
  }
}
