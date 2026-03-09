import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { loadPreferences, savePreferences } from './storage';
import {
  AppPreferences,
  LanguageCode,
  ThemeMode,
  defaultAppPreferences,
} from './types';

type PreferencesContextValue = {
  preferences: AppPreferences;
  setThemeMode: (themeMode: ThemeMode) => void;
  setReadingComfortMode: (enabled: boolean) => void;
  setLanguage: (language: LanguageCode) => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);
void SplashScreen.preventAutoHideAsync();

type PreferencesProviderProps = {
  children: ReactNode;
};

export function PreferencesProvider({ children }: PreferencesProviderProps) {
  const [preferences, setPreferences] = useState<AppPreferences | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function bootstrapPreferences() {
      const storedPreferences = await loadPreferences();

      if (isMounted) {
        setPreferences(storedPreferences);
      }

      await SplashScreen.hideAsync();
    }

    void bootstrapPreferences();

    return () => {
      isMounted = false;
    };
  }, []);

  function updatePreferences(nextPreferences: AppPreferences) {
    setPreferences(nextPreferences);
    void savePreferences(nextPreferences);
  }

  function setThemeMode(themeMode: ThemeMode) {
    updatePreferences({
      ...(preferences ?? defaultAppPreferences),
      themeMode,
    });
  }

  function setReadingComfortMode(enabled: boolean) {
    updatePreferences({
      ...(preferences ?? defaultAppPreferences),
      readingComfortMode: enabled,
    });
  }

  function setLanguage(language: LanguageCode) {
    updatePreferences({
      ...(preferences ?? defaultAppPreferences),
      language,
    });
  }

  if (!preferences) {
    return null;
  }

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        setThemeMode,
        setReadingComfortMode,
        setLanguage,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error('usePreferences must be used within PreferencesProvider');
  }

  return context;
}
