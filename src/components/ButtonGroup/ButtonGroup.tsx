import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";
import CustomButton from "../CustomButton/CustomButton";

interface ButtonGroupI extends React.ComponentProps<typeof View> {
  items: { title: string; value: string }[];
  activeItems: string[];
}

export const ButtonGroup: FC<ButtonGroupI> = ({ items, activeItems }) => {
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

          //  height: 50,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {items && (
          <CustomButton
            color="#006CE8"
            title="грузовые"
            textColor="#006CE8"
            type="outline"
            style={{
              paddingHorizontal: 15,
              height: 40,
              marginRight: 10,
              marginLeft: 10,
              backgroundColor: "white",
            }}
          />
        )}
      </ScrollView>
    </View>
  );
};
