import { TextInput } from 'react-native';
import { useAppTheme } from '../../../theme';

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: () => void;
};

const Input = ({ placeholder, value, onChange }: InputProps) => {
  const theme = useAppTheme();

  return (
    <TextInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        paddingHorizontal: 16,
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
