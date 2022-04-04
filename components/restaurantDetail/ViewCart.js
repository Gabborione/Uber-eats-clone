import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ViewCart() {
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
