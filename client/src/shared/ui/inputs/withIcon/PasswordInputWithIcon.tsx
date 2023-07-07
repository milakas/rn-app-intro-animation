import { View } from 'react-native';
import Icons from '@expo/vector-icons/MaterialIcons';
import Input, { InputProps } from './temp/Input';
import { useAppTheme } from '../../../theme';

interface PasswordInputProps extends Omit<InputProps, 'placeholder'> {}

export const PasswordInputWithIcon = ({
  value,
  onChange,
}: PasswordInputProps) => {
  const theme = useAppTheme();

  return (
    <View style={{ position: 'relative', width: '100%' }}>
      <Input placeholder="Your Password" value={value} onChange={onChange} />
      <Icons
        name="lock"
        size={24}
        color={theme.colors.text}
        style={{
          position: 'absolute',
          left: 12,
          top: 12,
          opacity: 0.5,
        }}
      />
    </View>
  );
};
