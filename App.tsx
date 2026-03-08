import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AppNavigator } from './src/app/navigation/AppNavigator';
import { PreferencesProvider } from './src/features/preferences/PreferencesContext';
import { useAppTheme } from './src/theme/useAppTheme';

function AppContent() {
  const theme = useAppTheme();

  return (
    <NavigationContainer theme={theme.navigationTheme}>
      <StatusBar style={theme.statusBarStyle} />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <PreferencesProvider>
      <AppContent />
    </PreferencesProvider>
  );
}
