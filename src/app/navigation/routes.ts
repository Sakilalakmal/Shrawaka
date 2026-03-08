export const Routes = {
  splash: 'Splash',
  home: 'Home',
} as const;

export type RootStackParamList = {
  [Routes.splash]: undefined;
  [Routes.home]: undefined;
};
