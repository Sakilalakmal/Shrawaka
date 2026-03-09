import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppPreferences, defaultAppPreferences } from './types';

const PREFERENCES_STORAGE_KEY = 'shrawaka:preferences';

function isPreferenceCandidate(
  value: unknown
): value is Partial<AppPreferences> {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  return true;
}

function normalizePreferences(value: unknown): AppPreferences {
  if (!isPreferenceCandidate(value)) {
    return defaultAppPreferences;
  }

  const candidate = value as Partial<AppPreferences>;

  return {
    themeMode:
      candidate.themeMode === 'dark' || candidate.themeMode === 'light'
        ? candidate.themeMode
        : defaultAppPreferences.themeMode,
    readingComfortMode:
      typeof candidate.readingComfortMode === 'boolean'
        ? candidate.readingComfortMode
        : defaultAppPreferences.readingComfortMode,
    language:
      candidate.language === 'en' || candidate.language === 'si'
        ? candidate.language
        : defaultAppPreferences.language,
  };
}

export async function loadPreferences(): Promise<AppPreferences> {
  try {
    const storedValue = await AsyncStorage.getItem(PREFERENCES_STORAGE_KEY);

    if (!storedValue) {
      return defaultAppPreferences;
    }

    const parsedValue: unknown = JSON.parse(storedValue);
    return normalizePreferences(parsedValue);
  } catch {
    return defaultAppPreferences;
  }
}

export async function savePreferences(
  preferences: AppPreferences
): Promise<void> {
  try {
    await AsyncStorage.setItem(
      PREFERENCES_STORAGE_KEY,
      JSON.stringify(preferences)
    );
  } catch {
    return;
  }
}
