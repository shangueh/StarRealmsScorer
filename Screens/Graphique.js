import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { connect } from "react-redux";

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

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

const data = {
  datasets: [
    {
      data: [20, 45, 28, 50, 50, 43],
      color: (opacity = 1) => `rgba(243, 100, 59, ${opacity})`
    },
    {
      data: [2, 4, 8, 8, 9, 3],
      color: (opacity = 1) => `rgba(84, 116, 217, ${opacity})`
    }
  ]
};

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
};

class Graphique extends Component {
  static navigationOptions = {
    title: "Graphique",
    headerStyle: {
      backgroundColor: "#232B50"
    },
    headerTintColor: "#fff",
    headerRight: () => <LogoShare />
  };

  componentDidMount() {
    const dataJ1 = this.props.logGames.map(log => {
      if (log.id === 0) return log.score;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LineChart
          data={data}
          width={width}
          height={height - 60 * 3}
          chartConfig={chartConfig}
          style={{ marginTop: 60 * 3 }}
        />
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

const mapStateToProps = state => {
  return {
    logGames: state.playersLogs.logGames
  };
};

export default connect(mapStateToProps)(Graphique);
