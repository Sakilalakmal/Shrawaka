import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

import { ThemeMode } from '../features/preferences/types';

export type ThemeColors = {
  background: string;
  surface: string;
  surfaceSoft: string;
  surfaceMuted: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  primary: string;
  primaryDeep: string;
  onPrimary: string;
  accentSoft: string;
  accentSky: string;
  accentBlush: string;
  accentSun: string;
  accentMint: string;
  accentLilac: string;
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
  splashBackdrop: string;
  splashPanel: string;
  splashDot: string;
};

export type AppTheme = {
  mode: ThemeMode;
  colors: ThemeColors;
  statusBarStyle: 'light' | 'dark';
  navigationTheme: Theme;
};

const lightColors: ThemeColors = {
  background: '#EEF1FB',
  surface: '#FCFBF7',
  surfaceSoft: '#DCE6F8',
  surfaceMuted: '#F6E3DE',
  textPrimary: '#23306D',
  textSecondary: '#65719A',
  border: '#D9DFF0',
  primary: '#4A59A8',
  primaryDeep: '#243272',
  onPrimary: '#FFFFFF',
  accentSoft: 'rgba(74, 89, 168, 0.12)',
  accentSky: '#C6D5F1',
  accentBlush: '#F3D5D2',
  accentSun: '#EEE7A8',
  accentMint: '#BDDCD5',
  accentLilac: '#DBDEF8',
  shadow: 'rgba(35, 48, 108, 0.16)',
  settingsRowBackground: '#FFFFFF',
  switchTrackInactive: '#CCD5EC',
  switchTrackActive: '#7E8AC8',
  switchThumb: '#FFFFFF',
  readingBackground: '#EEF1FB',
  readingBackgroundComfort: '#F8F1E8',
  readingSurface: '#FCFBF7',
  readingSurfaceComfort: '#FFF9F1',
  readingBorder: '#D9DFF0',
  readingBorderComfort: '#EBDCC1',
  readingText: '#25306A',
  splashBackdrop: '#4C5AA5',
  splashPanel: '#FCFBF7',
  splashDot: '#243272',
};

const darkColors: ThemeColors = {
  background: '#17203D',
  surface: '#1F2A4E',
  surfaceSoft: '#33467A',
  surfaceMuted: '#43345F',
  textPrimary: '#F4F5FD',
  textSecondary: '#C4CCE8',
  border: '#3C4E83',
  primary: '#A6B7F0',
  primaryDeep: '#E8EDFF',
  onPrimary: '#17203D',
  accentSoft: 'rgba(166, 183, 240, 0.14)',
  accentSky: '#425D95',
  accentBlush: '#6A4D67',
  accentSun: '#7E7840',
  accentMint: '#456D69',
  accentLilac: '#524B86',
  shadow: 'rgba(5, 9, 24, 0.38)',
  settingsRowBackground: '#233159',
  switchTrackInactive: '#506392',
  switchTrackActive: '#8EA0DD',
  switchThumb: '#F7F8FF',
  readingBackground: '#17203D',
  readingBackgroundComfort: '#221C2D',
  readingSurface: '#1F2A4E',
  readingSurfaceComfort: '#2C2440',
  readingBorder: '#3C4E83',
  readingBorderComfort: '#58486D',
  readingText: '#EFF2FF',
  splashBackdrop: '#131A32',
  splashPanel: '#1F2A4E',
  splashDot: '#E8EDFF',
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
