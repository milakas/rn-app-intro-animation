import { Text, TouchableOpacity } from 'react-native';
import { PrimaryButtonProps } from './types';
import { useAppTheme } from '../../../theme';

export const PrimaryButton = ({
  onPress,
  label,
  style,
  labelStyle,
}: PrimaryButtonProps) => {
  const { colors } = useAppTheme();
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
            color: colors.background,
          },
          labelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
