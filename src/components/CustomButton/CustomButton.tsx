import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import { appStyles, shadow } from "../../../App";

interface CustomButtonI extends React.ComponentProps<typeof TouchableOpacity> {
  title: string;
  type: "fill" | "outline";
  color: string;
  textColor: string;
}

export const CustomButton: FC<CustomButtonI> = ({
  title,
  type,
  color,
  textColor,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        type === "fill"
          ? {
              ...styles.button,
              ...styles.shadow,
              backgroundColor: color,
              ...(style as any),
            }
          : {
              ...styles.button,
              ...styles.outline,
              borderColor: color,
              ...(style as any),
            }
      }
    >
      <Text style={{ ...appStyles.h3, color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    height: 50,
  },
  shadow: {
    ...shadow,
  },
  outline: { borderWidth: 2, backgroundColor: "transperent" },
});

export default CustomButton;
