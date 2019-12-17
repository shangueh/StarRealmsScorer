import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
// import Animated from "react-native-reanimated";

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
    this.state = {
      fadeValue: new Animated.Value(0),
      fadeOut: new Animated.Value(1),
      show: false,
      anim: false,
      score: 50
    };
  }

  _fadeOutAnimation = () => {
    Animated.timing(this.state.fadeOut, {
      toValue: 0.25,
      duration: 1200
    }).start();
  };

  _fadeInAnimation = () => {
    Animated.timing(this.state.fadeOut, {
      toValue: 1,
      duration: 1200
    }).start();
  };

  _fadeAnimation = () => {
    this._toggle();
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1200
    }).start(this.setState({ score: this.state.score - 5 }));
  };

  _toggle = () => {
    if (!this.state.show)
      this.setState({
        show: true,
        anim: true
      });
    else {
      this.setState({
        anim: false
      });
      setTimeout(
        () =>
          this.setState({
            show: false
          }),
        500
      );
    }
  };

  renderScore() {
    return (
      <View>
        <Text style={styles.score}> {this.state.score} </Text>
      </View>
    );
  }

  renderScoreFade() {
    return (
      <View style={{ zIndex: -1, opacity: 0.25, position: "absolute" }}>
        <Text style={styles.score}> {this.state.score} </Text>
      </View>
    );
  }

  renderTopAnim() {
    return (
      <Animated.View
        style={[styles.animationView, { opacity: this.state.fadeValue }]}
      >
        <Text style={styles.score}> {this.state.score} </Text>
      </Animated.View>
    );
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.fixView}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.nomDuJoueur}>JOUEUR TEST</Text>
          </View>
          {this.state.show && this.renderTopAnim()}
          {this.state.show && this.renderScoreFade()}
          {!this.state.show && this.renderScore()}
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
              onPress={this._fadeOutAnimation}
            >
              <Text style={styles.text}>-5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainerGreen}
              onPress={this._fadeAnimation}
            >
              <Text style={styles.text}>+5</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#000E1B"
  },
  fixView: {
    alignItems: "center",
    backgroundColor: "#000E1B",
    width: 414,
    height: 323
  },
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
  },
  animationView: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "white"
  }
});

export default Historique;
