import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Container, Header } from "native-base";
import { times, chunk } from "lodash";

import { db } from "../config";

import { Col, Row, Grid } from "react-native-easy-grid";

class CharacterSelection extends Component {
  state = {
    characters: []
  };
  componentDidMount() {
    const characterOrder = [
      "werewolf",
      "villager",
      "seer",
      "robber",
      "troublemaker"
    ];
    const charactersRef = db.ref("/characters");
    charactersRef.orderByValue().once("value", snapshot => {
      let data = JSON.parse(JSON.stringify(snapshot.val(), characterOrder));

      let characters = [];
      Object.keys(data).map(key => {
        times(data[key], () => {
          characters.push(key);
        });
      });

      this.setState({ characters });
    });
  }

  render() {
    return (
      <Container>
        <Grid>
          <ScrollView>
            {chunk(this.state.characters, 4).map(arr => (
              <Row>
                {arr.map(char => (
                  <Col
                    style={{
                      alignItems: "center",
                      marginBottom: 20
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        borderColor: "rgba(0,0,0,0.2)",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 100,
                        height: 100,
                        backgroundColor: "#fff",
                        borderRadius: 50
                      }}
                    >
                      <Text>{char}</Text>
                    </TouchableOpacity>
                  </Col>
                ))}
              </Row>
            ))}
          </ScrollView>
        </Grid>
      </Container>
    );
  }
}

export default CharacterSelection;
