import React, { Component } from "react";
import { View, Button } from "react-native";

import { db } from "../config";

let gamesRef = db.ref("/games");

export default class List extends Component {
  _isMounted = false;
  state = {
    games: []
  };
  componentDidMount() {
    this._isMounted = true;

    gamesRef.on("value", snapshot => {
      let data = snapshot.val();
      let games = Object.keys(data);
      if (this._isMounted) {
        this.setState({ games });
      }
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <View>
        {this.state.games.map((gameId, index) => {
          return (
            <View key={index}>
              <Button
                title={gameId}
                onPress={() =>
                  this.props.navigation.navigate("Game", { gameId })
                }
              />
            </View>
          );
        })}
      </View>
    );
  }
}
