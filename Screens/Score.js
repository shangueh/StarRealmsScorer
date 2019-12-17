import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import User from "../components/User";
import { connect } from "react-redux";

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

class LogoReset extends React.Component {
  render() {
    return (
      <Icon
        name="ios-refresh"
        size={30}
        color={"#fff"}
        style={{ paddingLeft: 8 }}
      />
    );
  }
}

const { width, height } = Dimensions.get("window");

class Score extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: "Star Realms Scorer",
      headerStyle: {
        backgroundColor: "#232B50"
      },
      headerTintColor: "#fff",
      headerRight: () => <LogoShare />,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            params.resetLog();
            params.resetSetting();
          }}
        >
          <LogoReset />
        </TouchableOpacity>
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      viewHeight: 200
    };
  }

  _updateNavigationParams() {
    this.props.navigation.setParams({
      resetLog: () => this.resetLog(),
      resetSetting: () => this.resetSetting()
    });
  }

  componentDidMount() {
    this._updateNavigationParams();
  }

  resetLog = () => {
    const action = { type: "RESET_LOG" };
    this.props.dispatch(action);
  };

  resetSetting = () => {
    const action = { type: "RESET_SETTING" };
    this.props.dispatch(action);
  };

  find_dimesions(layout) {
    const { x, y, width, height } = layout;
    this.setState({ viewHeight: height });
  }

  // scrollToRow(itemIndex) {
  //   this._scrollView.scrollTo({y:itemIndex * ROW_HEIGHT});
  // }

  topBarPlayer = () => {
    return (
      <View
        style={{
          width: wp("100%"),
          height: hp("6%"),
          backgroundColor: "#000E1B",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            color: "#F36445",
            fontSize: hp("2%"),
            marginRight: wp("2%")
          }}
          onPress={() =>
            this.refs.ScrollView.scrollTo({
              x: 0,
              y: 0,
              animated: true
            })
          }
        >
          {this.props.player[0].score}
        </Text>
        <Text
          style={{
            color: "#5474D9",
            fontSize: hp("2%"),
            marginRight: wp("2%")
          }}
          onPress={() =>
            this.refs.ScrollView.scrollTo({
              x: 0,
              y: 0,
              animated: true
            })
          }
        >
          {this.props.player[1].score}
        </Text>
        <Text
          style={{
            color: "#59CD4B",
            fontSize: hp("2%"),
            marginRight: wp("2%")
          }}
          onPress={() =>
            this.refs.ScrollView.scrollTo({
              x: 0,
              y: 2 * (this.state.viewHeight / 2),
              animated: true
            })
          }
        >
          {this.props.player[2].score}
        </Text>
        <Text
          style={{
            color: "#F4CD47",
            fontSize: hp("2%"),
            marginRight: wp("2%")
          }}
          onPress={() =>
            this.refs.ScrollView.scrollTo({
              x: 0,
              y: 2 * (this.state.viewHeight / 2),
              animated: true
            })
          }
        >
          {this.props.player[3].score}
        </Text>
        <Text
          style={{
            color: "#9C5FDA",
            fontSize: hp("2%"),
            marginRight: wp("2%")
          }}
          onPress={() =>
            this.refs.ScrollView.scrollTo({
              x: 0,
              y: 4 * (this.state.viewHeight / 2) + 53,
              animated: true
            })
          }
        >
          {this.props.player[4].score}
        </Text>
        <Text
          style={{
            color: "#6EB8BE",
            fontSize: hp("2%"),
            marginRight: wp("2%")
          }}
          onPress={() =>
            this.refs.ScrollView.scrollTo({
              x: 0,
              y: 4 * (this.state.viewHeight / 2),
              animated: true
            })
          }
        >
          {this.props.player[5].score}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        {this.topBarPlayer()}
        <View
          onLayout={event => {
            this.find_dimesions(event.nativeEvent.layout);
          }}
          style={{ backgroundColor: "#000E1B" }}
        >
          <ScrollView ref="ScrollView" scrollToOverflowEnabled="true">
            <User
              userId={0}
              width={wp("100%")}
              height={this.state.viewHeight / 2}
              bgColor={"#F36445"}
            />
            <User
              userId={1}
              width={wp("100%")}
              height={this.state.viewHeight / 2}
              bgColor={"#5474D9"}
            />
            <User
              userId={2}
              width={wp("100%")}
              height={this.state.viewHeight / 2}
              bgColor={"#59CD4B"}
            />
            <User
              userId={3}
              width={wp("100%")}
              height={this.state.viewHeight / 2}
              bgColor={"#F4CD47"}
            />
            <User
              userId={4}
              width={wp("100%")}
              height={this.state.viewHeight / 2}
              bgColor={"#9C5FDA"}
            />
            <User
              userId={5}
              width={wp("100%")}
              height={this.state.viewHeight / 2}
              bgColor={"#6EB8BE"}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000E1B"
  }
});

const mapStateToProps = state => {
  return {
    logGames: state.playersLogs.logGames,
    player: state.settingGames.player,
    nbPlayer: state.settingGames.nbPlayer
  };
};

export default connect(mapStateToProps)(Score);
