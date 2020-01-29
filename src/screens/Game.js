import React, { Component } from "react";
import { db } from "../config";

import { View } from "react-native";

export default class Game extends Component {
  state = {};
  componentDidMount() {
    const { navigation } = this.props;
    const gameId = navigation.getParam("gameId", "NO-ID");
    const gameRef = db.ref("/games/" + gameId);
    gameRef.once("value", snapshot => {
      let data = snapshot.val();
      this.setState(data);
    });
  }
  render() {
    return <View></View>;
  }
}
