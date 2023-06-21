import { FC } from "react";
import { View, Text } from "react-native";
interface CustomMarkerProps {
  label: string;
}

export const CustomMarker: FC<CustomMarkerProps> = ({ label }) => {
  return (
    <View style={{ width: 40, height: 40, backgroundColor: "red" }}>
      <Text>{label}</Text>
    </View>
  );
};
