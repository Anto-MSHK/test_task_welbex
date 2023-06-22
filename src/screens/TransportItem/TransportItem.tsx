import { StyleSheet, View, Text, Linking } from "react-native";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { appStyles } from "../../../App";
import MapView, { Marker } from "react-native-maps";
import CustomButton from "../../components/CustomButton/CustomButton";
import data from "./../../../example.json";
import { TransportListT } from "../Home/Home";
import { TypeRootStackParamList } from "../../navigation/types";
import { StackScreenProps } from "@react-navigation/stack";
import { getTransportIcon } from "../../utils/getTransportIcon";

type TransportItemI = StackScreenProps<TypeRootStackParamList, "TransportItem">;

interface ListItemI extends React.ComponentProps<typeof View> {
  parameter: string;
  value: string;
}
export const ListItem: FC<ListItemI> = ({ parameter, value }) => {
  return (
    <View style={styles.listItem}>
      <Text style={{ ...appStyles.h3 }}>{parameter}</Text>
      <Text
        style={{
          ...appStyles.h3,
          fontWeight: "700",
          maxWidth: 160,
          textAlign: "right",
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export const TransportItem: FC<TransportItemI> = ({ route }) => {
  const { t } = useTranslation();
  const curData: TransportListT[] = data as TransportListT[];
  const transport = curData.find((el) => el.nm === route.params.transportId);
  let pathToIcon = getTransportIcon(transport.type);

  return (
    <View>
      {transport && (
        <View style={styles.wrapper}>
          <MapView
            style={{ height: 300 }}
            initialRegion={{
              latitude: transport.coordinate.latitude,
              longitude: transport.coordinate.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.02,
            }}
          >
            <Marker
              title={`${t("NM")} #${transport.nm}`}
              key={transport.nm}
              description={transport.driver}
              coordinate={transport.coordinate}
              image={pathToIcon}
            />
          </MapView>

          <View style={styles.content}>
            <View style={{ ...styles.list, ...appStyles.shadow }}>
              <ListItem
                parameter={t("CATEGORY")}
                value={t(transport.type.toUpperCase())}
              />
              <ListItem parameter={t("DRIVER")} value={transport.driver} />
              <ListItem
                parameter={t("DRIVER_PHONE")}
                value={transport.driverPhone}
              />
            </View>
            <View style={styles.actions}>
              <CustomButton
                title={t("CALL")}
                color="#006CE8"
                textColor="white"
                type="fill"
                onPress={() => {
                  Linking.openURL(`tel:${transport.driverPhone}`);
                }}
              />
              <CustomButton
                title={t("SEND")}
                color="#006CE8"
                textColor="#006CE8"
                type="outline"
                onPress={() => {
                  Linking.openURL(
                    `whatsapp://send?text=${t("MESSAGE")}&phone=${
                      transport.driverPhone
                    }`
                  );
                }}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    height: "100%",
  },
  content: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  list: {
    justifyContent: "space-between",
    backgroundColor: "white",
    gap: 15,
    padding: 15,
    borderRadius: 10,
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
