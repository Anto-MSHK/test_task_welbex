import { StackScreenProps } from "@react-navigation/stack";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { TypeRootStackParamList } from "../../navigation/types";
import { Navbar } from "./../../components/Navbar/Navbar";
import { TransportCard } from "./../../components/TransportCard/TransportCard";
import data from "./../../../example.json";
import { ListView } from "./Views/ListView";
import { MapsView } from "./Views/MapView";

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

export const Home: FC = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const curData: TransportListT[] = data as TransportListT[];
  const navbarItems = [
    { title: t("NAV_1"), value: "list" },
    { title: t("NAV_2"), value: "map" },
  ];
  const [activeNavItem, setActiveNavItem] = useState(navbarItems[0].value);
  return (
    <View style={styles.wrapper}>
      <Navbar
        items={navbarItems}
        activeItem={activeNavItem}
        onPress={(item) => {
          setActiveNavItem(item);
        }}
      />
      {activeNavItem === "list" ? (
        <ListView data={curData} />
      ) : (
        <MapsView data={curData} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 10,
    //  marginTop: 15,
    paddingHorizontal: 15,
  },
});
