import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AppNavigator } from './src/app/navigation/AppNavigator';
import { AppColors } from './src/theme/colors';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.background,
    card: AppColors.surface,
    primary: AppColors.primary,
    text: AppColors.textPrimary,
    border: AppColors.border,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style="dark" />
      <AppNavigator />
    </NavigationContainer>
  );
}
