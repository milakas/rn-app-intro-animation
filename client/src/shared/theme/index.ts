import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

export const useAppTheme = () => {
  const colorScheme = useColorScheme();

  const theme: Theme = useMemo(
    () =>
      colorScheme === 'dark'
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: '#fff',
            },
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              primary: '#000',
            },
          },
    [colorScheme]
  );

  return theme;
};
