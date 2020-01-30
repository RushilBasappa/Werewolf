import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { auth } from "../config";

import { Container, Item, Form, Input, Button, Label } from "native-base";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  SignUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log("TCL: SignUp -> user", user);
      })
      .catch(error => {
        console.log("TCL: SignUp -> SignUp -> error", error);
      });
  };

  SignIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("App");
      })
      .catch(error => {
        console.log("TCL: SignIn -> error", error);
      });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item>
            <Input
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            onPress={() => this.SignUp(this.state.email, this.state.password)}
          >
            <Text>SignUp</Text>
          </Button>
          <Button
            onPress={() => this.SignIn(this.state.email, this.state.password)}
          >
            <Text>SignIn</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
