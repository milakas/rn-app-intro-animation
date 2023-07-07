import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type PrimaryButtonProps = {
  onPress?: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};
