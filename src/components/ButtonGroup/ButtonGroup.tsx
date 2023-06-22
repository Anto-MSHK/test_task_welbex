import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { FC } from "react";
import CustomButton from "../CustomButton/CustomButton";

interface ButtonGroupI extends React.ComponentProps<typeof View> {
  items: { title: string; value: string }[];
  activeItems: string[];
  onPress: (item: string, isActive: boolean) => any;
}

export const ButtonGroup: FC<ButtonGroupI> = ({
  items,
  activeItems,
  onPress,
}) => {
  return (
    <View
      style={{
        flex: 0,
        position: "absolute",
        zIndex: 1,
        elevation: 1,
        top: 42,
      }}
    >
      <ScrollView
        style={{
          flexDirection: "row",
          marginTop: 5,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {items &&
          items.map((item, index, arr) => {
            const isActive = activeItems.find((it) => it === item.value);
            return (
              <CustomButton
                color={isActive ? "#006CE8" : "gray"}
                title={item.title}
                textColor={isActive ? "white" : "gray"}
                type={isActive ? "fill" : "outline"}
                style={{
                  ...styles.button,
                  marginLeft: index === 0 ? 10 : 0,
                  backgroundColor: isActive ? "#006CE8" : "white",
                }}
                onPress={() => {
                  onPress(item.value, !isActive);
                }}
                key={item.value}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    height: 40,
    marginRight: 10,
  },
});

export default CustomButton;
