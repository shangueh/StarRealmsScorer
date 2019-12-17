import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";

class User extends Component {
  constructor(props) {
    super(props);
  }

  addToLog = addTo => {
    const userLog = {
      date: new Date(),
      id: this.props.userId,
      player: this.props.player[this.props.userId].name,
      addTo,
      score: this.props.player[this.props.userId].score
    };
    const action = { type: "ADD_TO_LOG", value: userLog };
    this.props.dispatch(action);
  };

  setScore = addTo => {
    const score = { player: this.props.userId, addTo };
    const action = { type: "SET_SCORE", value: score };
    this.props.dispatch(action);
  };

  resetLog = () => {
    const action = { type: "RESET_LOG" };
    this.props.dispatch(action);
  };

  render() {
    const { userId, width, height, bgColor } = this.props;
    const player = this.props.player[userId];

    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        colors={[bgColor, "#000000"]}
        style={{ width: width, height: height }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.nomDuJoueur}> {player.name}</Text>
        </View>
        <View style={{ flex: 3, alignItems: "center" }}>
          <Text style={styles.score}>{player.score}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            paddingRight: 20,
            paddingLeft: 20
          }}
        >
          <TouchableOpacity
            style={styles.buttonContainerRed}
            onPress={() => {
              this.setScore(-10);
              this.addToLog(-10);
            }}
          >
            <Text style={styles.text}>-10</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainerRed}
            onPress={() => {
              this.setScore(-5);
              this.addToLog(-5);
            }}
          >
            <Text style={styles.text}>-5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainerRed}
            onPress={() => {
              this.setScore(-2);
              this.addToLog(-2);
            }}
          >
            <Text style={styles.text}>-2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainerRed}
            onPress={() => {
              this.setScore(-1);
              this.addToLog(-1);
            }}
          >
            <Text style={styles.text}>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainerGreen}
            onPress={() => {
              this.setScore(1);
              this.addToLog(1);
            }}
          >
            <Text style={styles.text}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainerGreen}
            onPress={() => {
              this.setScore(2);
              this.addToLog(2);
            }}
          >
            <Text style={styles.text}>+2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainerGreen}
            onPress={() => {
              this.setScore(5);
              this.addToLog(5);
            }}
          >
            <Text style={styles.text}>+5</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  nomDuJoueur: {
    fontSize: 24,
    color: "white"
  },
  score: {
    fontSize: 128,
    color: "white"
  },
  buttonContainerRed: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "white",
    backgroundColor: "red",
    width: 46,
    height: 46
  },
  buttonContainerGreen: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "white",
    backgroundColor: "green",
    width: 46,
    height: 46
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => {
  return {
    logGames: state.playersLogs.logGames,
    player: state.settingGames.player
  };
};

export default connect(mapStateToProps)(User);
