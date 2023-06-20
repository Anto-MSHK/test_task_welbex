import { StyleSheet, View, Text } from "react-native";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TransportCard } from "./../../components/TransportCard/TransportCard";

export const Home: FC = () => {
  return (
    <View style={styles.wrapper}>
      <TransportCard
        registrationNumber={1000}
        driver="Иванов Иван Иванович"
        type="cargo"
        key={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
