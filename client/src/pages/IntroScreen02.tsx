import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icons from '@expo/vector-icons/MaterialIcons';

import {
  ScreenIndicator,
  Artwork02,
  INTRO_SCREEN_02,
  PrimaryButton,
  RootStackScreenProps,
} from '../shared';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export const IntroScreen02 = ({
  navigation,
}: RootStackScreenProps<'IntroScreen02'>) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: colors.card, flex: 1 }}>
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingVertical: 10,
          height: 52,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('IntroScreen01')}>
          <Icons name="arrow-back-ios" size={24} color={colors.text} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        entering={FadeInUp.delay(150).duration(1000).springify()}
        style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Artwork02 width={300} height={300} />
      </Animated.View>
      <View style={{ padding: 24 }}>
        <Animated.Text
          entering={FadeInDown.duration(1000).springify()}
          style={{ fontSize: 40, fontWeight: '800' }}>
          {INTRO_SCREEN_02.title}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(1000).springify()}
          style={{ opacity: 0.5, marginTop: 16, fontSize: 18 }}>
          {INTRO_SCREEN_02.description}
        </Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}>
          <ScreenIndicator count={2} activeIndex={1} />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(300).duration(1000).springify()}
          style={{ alignItems: 'center' }}>
          <PrimaryButton
            label="Next"
            onPress={() => navigation.replace('LoginScreen')}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
