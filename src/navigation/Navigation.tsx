import { FC } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./types";
import { Home } from "../screens/Home/Home";
import { TransportItem } from "../screens/TransportItem/TransportItem";
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const Navigation: FC = () => {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Главная",
            headerShadowVisible: false,
            headerTitleStyle: { fontSize: 24 },
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  source={require("../icons/settings.png")}
                  style={styles.settingsIcon}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="TransportItem"
          component={TransportItem}
          initialParams={{ transportId: 0 }}
          options={(nav) => ({
            title: `${t("NM")} #${nav.route.params.transportId}`,
            headerShadowVisible: false,
            headerTitleStyle: { fontSize: 24 },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  settingsIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
