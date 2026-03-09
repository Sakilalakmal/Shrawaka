export type ThemeMode = 'light' | 'dark';
export type LanguageCode = 'si' | 'en';

export type AppPreferences = {
  themeMode: ThemeMode;
  readingComfortMode: boolean;
  language: LanguageCode;
};

export const defaultAppPreferences: AppPreferences = {
  themeMode: 'light',
  readingComfortMode: false,
  language: 'si',
};
