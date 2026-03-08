export type ThemeMode = 'light' | 'dark';

export type AppPreferences = {
  themeMode: ThemeMode;
  readingComfortMode: boolean;
};

export const defaultAppPreferences: AppPreferences = {
  themeMode: 'light',
  readingComfortMode: false,
};
