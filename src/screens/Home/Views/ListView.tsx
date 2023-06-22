import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { TransportCard } from "../../../components/TransportCard/TransportCard";
import { TransportListT } from "../Home";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../../navigation/types";

interface ListViewI {
  data: TransportListT[];
  filterItems: string[];
}
export const ListView: FC<ListViewI> = ({ data, filterItems }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <ScrollView style={{ paddingHorizontal: 15 }}>
      {data &&
        data.map((trans, index, arr) => (
          <TransportCard
            registrationNumber={trans.nm}
            driver={trans.driver}
            type={trans.type}
            onPress={(registrationNumber) => {
              navigation.navigate("TransportItem", {
                transportId: registrationNumber,
              });
            }}
            key={trans.nm}
            style={{
              marginTop: index === 0 ? 55 : 0,
              marginBottom: index === arr.length - 1 ? 15 : 10,
            }}
          />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
