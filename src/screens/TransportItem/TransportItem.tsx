import { StyleSheet, View, Text, Button } from "react-native";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { TransportCard } from "./../../components/TransportCard/TransportCard";
import { Navbar } from "./../../components/Navbar/Navbar";
import { appStyles, shadow } from "../../../App";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import CustomButton from "../../components/CustomButton/CustomButton";
import { CustomMarker } from "../../components/CustomMarker/CustomMarker";

interface ListItemI extends React.ComponentProps<typeof View> {
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
      <MapView
        style={{ height: 300 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title={"11"}
          key={"11"}
          description={"11"}
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          image={require("../../icons/cargo.png")}
        />
      </MapView>

      <View style={styles.content}>
        <View style={styles.list}>
          <ListItem parameter={t("CATEGORY")} value="TransportItem" />
          <ListItem parameter={t("DRIVER")} value="TransportItem" />
          <ListItem parameter={t("DRIVER_PHONE")} value="TransportItem" />
        </View>
        <View style={styles.actions}>
          <CustomButton
            title="Позвонить"
            color="#006CE8"
            textColor="white"
            type="fill"
          />
          <CustomButton
            title="Написать"
            color="#006CE8"
            textColor="#006CE8"
            type="outline"
          />
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
    justifyContent: "space-between",
  },
  list: {
    backgroundColor: "white",
    gap: 15,
    padding: 15,
    borderRadius: 10,
    ...shadow,
  },
  listItem: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actions: {
    gap: 10,
    marginBottom: 15,
  },
});
