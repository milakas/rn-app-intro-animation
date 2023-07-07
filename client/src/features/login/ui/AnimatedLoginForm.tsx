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
import Animated, { FadeInDown } from 'react-native-reanimated';

export interface AnimatedLoginFormProps
  extends Pick<PrimaryButtonProps, 'onPress'> {}

export const AnimatedLoginForm = ({ onPress }: AnimatedLoginFormProps) => {
  return (
    <View style={{ gap: 16, marginTop: 32 }}>
      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        style={{ alignItems: 'center', gap: 14 }}>
        <EmailInputWithIcon />
        <PasswordInputWithIcon />
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(300).duration(1000).springify()}
        style={{ alignItems: 'center' }}>
        <PrimaryButton label="Log In" onPress={onPress} />
      </Animated.View>
    </View>
  );
};
