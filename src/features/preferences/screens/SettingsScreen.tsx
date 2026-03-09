import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../../../app/navigation/routes';
import { ScreenHeader } from '../../../components/ScreenHeader';
import { AppConstants } from '../../../constants/appConstants';
import { useAppStrings } from '../../../localization/useAppStrings';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
import { LanguageToggle } from '../components/LanguageToggle';
import { SettingToggleRow } from '../components/SettingToggleRow';
import { usePreferences } from '../PreferencesContext';

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof Routes.settings
>;

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  const theme = useAppTheme();
  const strings = useAppStrings();
  const styles = createStyles(theme);
  const { preferences, setLanguage, setReadingComfortMode, setThemeMode } =
    usePreferences();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeader
          title={strings.settingsTitle}
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.introCard}>
          <View style={styles.introBlob} />
          <Text style={styles.introDescription}>{strings.settingsIntro}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{strings.appearanceSectionTitle}</Text>
          <View style={styles.languageCard}>
            <Text style={styles.languageTitle}>{strings.languageToggleTitle}</Text>
            <Text style={styles.languageDescription}>
              {strings.languageToggleDescription}
            </Text>
            <LanguageToggle
              value={preferences.language}
              onChange={setLanguage}
              sinhalaLabel={strings.languageSinhala}
              englishLabel={strings.languageEnglish}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{strings.settingsSectionTitle}</Text>

          <View style={styles.rowGroup}>
            <SettingToggleRow
              title={strings.darkModeTitle}
              description={strings.darkModeDescription}
              value={preferences.themeMode === 'dark'}
              onValueChange={(enabled) =>
                setThemeMode(enabled ? 'dark' : 'light')
              }
            />
            <SettingToggleRow
              title={strings.readingComfortModeTitle}
              description={strings.readingComfortModeDescription}
              value={preferences.readingComfortMode}
              onValueChange={setReadingComfortMode}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(theme: ReturnType<typeof useAppTheme>) {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      padding: AppConstants.screenPadding,
      paddingBottom: 32,
    },
    introCard: {
      borderRadius: 32,
      backgroundColor: theme.colors.surfaceSoft,
      padding: 24,
      marginBottom: 18,
      overflow: 'hidden',
    },
    introBlob: {
      position: 'absolute',
      width: 188,
      height: 188,
      borderRadius: 999,
      backgroundColor: theme.colors.accentBlush,
      top: -72,
      right: -28,
      opacity: 0.82,
    },
    introDescription: {
      ...Typography.bodyLarge,
      color: theme.colors.textSecondary,
      paddingRight: 56,
    },
    section: {
      borderRadius: 32,
      backgroundColor: 'transparent',
    },
    sectionTitle: {
      ...Typography.title,
      color: theme.colors.textPrimary,
      marginBottom: 16,
    },
    languageCard: {
      borderRadius: 30,
      backgroundColor: theme.colors.surface,
      padding: 20,
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.08,
      shadowRadius: 14,
      shadowOffset: { width: 0, height: 8 },
      elevation: 2,
    },
    languageTitle: {
      ...Typography.title,
      color: theme.colors.textPrimary,
      marginBottom: 8,
    },
    languageDescription: {
      ...Typography.body,
      color: theme.colors.textSecondary,
      marginBottom: 18,
    },
    rowGroup: {
      gap: AppConstants.cardSpacing,
    },
  });
}
