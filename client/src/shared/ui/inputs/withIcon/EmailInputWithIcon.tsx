import { View } from 'react-native';
import Icons from '@expo/vector-icons/MaterialIcons';
import Input, { InputProps } from './temp/Input';
import { useAppTheme } from '../../../theme';

interface EmailInputProps extends Omit<InputProps, 'placeholder'> {}

export const EmailInputWithIcon = ({ value, onChange }: EmailInputProps) => {
  const theme = useAppTheme();
  return (
    <View style={{ position: 'relative', width: '100%' }}>
      <Input
        autoCompleteEmail
        placeholder="Your Email"
        value={value}
        onChange={onChange}
      />
      <Icons
        name="email"
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
