import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icons from '@expo/vector-icons/MaterialIcons';

import {
  Artwork03,
  LOG_IN_SCREEN,
  PrimaryButton,
  RootStackScreenProps,
  ScreenIndicator,
} from '../shared';
import { LoginForm } from '../features/login';

export const LoginScreen = ({
  navigation,
}: RootStackScreenProps<'LoginScreen'>) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.card }}>
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
        <Artwork03 width={300} height={300} />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 40, fontWeight: '800' }}>
          {LOG_IN_SCREEN.title}
        </Text>
        <Text style={{ opacity: 0.5, marginTop: 16, fontSize: 18 }}>
          {LOG_IN_SCREEN.description}
        </Text>
        <LoginForm onPress={() => navigation.navigate('LoginScreen')} />
      </View>
    </SafeAreaView>
  );
};
