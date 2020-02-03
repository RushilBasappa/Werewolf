import React, { Component } from "react";
import { db } from "../config";

import { View, Text, Button } from "react-native";

import { Werewolf, Minion } from "./characters";

import { stateMachine, stateService } from "../machine";

const CharacterScreen = props => {
  return (
    <View>
      <Text>{props.gameState}</Text>
    </View>
  );
};

export default class Game extends Component {
  state = {};
  componentDidMount() {
    const { navigation } = this.props;
    const gameId = navigation.getParam("gameId", "NO-ID");
    const gameRef = db.ref("/games/" + gameId);
    gameRef.once("value", snapshot => {
      let data = snapshot.val();
      data["gameId"] = gameId;
      this.setState(data);
    });
  }

  changeState = action => {
    const newState = stateMachine.transition(this.state.state, action);
    const gameStateRef = db.ref("/games/" + this.state.gameId + "/state");
    gameStateRef.set(newState.value).then(() => {
      this.setState({ state: newState.value });
    });
  };

  render() {
    const { state } = this.state;
    console.log("TCL: Game -> render -> this.state.state", this.state.state);
    return (
      <View>
        <Button
          title="Change to NightAction"
          onPress={() => this.changeState("NIGHTACTION")}
        />
        <Button
          title="Change to Werewolf"
          onPress={() => this.changeState("WEREWOLF")}
        />
        <Button
          title="Change to Minion"
          onPress={() => this.changeState("MINION")}
        />
        <Button
          title="Change to SEER"
          onPress={() => this.changeState("SEER")}
        />
        <Button
          title="Change to ENDACTION"
          onPress={() => this.changeState("ENDACTION")}
        />
        {state !== undefined ? (
          <CharacterScreen gameState={this.state.state.nightaction} />
        ) : null}
      </View>
    );
  }
}
