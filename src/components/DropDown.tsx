import React, { FC, useState } from "react";

import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { StylesProps } from "types";
import { AntDesign } from "@expo/vector-icons";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface DropDownProps {
  data?: string[];
  containerStyles?: object;
  setItem: (Item: string) => void;
}

export const DropDown: FC<DropDownProps> = ({
  data,
  containerStyles,
  setItem
}) => {
  const [title, setTitle] = useState(data![0]);
  const [isOpen, setIsOpen] = useState(false)

  const containerDropdownButton: StylesProps = {
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: isOpen ? 25 : 10000,
    marginTop: 20
  };

  return (
    <View style={[containerDropdownButton, containerStyles]}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.buttonOpenDropdown}>
        <Text style={[styles.dropdownTextItem, { color: colors.gray200 }]}>{title}</Text>
        {isOpen ? (
          <AntDesign name="up" size={24} color={colors.primary} />
        ) : (
          <AntDesign name="down" size={24} color={colors.primary} />
        )}
      </TouchableOpacity>

      {isOpen && (
        <>
          {data?.map((item, index) => (
            <View key={index} style={{ width: "100%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  setTitle(item);
                  setIsOpen(false);
                  setItem(item)
                }}
                style={[
                  styles.dropdownButtonItem,
                  index === data.length - 1
                    ? { borderBottomWidth: 0, paddingBottom: 5 }
                    : undefined,
                ]}>
                <Text style={styles.dropdownTextItem}>{item}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  placeholderText: {
    ...fonts.MediumFont,
    width: "100%",
    color: "#7e7e7e",
    fontSize: 14,
  },
  buttonOpenDropdown: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15,
    height: 40,
  },
  dropdownButtonItem: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: "97%",
  },
  dropdownTextItem: {
    ...fonts.MediumFont,
    color: colors.primary,
    fontSize: 16,
    marginLeft: 25
  },
  customInputStyles: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingBottom: 12,
    marginVertical: 10,
    paddingRight: 15,
  },
});
