import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import Icons from '@expo/vector-icons/MaterialIcons';

import { Artwork03, LOG_IN_SCREEN, RootStackScreenProps } from '../shared';
import { AnimatedLoginForm } from '../features/login';

export const LoginScreen = ({
  navigation,
}: RootStackScreenProps<'LoginScreen'>) => {
  const { colors } = useTheme();
  const { height } = useWindowDimensions();

  return (
    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          backgroundColor: colors.card,
          minHeight: height,
        }}>
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 24,
            paddingVertical: 10,
            height: 52,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('IntroScreen02')}>
            <Icons name="arrow-back-ios" size={24} color={colors.text} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(150).duration(1000).springify()}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Artwork03 width={300} height={300} />
        </Animated.View>
        <View style={{ padding: 24 }}>
          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            style={{ fontSize: 40, fontWeight: '800' }}>
            {LOG_IN_SCREEN.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={{ opacity: 0.5, marginTop: 16, fontSize: 18 }}>
            {LOG_IN_SCREEN.description}
          </Animated.Text>
          <AnimatedLoginForm
            onPress={() => navigation.replace('LoginScreen')}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
