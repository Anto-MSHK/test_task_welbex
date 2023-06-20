import { FC } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./types";
import { Home } from "../screens/Home/Home";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const Navigation: FC = () => {
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
