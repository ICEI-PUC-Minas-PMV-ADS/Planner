import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = ({ type, children }) => {
  const style = getTextStyle(type);
  return <Text style={[styles.defaultStyle, style]}>{children}</Text>;
};

const getTextStyle = (type) => {
  switch (type) {
    case "Title":
      return styles.Title;
    case "Subtitle":
      return styles.Subtitle;
    case "SmallText":
      return styles.SmallText;
    case "SmallTextBold":
      return styles.SmallTextBold;
    case "Label":
      return styles.Label;
    case "MediumText":
      return styles.MediumText;
    case "MediumTextBold":
      return styles.MediumTextBold;
    case "ErrorText":
      return styles.ErrorText;
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "Quicksand_400Regular",
    fontSize: 16,
    fontStyle: "normal",
    color: "#000000",
  },
  Title: {
    fontFamily: "Quicksand_700Bold",
    fontStyle: "normal",
    fontSize: 26,
  },
  Subtitle: {
    fontFamily: "Quicksand_700Bold",
    fontStyle: "normal",
    fontSize: 20,
  },
  SmallText: {
    fontFamily: "Quicksand_400Regular",
    fontStyle: "normal",
    fontSize: 14,
  },
  SmallTextBold: {
    fontFamily: "Quicksand_700Bold",
    fontStyle: "normal",
    fontSize: 14,
  },
  Label: {
    fontFamily: "Quicksand_700Bold",
    fontStyle: "normal",
    fontSize: 14,
    color: "#696767",
  },
  MediumText: {
    fontFamily: "Quicksand_400Regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  MediumTextBold: {
    fontFamily: "Quicksand_700Bold",
    fontStyle: "normal",
    fontSize: 16,
  },
  ErrorText: {
    fontFamily: "Quicksand_400Regular",
    fontStyle: "normal",
    fontSize: 12,
    color: "#ED4B58",
  },
});

export default AppText;
