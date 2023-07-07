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
import { useTheme } from '@react-navigation/native';

export const IntroScreen01 = ({
  navigation,
}: RootStackScreenProps<'IntroScreen01'>) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: colors.card, flex: 1 }}>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Artwork01 width={300} height={300} />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 40, fontWeight: '800' }}>
          {INTRO_SCREEN_01.title}
        </Text>
        <Text style={{ opacity: 0.5, marginTop: 16, fontSize: 18 }}>
          {INTRO_SCREEN_01.description}
        </Text>
        <ScreenIndicator count={2} activeIndex={0} />
        <View style={{ alignItems: 'center' }}>
          <PrimaryButton
            label="Next"
            onPress={() => navigation.navigate('IntroScreen02')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
