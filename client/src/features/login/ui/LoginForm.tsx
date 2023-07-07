import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {
  EmailInputWithIcon,
  PasswordInputWithIcon,
  PrimaryButton,
  PrimaryButtonProps,
} from '../../../shared';

export interface LoginFormProps extends Pick<PrimaryButtonProps, 'onPress'> {}

export const LoginForm = ({ onPress }: LoginFormProps) => {
  return (
    <View style={{ alignItems: 'center', gap: 14, marginTop: 32 }}>
      <EmailInputWithIcon />
      <PasswordInputWithIcon />
      <PrimaryButton label="Log in" onPress={onPress} />
    </View>
  );
};
