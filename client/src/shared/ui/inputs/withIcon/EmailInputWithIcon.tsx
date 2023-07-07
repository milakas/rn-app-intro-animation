import { View } from 'react-native';
import Icons from '@expo/vector-icons/MaterialIcons';
import Input, { InputProps } from './temp/Input';
import theme from '../../../theme';

interface EmailInputProps extends Omit<InputProps, 'placeholder'> {}

export const EmailInputWithIcon = ({ value, onChange }: EmailInputProps) => {
  return (
    <View style={{ position: 'relative', width: '100%' }}>
      <Input placeholder="Your Email" value={value} onChange={onChange} />
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
