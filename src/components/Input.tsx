import React, { FC, useState } from "react";
import TextInputMask, { Mask, MaskInputProps } from "react-native-mask-input";

import {
  View,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

import fonts from "../styles/fonts";
import colors from "../styles/colors";

interface InputProps extends TextInputProps {
  placeholder: string;
  mask?: Mask;
  isPassword?: boolean;
  containerStyles?: object;
  errorMessage?: string;
}

export const Input: FC<InputProps & MaskInputProps> = ({
  placeholder,
  mask,
  isPassword = false,
  containerStyles,
  errorMessage,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  return (
    <>
      <View style={[styles.container, containerStyles]}>
        <TextInputMask
          {...rest}
          secureTextEntry={isPassword ? isPasswordVisible : false}
          style={styles.textInput}
          placeholder={placeholder ? placeholder : undefined}
          mask={mask ? mask : undefined}
        />

        {isPassword && (
          <TouchableOpacity
            style={styles.iconStyles}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? (
              <Feather name="eye" size={28} color={colors.primary} />
            ) : (
              <Feather name="eye-off" size={28} color={colors.primary} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {errorMessage && (
        <Text style={styles.errorMessageText}>{errorMessage}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderRadius: 100000,
    paddingLeft: 15
  },
  textInput: {
    ...fonts.MediumFont,
    width: "100%",
    color: colors.gray200,
    fontSize: 14,
  },
  iconStyles: {
    position: "absolute",
    right: 20,
  },
  errorMessageText: {
    ...fonts.MediumFont,
    fontSize: 12,
    color: "red"
  },
});
