import React, { FC, useEffect, useState } from "react";

import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import fonts from "styles/fonts";

export const SignIn: FC<{ navigation: any }> = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(true);
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            ...fonts.boldFont,
            color: "#404040",
            marginTop: 35,
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Bem-vindo(a)
        </Text>

        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{
            height: 320,
            alignSelf: "center",
            width: 320,
            marginTop: 70
          }}
        />

        <TouchableOpacity
          onPress={() => setScanned(true)}
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#1e6baa",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            gap: 10,
            marginTop: "35%",
          }}
        >
          <MaterialIcons name="qr-code-scanner" size={24} color="white" />
          <Text style={{ ...fonts.boldFont, color: "white", fontSize: 16 }}>
            Scan QR Code
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
