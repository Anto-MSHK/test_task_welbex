import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/navigation/Navigation";
import "./i18n";

export default function App() {
  return <Navigation />;
}

export const appStyles = StyleSheet.create({
  h1: {
    fontSize: 22,
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 18,
  },
  h4: {
    fontSize: 16,
  },
  h5: {
    fontSize: 14,
  },
});

export const shadow = {
  elevation: 2,
  shadowColor: "black",
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.1,
};
