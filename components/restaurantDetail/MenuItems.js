import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";

const foods = [
  {
    title: "Lasagna",
    description: "blablabla",
    price: "€13.50",
    image:
      "https://wips.plug.it/cips/buonissimo.org/cms/2018/12/Lasagne-alla-bolognese-4.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "blobloblo",
    price: "€19.20",
    image:
      "https://primochef.it/wp-content/uploads/2020/09/SH_pollo_tandoori.jpg",
  },
  {
    title: "Lasagna",
    description: "blablabla",
    price: "€13.50",
    image:
      "https://wips.plug.it/cips/buonissimo.org/cms/2018/12/Lasagne-alla-bolognese-4.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "blobloblo",
    price: "€19.20",
    image:
      "https://primochef.it/wp-content/uploads/2020/09/SH_pollo_tandoori.jpg",
  },
  {
    title: "Lasagna",
    description: "blablabla",
    price: "€13.50",
    image:
      "https://wips.plug.it/cips/buonissimo.org/cms/2018/12/Lasagne-alla-bolognese-4.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "blobloblo",
    price: "€19.20",
    image:
      "https://primochef.it/wp-content/uploads/2020/09/SH_pollo_tandoori.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "blobloblo",
    price: "€19.20",
    image:
      "https://primochef.it/wp-content/uploads/2020/09/SH_pollo_tandoori.jpg",
  },
  {
    title: "Lasagna",
    description: "blablabla",
    price: "€13.50",
    image:
      "https://wips.plug.it/cips/buonissimo.org/cms/2018/12/Lasagne-alla-bolognese-4.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "blobloblo",
    price: "€19.20",
    image:
      "https://primochef.it/wp-content/uploads/2020/09/SH_pollo_tandoori.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "bold",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={1} style={{ marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
