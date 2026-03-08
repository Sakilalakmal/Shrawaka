import { usePreferences } from '../features/preferences/PreferencesContext';
import { getAppTheme } from './appTheme';

export function useAppTheme() {
  const { preferences } = usePreferences();
  return getAppTheme(preferences.themeMode);
}
