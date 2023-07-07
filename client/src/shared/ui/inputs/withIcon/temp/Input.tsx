import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import { useAppTheme } from '../../../../theme';

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  autoCompleteEmail?: boolean;
};

const Input = ({
  placeholder,
  value,
  onChange,
  autoCompleteEmail,
}: InputProps) => {
  const { colors } = useAppTheme();
  return (
    <TextInput
      value={value}
      onChange={() => onChange}
      keyboardType={autoCompleteEmail ? 'email-address' : 'default'}
      placeholder={placeholder}
      style={{
        paddingLeft: 48,
        paddingRight: 12,
        height: 50,
        width: '100%',
        fontSize: 16,
        fontWeight: '500',
        borderRadius: 12,
        color: colors.text,
        backgroundColor: colors.background,
      }}
    />
  );
};

export default Input;
