import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IntroScreen01, IntroScreen02, LoginScreen } from '../pages';
import { RootStackParamList } from '../shared';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{ headerShown: false, animation: 'fade' }}>
        <RootStack.Screen name="IntroScreen01" component={IntroScreen01} />
        <RootStack.Screen name="IntroScreen02" component={IntroScreen02} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigation;
