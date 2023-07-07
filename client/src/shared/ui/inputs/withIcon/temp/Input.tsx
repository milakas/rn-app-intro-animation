import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native';
import theme from '../../../../theme';

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <TextInput
      value={value}
      onChange={() => onChange}
      placeholder={placeholder}
      style={{
        paddingLeft: 48,
        paddingRight: 12,
        height: 50,
        width: '100%',
        fontSize: 16,
        fontWeight: '500',
        borderRadius: 12,
        color: theme.colors.text,
        backgroundColor: theme.colors.background,
      }}
    />
  );
};

export default Input;
