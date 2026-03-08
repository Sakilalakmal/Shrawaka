import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppPreferences, defaultAppPreferences } from './types';

const PREFERENCES_STORAGE_KEY = 'shrawaka:preferences';

function isValidPreferences(value: unknown): value is AppPreferences {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const candidate = value as Partial<AppPreferences>;

  return (
    (candidate.themeMode === 'light' || candidate.themeMode === 'dark') &&
    typeof candidate.readingComfortMode === 'boolean'
  );
}

export async function loadPreferences(): Promise<AppPreferences> {
  try {
    const storedValue = await AsyncStorage.getItem(PREFERENCES_STORAGE_KEY);

    if (!storedValue) {
      return defaultAppPreferences;
    }

    const parsedValue: unknown = JSON.parse(storedValue);
    return isValidPreferences(parsedValue)
      ? parsedValue
      : defaultAppPreferences;
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
