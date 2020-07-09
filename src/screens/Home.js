import React, { Component } from "react";
import { AppLoading } from "expo";
import { View } from "react-native";
import { Button, Text } from 'native-base';
import { auth } from "../config";

import { updateCharacters } from "../db/seed";

export default class Home extends Component {
  state = {
    isReady: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

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
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <View>
        <Button primary onPress={() => updateCharacters()}>
          <Text>Update Characters</Text>
        </Button>
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
