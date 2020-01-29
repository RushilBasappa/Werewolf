import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Alert
} from "react-native";

import { db } from "../config";

let addGame = gameId => {
  db.ref("/games/" + gameId).once("value", snapshot => {
    if (snapshot.exists()) {
      Alert.alert("Validation Error", "Game ID already present");
    } else {
      let payload = {};
      payload[gameId] = {
        name: gameId,
        state: "new"
      };
      snapshot.ref.parent.update(payload);
    }
  });
};

export default class AddGame extends Component {
  state = {
    name: ""
  };
  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addGame(this.state.name);
  };
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Game</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#6565fc"
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center"
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    marginBottom: 50,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "white"
  },
  button: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: "stretch",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    color: "#111",
    alignSelf: "center"
  }
});
