import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Artwork01,
  INTRO_SCREEN_01,
  PrimaryButton,
  ScreenIndicator,
  RootStackScreenProps,
} from '../shared';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useAppTheme } from '../shared/theme';

export const IntroScreen01 = ({
  navigation,
}: RootStackScreenProps<'IntroScreen01'>) => {
  const { colors } = useAppTheme();
  return (
    <SafeAreaView style={{ backgroundColor: colors.card, flex: 1 }}>
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Artwork01 width={300} height={300} />
      </Animated.View>
      <View style={{ padding: 24 }}>
        <Animated.Text
          entering={FadeInDown.duration(1000).springify()}
          style={{ fontSize: 40, fontWeight: '800', color: colors.text }}>
          {INTRO_SCREEN_01.title}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(1000).springify()}
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 18,
            color: colors.text,
          }}>
          {INTRO_SCREEN_01.description}
        </Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}>
          <ScreenIndicator count={2} activeIndex={0} />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(300).duration(1000).springify()}
          style={{ alignItems: 'center' }}>
          <PrimaryButton
            label="Next"
            onPress={() => navigation.replace('IntroScreen02')}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
