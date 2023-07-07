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

export const IntroScreen02 = ({
  navigation,
}: RootStackScreenProps<'IntroScreen02'>) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: colors.card, flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingVertical: 10,
          height: 52,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="arrow-back-ios" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Artwork02 width={300} height={300} />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 40, fontWeight: '800' }}>
          {INTRO_SCREEN_02.title}
        </Text>
        <Text style={{ opacity: 0.5, marginTop: 16, fontSize: 18 }}>
          {INTRO_SCREEN_02.description}
        </Text>
        <ScreenIndicator count={2} activeIndex={1} />
        <View style={{ alignItems: 'center' }}>
          <PrimaryButton
            label="Next"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
