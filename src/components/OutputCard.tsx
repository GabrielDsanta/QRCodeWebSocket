import React, { FC, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { ProductStock } from "types";
import { formatDate } from "@utils/formatDate";

import fonts from "styles/fonts";

interface OutputCardProps {
  productStock: ProductStock;
  isLastItem: boolean;
}

export const OutputCard: FC<OutputCardProps> = ({
  productStock,
  isLastItem = false,
}) => {
  const { imageUri, createdAt, unit, quantity, name } = productStock;

  const [outputValue, setOutputValue] = useState("0");

  return (
    <View style={[styles.container, isLastItem && { borderBottomWidth: 0 }]}>
      <Image
        style={{
          width: 50,
          height: 50,
          resizeMode: "contain",
          borderRadius: 10,
        }}
        source={{ uri: imageUri }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginLeft: 8,
        }}
      >
        <View>
          <Text style={styles.boldText}>Produto</Text>
          <Text style={styles.mediumText}>{name}</Text>
        </View>

        <View>
          <Text style={styles.boldText}>Qtd</Text>
          <Text style={styles.mediumText}>{quantity}</Text>
        </View>

        <View>
          <Text style={styles.boldText}>Unidade</Text>
          <Text style={styles.mediumText}>{unit}</Text>
        </View>
      </View>

      <View
        style={{
          borderRightWidth: 1,
          borderLeftWidth: 1,
          borderColor: "#DFDFDF",
          marginHorizontal: 5,
          paddingHorizontal: 5,
        }}
      >
        <Text style={styles.boldText}>Recebido em:</Text>
        <Text style={styles.mediumText}>{formatDate(createdAt)}</Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.boldText}>Qtd. Saída</Text>
        <TextInput
          onChangeText={setOutputValue}
          value={outputValue}
          keyboardType="number-pad"
          style={[
            styles.mediumText,
            {
              width: 40,
              height: 20,
              borderWidth: 1,
              borderColor: "#E2E2E2",
              borderRadius: 5,
              marginTop: 5,
              textAlign: "center",
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#DFDFDF",
    marginBottom: 20,
  },
  boldText: {
    ...fonts.boldFont,
    color: "#404040",
    fontSize: 12,
  },
  mediumText: {
    ...fonts.MediumFont,
    color: "#404040",
    fontSize: 12,
  },
});
