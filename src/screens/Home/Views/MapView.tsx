import React, { FC, useEffect, useState } from "react";
import { TransportListT } from "../Home";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../../navigation/types";
import MapView, { Marker } from "react-native-maps";
import { useTranslation } from "react-i18next";
import { getAverageCoordinate } from "../../../utils/getAverageCoordinate";
import { getTransportIcon } from "../../../utils/getTransportIcon";

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
    const cords = getAverageCoordinate(data);
    setAverageLatitude(cords.averageLatitude);
    setAverageLongitude(cords.averageLongitude);
    setAverageLatitudeD(cords.averageLatitudeD);
    setAverageLongitudeD(cords.averageLongitudeD);
  }, [filterItems]);

  return (
    <MapView
      style={{ height: "100%", flex: 1 }}
      region={{
        latitude: averageLatitude,
        longitude: averageLongitude,
        latitudeDelta: averageLatitudeD,
        longitudeDelta: averageLongitudeD,
      }}
    >
      {data &&
        data.map((trans) => {
          let pathToIcon = getTransportIcon(trans.type);
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
