import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const LogItem = ({ item }) => {
  return (
    // <Text style={{ color: "white" }}>
    //   {item.date.getHours()}:{item.date.getMinutes()} {item.player} {item.addTo}{" "}
    //   {item.score}{" "}
    // </Text>
    <View style={styles.main_container}>
      <View style={styles.content_date}>
        <Text style={styles.text}>
          {item.date.getHours()}:{item.date.getMinutes()}
        </Text>
      </View>
      <View style={styles.content_player}>
        <Text style={styles.text}>{item.player}</Text>
      </View>
      <View style={styles.content_addTo}>
        <Text
          style={item.addTo > 0 ? styles.text_addToGreen : styles.text_addToRed}
        >
          {item.addTo}
        </Text>
      </View>
      <View style={styles.content_score}>
        <Text style={styles.text_bold}>{item.score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    width: wp("90%"),
    borderBottomWidth: 1,
    borderBottomColor: "#232B50"
  },
  content_date: {
    width: wp("20%"),
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  content_player: {
    width: wp("40%"),
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  content_addTo: {
    width: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  content_score: {
    width: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  text: {
    fontSize: 18,
    color: "white"
  },
  text_bold: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white"
  },
  text_addToRed: {
    fontWeight: "bold",
    fontSize: 18,
    color: "red"
  },
  text_addToGreen: {
    fontWeight: "bold",
    fontSize: 18,
    color: "green"
  }
});

export default LogItem;
