import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { TransportCard } from "../../../components/TransportCard/TransportCard";
import { TransportListT } from "../Home";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../../navigation/types";
import MapView, { Marker } from "react-native-maps";
import { useTranslation } from "react-i18next";

interface MapsViewI {
  data: TransportListT[];
  filterItems: string[];
}
export const MapsView: FC<MapsViewI> = ({ data, filterItems }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t } = useTranslation();

  let [averageLatitude, setAverageLatitude] = useState(0);
  let [averageLongitude, setAverageLongitude] = useState(0);
  let [averageLatitudeD, setAverageLatitudeD] = useState(0);
  let [averageLongitudeD, setAverageLongitudeD] = useState(0);

  useEffect(() => {
    let totalLatitude = 0;
    let totalLongitude = 0;
    let minLatitude = data[0].coordinate.latitude;
    let maxLatitude = data[0].coordinate.latitude;
    let minLongitude = data[0].coordinate.longitude;
    let maxLongitude = data[0].coordinate.longitude;

    for (let i = 0; i < data.length; i++) {
      const latitude = data[i].coordinate.latitude;
      const longitude = data[i].coordinate.longitude;

      if (latitude < minLatitude) {
        minLatitude = latitude;
      } else if (latitude > maxLatitude) {
        maxLatitude = latitude;
      }

      if (longitude < minLongitude) {
        minLongitude = longitude;
      } else if (longitude > maxLongitude) {
        maxLongitude = longitude;
      }

      totalLatitude += data[i].coordinate.latitude;
      totalLongitude += data[i].coordinate.longitude;
    }

    setAverageLatitude(totalLatitude / data.length);
    setAverageLongitude(totalLongitude / data.length);
    setAverageLatitudeD(maxLatitude - minLatitude + 10);
    setAverageLongitudeD(maxLongitude - minLongitude + 10);
  }, []);

  return (
    <MapView
      style={{ height: "100%", flex: 1 }}
      initialRegion={{
        latitude: averageLatitude,
        longitude: averageLongitude,
        latitudeDelta: averageLatitudeD,
        longitudeDelta: averageLongitudeD,
      }}
    >
      {data &&
        data
          .filter((el) =>
            filterItems.map((it) => el.type === it).find((it) => it)
          )
          .map((trans, index, arr) => {
            let pathToIcon = require("../../../icons/map_icons/special.png");
            switch (trans.type) {
              case "cargo":
                pathToIcon = require("../../../icons/map_icons/cargo.png");
                break;
              case "passenger":
                pathToIcon = require("../../../icons/map_icons/passenger.png");
                break;
              case "special":
                pathToIcon = require("../../../icons/map_icons/special.png");
                break;
            }
            return (
              <Marker
                title={`${t("NM")} #${trans.nm}`}
                key={trans.nm}
                description={trans.driver}
                coordinate={trans.coordinate}
                image={pathToIcon}
                onCalloutPress={() => {
                  navigation.navigate("TransportItem", {
                    transportId: trans.nm,
                  });
                }}
              />
            );
          })}
    </MapView>
  );
};

const styles = StyleSheet.create({});
