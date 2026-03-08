import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../../features/home/screens/HomeScreen';
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
    </Stack.Navigator>
  );
}
