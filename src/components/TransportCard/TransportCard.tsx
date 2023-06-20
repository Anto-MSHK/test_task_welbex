import React, { FC, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { appStyles, shadow } from "../../../App";
import { useTranslation } from "react-i18next";

interface TransportCardI {
  registrationNumber: number;
  type: "cargo" | "passenger" | "special";
  driver: string;
  onPress?: (registrationNumber: number) => any;
}

export const TransportCard: FC<TransportCardI> = ({
  registrationNumber,
  type,
  driver,
  onPress,
}) => {
  const { t } = useTranslation();
  let pathToIcon = require("../../icons/special.png");
  switch (type) {
    case "cargo":
      pathToIcon = require("../../icons/cargo.png");
      break;
    case "passenger":
      pathToIcon = require("../../icons/passenger.png");
      break;
    case "special":
      pathToIcon = require("../../icons/special.png");
      break;
  }

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        onPress(registrationNumber);
      }}
    >
      <View style={styles.mainInfo}>
        <Image source={pathToIcon} style={styles.typeImg} />
        <View>
          <Text style={{ ...appStyles.h2, fontWeight: "700" }}>
            {t("NM") + " #" + registrationNumber}
          </Text>
          <Text style={{ ...appStyles.h4, marginTop: -6 }}>
            {t(type.toUpperCase())}
          </Text>
        </View>
      </View>
      <View style={styles.driverInfo}>
        <Image
          source={require("../../icons/user.png")}
          style={styles.driverImg}
        />
        <Text style={{ ...appStyles.h4 }}>{driver}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    ...shadow,
  },
  mainInfo: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  typeImg: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  driverImg: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  driverInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
