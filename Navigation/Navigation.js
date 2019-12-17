import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Score from "../Screens/Score";
import Graphique from "../Screens/Graphique";
import Historique from "../Screens/Historique";
import Configuration from "../Screens/Configuration";

const ScoreNavigator = createStackNavigator({ Score });
const GraphNavigator = createStackNavigator({ Graphique });
const HistNavigator = createStackNavigator({ Historique });
const ConfNavigator = createStackNavigator({ Configuration });

const TabNavigator = createBottomTabNavigator(
  {
    Score: {
      screen: ScoreNavigator,
      navigationOptions: {
        tabBarLabel: "Score",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={30} color={tintColor} />
        )
      }
    },
    Graphique: {
      screen: GraphNavigator,
      navigationOptions: {
        tabBarLabel: "Graphique",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-stats" size={30} color={tintColor} />
        )
      }
    },
    Historique: {
      screen: HistNavigator,
      navigationOptions: {
        tabBarLabel: "Historique",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-time" size={30} color={tintColor} />
        )
      }
    },
    Configuration: {
      screen: ConfNavigator,
      navigationOptions: {
        tabBarLabel: "Configuration",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Score",
    tabBarOptions: {
      activeBackgroundColor: "#232B50",
      inactiveBackgroundColor: "#232B50",
      showLabel: true,
      showIcon: true,
      activeTintColor: "#FFFFFF",
      style: {
        backgroundColor: "#232B50" // TabBar background
      }
    }
  }
);

export default createAppContainer(TabNavigator);
