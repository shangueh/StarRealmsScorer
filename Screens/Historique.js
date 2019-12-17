import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import LogItem from "../components/LogItem";

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

class Historique extends Component {
  static navigationOptions = {
    title: "Historique",
    headerStyle: {
      backgroundColor: "#232B50"
    },
    headerTintColor: "#fff",
    headerRight: () => <LogoShare />
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   score: 50
    // };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.logGames}
          renderItem={({ item }) => <LogItem item={item} />}
          keyExtractor={(item, index) => item.date + index}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000E1B"
  },
  text: {
    color: "white"
  }
});

const mapStateToProps = state => {
  return {
    logGames: state.playersLogs.logGames
  };
};

export default connect(mapStateToProps)(Historique);
