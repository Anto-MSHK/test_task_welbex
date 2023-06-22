import { StackScreenProps } from "@react-navigation/stack";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text, Button } from "react-native";
import { TypeRootStackParamList } from "../../navigation/types";
import { appStyles } from "../../../App";

type Props = StackScreenProps<TypeRootStackParamList, "Home">;

export type TransportListT = {
  nm: number;
  type: "cargo" | "passenger" | "special";
  driver: string;
  driverPhone: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
};

export const Settings: FC = ({ navigation }: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.wrapper}>
      <Text style={appStyles.h3}>{`${t("LANG")}:`}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button
          onPress={() => i18n.changeLanguage("ru")}
          title={t("RU")}
          disabled={i18n.language === "ru"}
        />
        <Button
          onPress={() => i18n.changeLanguage("en")}
          title={t("EN")}
          disabled={i18n.language === "en"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    gap: 10,
    //  marginTop: 15,
    paddingHorizontal: 15,
  },
});
