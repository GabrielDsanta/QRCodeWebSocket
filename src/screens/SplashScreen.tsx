import React, { FC } from "react";

import { wait } from "@utils/time";
import { useAuth } from "hooks/useAuth";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Local } from "services/Local";
import { useQuery } from "react-query";

import colors from "styles/colors";

export const SplashScreen: FC<{ navigation: any }> = ({ navigation }) => {
  const { checkJWT } = useAuth();

  const { data } = useQuery("checkUser", async () => {
    const JWT = await Local.get("JWT");
    await wait(4);
    if (JWT) {
      const { success } = await checkJWT();
      if (success) {
        navigation.navigate("AppTabs");
      } else {
        navigation.navigate("SignIn");
      }
    } else {
      navigation.navigate("SignIn");
    }
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
