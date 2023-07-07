import { DefaultTheme, Theme } from '@react-navigation/native';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
  },
};

export default theme;
