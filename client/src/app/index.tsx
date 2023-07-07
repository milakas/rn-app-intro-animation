import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from './routes';
import { useAppTheme } from '../shared/theme';

const App = () => {
  const theme = useAppTheme();

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer theme={theme}>
        <RootNavigation />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
