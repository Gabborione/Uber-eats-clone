import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyDYUURT_jsOwWzu-RoeTZUEB0lvu1mxMGU" }}
        onPress={(data, details = null) => {
          const city =
            data.description === null
              ? data.matched_substrings[0]
              : data.description.split(",")[0];
          cityHandler(city);
        }}
        placeholder="Search..."
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "bold",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <TouchableOpacity onPress={() => cityHandler("Milano")}>
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                backgroundColor: "white",
                padding: 9,
                borderRadius: 30,
                alignItems: "center",
              }}
            >
              <AntDesign
                name="clockcircle"
                size={11}
                style={{ marginRight: 10 }}
              />
              <Text>Search</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
