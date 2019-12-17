import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class LogoShare extends React.Component {
  render() {
    return (
      <Icon
        name="ios-share"
        size={30}
        color={"#fff"}
        style={{ paddingRight: 8 }}
      />
    );
  }
}

class Configuration extends Component {
  static navigationOptions = {
    title: "Historique",
    headerStyle: {
      backgroundColor: "#232B50"
    },
    headerTintColor: "#fff",
    headerRight: () => <LogoShare />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Configuration</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000E1B"
  },
  text: {
    color: "white"
  }
});

export default Configuration;
