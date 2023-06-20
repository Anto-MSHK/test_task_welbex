import { StyleSheet, View, Text } from "react-native";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { TransportCard } from "./../../components/TransportCard/TransportCard";
import { Navbar } from "./../../components/Navbar/Navbar";

export const Home: FC = () => {
  const { t } = useTranslation();
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
      <View style={styles.content}>
        <TransportCard
          registrationNumber={1000}
          driver="Иванов Иван Иванович"
          type="cargo"
          key={1}
        />
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
});
