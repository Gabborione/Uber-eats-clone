import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);

  const total = items
    .map((item) => Number(item.price.replace("€", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalEUR = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalEUR);

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          top: 730,
          zIndex: 999,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "black",
              flexDirection: "row",
              justifyContent: "center",
              padding: 15,
              width: 300,
              position: "relative",
              borderRadius: 30,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
