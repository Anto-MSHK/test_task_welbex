import { StyleSheet, View, Text } from "react-native";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { TransportCard } from "./../../components/TransportCard/TransportCard";
import { Navbar } from "./../../components/Navbar/Navbar";
import { appStyles } from "../../../App";

interface ListItemI extends React.ComponentProps<any> {
  parameter: string;
  value: string;
}
export const ListItem: FC<ListItemI> = ({ parameter, value, style }) => {
  return (
    <View style={styles.listItem}>
      <Text style={{ ...appStyles.h3 }}>{parameter}</Text>
      <Text style={{ ...appStyles.h2, fontWeight: "700" }}>{value}</Text>
    </View>
  );
};

export const TransportItem: FC = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <ListItem parameter={t("CATEGORY")} value="TransportItem" />
        <ListItem parameter={t("DRIVER")} value="TransportItem" />
        <ListItem parameter={t("DRIVER_PHONE")} value="TransportItem" />
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
    marginBottom: 10,
  },
});
