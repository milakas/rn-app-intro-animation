import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  IntroScreen01: undefined;
  IntroScreen02: undefined;
  LoginScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
