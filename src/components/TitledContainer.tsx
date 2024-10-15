import React, { FC } from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import Icon from "@expo/vector-icons/FontAwesome5";
import colors from "styles/colors";
import fonts from "styles/fonts";

const { height } = Dimensions.get("window");

export const TitledContainer: FC<{
  children: React.ReactNode;
  title: string;
  onPressBack: () => void;
  icon?: boolean;
}> = ({ children, onPressBack, title, icon = false }) => {
  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <View style={styles.containerButtonIconAndText}>
        <TouchableOpacity style={styles.containerButton} onPress={onPressBack}>
          <Icon color={colors.primary} name="arrow-left" size={18} />
        </TouchableOpacity>

        {icon ? (
          <View style={styles.containerIcon}>
            <Feather name="map-pin" size={20} color="white" />
            <Text style={[styles.containerTitleText, { fontSize: 14 }]}>{title}</Text>
          </View>
        ) : (
          <Text style={styles.containerTitleText}>{title}</Text>
        )}
        <View></View>
      </View>
      <View style={styles.containerChildren}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  containerButtonIconAndText: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    height: (height * 0.1) / 1.2,
  },
  containerButton: {
    width: 25,
    height: 25,
    backgroundColor: "white",
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  containerTitleText: {
    ...fonts.boldFont,
    color: colors.background,
    fontSize: 18,
  },
  containerChildren: {
    flex: 1,
    backgroundColor: "#DADADA",
  },
  containerIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  }
});
