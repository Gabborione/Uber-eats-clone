import { View, Text } from "react-native";
import React from "react";

export default function OrderItem({ item }) {
  const { title, price } = item;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16 }}> {title}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}> {price}</Text>
    </View>
  );
}
