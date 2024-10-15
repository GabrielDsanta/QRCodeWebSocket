import React, { FC } from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import F18WhiteLogo from "@assets/F18WhiteLogo.svg";
import colors from "styles/colors";
import fonts from "styles/fonts";

const { height } = Dimensions.get("window");

export const HomeTitledContainer: FC<{
  children: React.ReactNode;
  title: string;
  icon?: boolean;
  handleLogout: () => void;
}> = ({ children, title, icon = false, handleLogout }) => {
  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <View style={styles.containerButtonIconAndText}>
        <F18WhiteLogo width={40} height={40} />

        {icon ? (
          <View style={styles.containerIcon}>
            <Feather name="map-pin" size={20} color="white" />
            <Text style={[styles.containerTitleText, { fontSize: 14 }]}>
              {title}
            </Text>
          </View>
        ) : (
          <Text style={styles.containerTitleText}>{title}</Text>
        )}
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: colors.secondary,
            borderRadius: 10000,
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
          }}
        >
          <MaterialIcons name="logout" size={24} color="white" />
        </TouchableOpacity>
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
    height: (height * 0.1) / 1,
  },
  containerButton: {
    width: 25,
    height: 25,
    backgroundColor: "white",
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitleText: {
    ...fonts.boldFont,
    color: colors.background,
    fontSize: 18,
  },
  containerChildren: {
    flex: 1,
    backgroundColor: "white",
  },
  containerIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
