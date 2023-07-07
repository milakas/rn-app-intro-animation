import { useTheme } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { PrimaryButtonProps } from './types';

export const PrimaryButton = ({
  onPress,
  label,
  style,
  labelStyle,
}: PrimaryButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: colors.primary,
          paddingHorizontal: 32,
          height: 52,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          {
            fontSize: 16,
            fontWeight: '600',
            color: '#fff',
          },
          labelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
