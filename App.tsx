import "react-native-reanimated";
import React from "react";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import { QueryClient, QueryClientProvider } from "react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Routes from "./src/Routes";

const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return <View />;
  }

  return (
 
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
            <Routes />
          <StatusBar style="light" />
        </QueryClientProvider>
      </GestureHandlerRootView>

  );
}

const fonts = {
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
};
