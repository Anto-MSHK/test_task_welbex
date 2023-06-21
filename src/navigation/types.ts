import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";

export type TypeRootStackParamList = {
  Home: undefined;
  TransportItem: { transportId: number };
};

export type RootStackScreenProps<T extends keyof TypeRootStackParamList> =
  NativeStackScreenProps<TypeRootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof TypeRootStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TypeRootStackParamList, T>,
    RootStackScreenProps<keyof TypeRootStackParamList>
  >;

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TypeRootStackParamList, "Home">,
  StackNavigationProp<TypeRootStackParamList>
>;
