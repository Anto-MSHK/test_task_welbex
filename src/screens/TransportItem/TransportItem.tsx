import { StyleSheet, View, Text } from "react-native";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { TransportCard } from "./../../components/TransportCard/TransportCard";
import { Navbar } from "./../../components/Navbar/Navbar";
import { appStyles } from "../../../App";

export const TransportItem: FC = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.listItem}>
          <Text style={{ ...appStyles.h3 }}>{t("CATEGORY")}</Text>
          <Text style={{ ...appStyles.h2, fontWeight: "700" }}>
            TransportItem
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  listItem: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
