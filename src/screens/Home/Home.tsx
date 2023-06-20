import { StackScreenProps } from "@react-navigation/stack";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { TypeRootStackParamList } from "../../navigation/types";
import { Navbar } from "./../../components/Navbar/Navbar";
import { TransportCard } from "./../../components/TransportCard/TransportCard";

type Props = StackScreenProps<TypeRootStackParamList, "Home">;

export const Home: FC = ({ navigation }: Props) => {
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
          onPress={(registrationNumber) => {
            navigation.navigate("TransportItem", {
              transportId: registrationNumber,
            });
          }}
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
