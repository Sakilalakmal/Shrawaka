import { getAppStrings } from '../constants/appStrings';
import { usePreferences } from '../features/preferences/PreferencesContext';

export function useAppStrings() {
  const { preferences } = usePreferences();
  return getAppStrings(preferences.language);
}
