import React, { FC } from "react";

import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps, ActivityIndicator } from "react-native";

import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  containerStyle?: object;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({ title, containerStyle, isLoading, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...rest}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ): (
        <Text style={styles.textTitle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    borderRadius: 15,
    alignItems: "center", 
    justifyContent: "center"
  },
  textTitle: {
    ...fonts.boldFont,
    fontSize: 16
  }
});
