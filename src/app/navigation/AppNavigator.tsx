import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoryListScreen } from '../../features/content/screens/CategoryListScreen';
import { ReadingDetailScreen } from '../../features/content/screens/ReadingDetailScreen';
import { HomeScreen } from '../../features/home/screens/HomeScreen';
import { SettingsScreen } from '../../features/preferences/screens/SettingsScreen';
import { SplashScreen } from '../../features/splash/screens/SplashScreen';
import { Routes, RootStackParamList } from './routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.splash}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name={Routes.splash} component={SplashScreen} />
      <Stack.Screen name={Routes.home} component={HomeScreen} />
      <Stack.Screen name={Routes.settings} component={SettingsScreen} />
      <Stack.Screen
        name={Routes.categoryList}
        component={CategoryListScreen}
      />
      <Stack.Screen
        name={Routes.readingDetail}
        component={ReadingDetailScreen}
      />
    </Stack.Navigator>
  );
}
