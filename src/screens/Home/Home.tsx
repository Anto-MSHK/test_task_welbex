import { StackScreenProps } from "@react-navigation/stack";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { TypeRootStackParamList } from "../../navigation/types";
import { Navbar } from "./../../components/Navbar/Navbar";
import { TransportCard } from "./../../components/TransportCard/TransportCard";
import data from "./../../../example.json";
import { ListView } from "./Views/ListView";
import { MapsView } from "./Views/MapView";
import { ButtonGroup } from "../../components/ButtonGroup/ButtonGroup";

type HomeI = StackScreenProps<TypeRootStackParamList, "Home">;

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

export const Home: FC<HomeI> = ({}) => {
  const { t } = useTranslation();
  const curData: TransportListT[] = data as TransportListT[];
  const navbarItems = [
    { title: t("NAV_1"), value: "list" },
    { title: t("NAV_2"), value: "map" },
  ];
  const filterItems = [
    { title: t("CARGO"), value: "cargo" },
    { title: t("PASSENGER"), value: "passenger" },
    { title: t("SPECIAL"), value: "special" },
  ];
  const [activeNavItem, setActiveNavItem] = useState(navbarItems[0].value);
  const [activeItems, setActiveItems] = useState(
    filterItems.map((it) => it.value)
  );

  return (
    <View style={styles.wrapper}>
      <Navbar
        items={navbarItems}
        activeItem={activeNavItem}
        onPress={(item) => {
          setActiveNavItem(item);
        }}
      />
      <ButtonGroup
        items={filterItems}
        activeItems={activeItems}
        onPress={(item, isActive) => {
          setActiveItems((prev) => {
            if (isActive) return [...prev, item];
            else if (prev.length !== 1) return prev.filter((el) => el !== item);
            else return prev;
          });
        }}
      />
      {activeNavItem === "list" ? (
        <ListView
          data={curData.filter((el) =>
            activeItems.map((it: any) => el.type === it).find((it) => it)
          )}
        />
      ) : (
        <MapsView
          data={curData.filter((el) =>
            activeItems.map((it: any) => el.type === it).find((it) => it)
          )}
          filterItems={activeItems}
        />
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
    paddingHorizontal: 15,
  },
});
