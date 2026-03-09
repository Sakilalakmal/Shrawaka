import { LanguageCode } from '../features/preferences/types';

export const localizedAppStrings = {
  si: {
    appName: 'ශ්‍රාවක',
    splashTagline: 'සාමයෙන් දහම් කියවීම සඳහා',
    homeGreeting: 'ආයුබෝවන්',
    homeIntro:
      'ඔබට අවශ්‍ය බෞද්ධ දහම් අන්තර්ගතයන් සරලව සහ පහසුවෙන් මෙතැනින් කියවන්න.',
    homeSettingsLabel: 'සැකසුම්',
    homeSectionTitle: 'අද කියවීමට තෝරන්න',
    homeLanguageButton: 'English',
    contentBackLabel: 'පෙර පිටුවට යන්න',
    readingListHeading: 'කියවීම සඳහා තෝරාගත් දහම් අන්තර්ගත',
    readingDetailIntro: 'සන්සුන්ව කියවීමට සකස් කළ පිටුව',
    settingsTitle: 'සැකසුම්',
    settingsIntro:
      'ඔබට පහසු කියවීමක් සඳහා පෙනුම, භාෂාව සහ කියවීමේ සැකසුම් මෙතැනින් තෝරාගන්න.',
    settingsSectionTitle: 'කියවීමේ පහසුව',
    appearanceSectionTitle: 'පෙනුම සහ භාෂාව',
    languageToggleTitle: 'භාෂාව',
    languageToggleDescription:
      'සම්පූර්ණ අන්තර්ගතය සිංහල හෝ ඉංග්‍රීසි භාෂාවෙන් කියවීමට තෝරන්න.',
    languageSinhala: 'සිංහල',
    languageEnglish: 'English',
    darkModeTitle: 'අඳුරු පෙනුම',
    darkModeDescription:
      'රාත්‍රියේ හෝ අඩු ආලෝකයේ කියවීමට මෘදු අඳුරු පසුබිම භාවිතා කරන්න.',
    readingComfortModeTitle: 'සුවපහසු කියවීම',
    readingComfortModeDescription:
      'කියවීමේ පිටුවට උණුසුම් පසුබිමක්, විශාල අකුරු සහ වැඩි ඉඩ ලබා දෙයි.',
    categoryNotFoundTitle: 'අංශය සොයාගත නොහැකි විය',
    categoryNotFoundMessage:
      'මෙම අංශයට අදාල අන්තර්ගතය මේ අවස්ථාවේ නැත. මුල් පිටුවට ගොස් වෙනත් අංශයක් තෝරන්න.',
    readingNotFoundTitle: 'කියවීම සොයාගත නොහැකි විය',
    readingNotFoundMessage:
      'ඔබ තෝරාගත් කියවීම මේ අවස්ථාවේ ලබා ගත නොහැක. පෙර පිටුවට ගොස් වෙනත් කියවීමක් තෝරන්න.',
    returnHome: 'මුල් පිටුවට',
    returnToList: 'ලැයිස්තුවට',
  },
  en: {
    appName: 'Shravaka',
    splashTagline: 'Read Buddhist teachings in a calm, focused space.',
    homeGreeting: 'Welcome',
    homeIntro:
      'Browse Buddhist stories and reflections in a clean, peaceful reading experience.',
    homeSettingsLabel: 'Settings',
    homeSectionTitle: 'Choose something to read today',
    homeLanguageButton: 'සිංහල',
    contentBackLabel: 'Go back',
    readingListHeading: 'Curated readings for this section',
    readingDetailIntro: 'Prepared for a calmer reading flow',
    settingsTitle: 'Settings',
    settingsIntro:
      'Adjust appearance, language, and reading options for a more comfortable experience.',
    settingsSectionTitle: 'Reading comfort',
    appearanceSectionTitle: 'Appearance and language',
    languageToggleTitle: 'Language',
    languageToggleDescription:
      'Switch the full app and all reading content between Sinhala and English.',
    languageSinhala: 'Sinhala',
    languageEnglish: 'English',
    darkModeTitle: 'Dark mode',
    darkModeDescription:
      'Use a softer dark background for reading at night or in low light.',
    readingComfortModeTitle: 'Comfort reading',
    readingComfortModeDescription:
      'Adds a warmer reading page, larger text, and more breathing room.',
    categoryNotFoundTitle: 'Category not found',
    categoryNotFoundMessage:
      'There is no content for this category right now. Return home and choose another section.',
    readingNotFoundTitle: 'Reading not found',
    readingNotFoundMessage:
      'The reading you selected is not available right now. Go back and choose another one.',
    returnHome: 'Back to home',
    returnToList: 'Back to list',
  },
} as const;

export type AppStrings = {
  [Key in keyof (typeof localizedAppStrings)['en']]: string;
};

export function getAppStrings(language: LanguageCode): AppStrings {
  return localizedAppStrings[language];
}
