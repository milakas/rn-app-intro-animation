import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from './routes';
import theme from '../shared/theme';

const App = () => {
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
