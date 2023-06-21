import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { FC } from "react";
import { appStyles, shadow } from "../../../App";

interface NavbarI {
  items: { title: string; value: string }[];
  activeItem: string;
  onPress?: (item: string) => any;
}
export const Navbar: FC<NavbarI> = ({ items, activeItem, onPress }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      >
        {items &&
          items.map((item, index) => (
            <TouchableOpacity onPress={() => onPress(item.value)}>
              <Text
                key={item.value + index}
                style={
                  activeItem === item.value
                    ? { ...appStyles.h2, ...styles.activeItem }
                    : appStyles.h2
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: "white",
    ...shadow,
  },
  activeItem: {
    borderBottomWidth: 2,

    borderColor: "#006CE8",
    color: "#006CE8",
    fontWeight: "700",
  },
});
