import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

import { ThemeMode } from '../features/preferences/types';

type ThemeColors = {
  background: string;
  surface: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  primary: string;
  primaryDeep: string;
  onPrimary: string;
  accentSoft: string;
  shadow: string;
  settingsRowBackground: string;
  switchTrackInactive: string;
  switchTrackActive: string;
  switchThumb: string;
  readingBackground: string;
  readingBackgroundComfort: string;
  readingSurface: string;
  readingSurfaceComfort: string;
  readingBorder: string;
  readingBorderComfort: string;
  readingText: string;
};

export type AppTheme = {
  mode: ThemeMode;
  colors: ThemeColors;
  statusBarStyle: 'light' | 'dark';
  navigationTheme: Theme;
};

const lightColors: ThemeColors = {
  background: '#F8F3EA',
  surface: '#FFFCF7',
  surfaceSoft: '#F3E8D2',
  textPrimary: '#2F261B',
  textSecondary: '#6B5B45',
  border: '#E3D7C1',
  primary: '#C98A22',
  primaryDeep: '#9A6715',
  onPrimary: '#FFFFFF',
  accentSoft: 'rgba(201, 138, 34, 0.14)',
  shadow: 'rgba(47, 38, 27, 0.18)',
  settingsRowBackground: '#FFFCF7',
  switchTrackInactive: '#D7C6AA',
  switchTrackActive: '#D8AA59',
  switchThumb: '#FFF8ED',
  readingBackground: '#F8F3EA',
  readingBackgroundComfort: '#F5EEDA',
  readingSurface: '#FFFCF7',
  readingSurfaceComfort: '#FAF1D8',
  readingBorder: '#E3D7C1',
  readingBorderComfort: '#E0CBA4',
  readingText: '#2F261B',
};

const darkColors: ThemeColors = {
  background: '#1D1915',
  surface: '#2A241F',
  surfaceSoft: '#342D26',
  textPrimary: '#F4E8D5',
  textSecondary: '#D0BFA9',
  border: '#4B4035',
  primary: '#C8953A',
  primaryDeep: '#E0B463',
  onPrimary: '#1F1912',
  accentSoft: 'rgba(224, 180, 99, 0.14)',
  shadow: 'rgba(0, 0, 0, 0.35)',
  settingsRowBackground: '#302922',
  switchTrackInactive: '#5D5043',
  switchTrackActive: '#B98932',
  switchThumb: '#FFF5E6',
  readingBackground: '#1D1915',
  readingBackgroundComfort: '#221B15',
  readingSurface: '#2A241F',
  readingSurfaceComfort: '#34271E',
  readingBorder: '#4B4035',
  readingBorderComfort: '#5A4735',
  readingText: '#F2E6D5',
};

function createNavigationTheme(
  baseTheme: Theme,
  colors: ThemeColors
): Theme {
  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: colors.background,
      card: colors.surface,
      primary: colors.primary,
      text: colors.textPrimary,
      border: colors.border,
      notification: colors.primary,
    },
  };
}

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: lightColors,
  statusBarStyle: 'dark',
  navigationTheme: createNavigationTheme(DefaultTheme, lightColors),
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: darkColors,
  statusBarStyle: 'light',
  navigationTheme: createNavigationTheme(DarkTheme, darkColors),
};

export function getAppTheme(themeMode: ThemeMode): AppTheme {
  return themeMode === 'dark' ? darkTheme : lightTheme;
}
