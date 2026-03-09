import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../../../app/navigation/routes';
import { ScreenHeader } from '../../../components/ScreenHeader';
import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
import { SettingToggleRow } from '../components/SettingToggleRow';
import { usePreferences } from '../PreferencesContext';

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof Routes.settings
>;

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const { preferences, setReadingComfortMode, setThemeMode } =
    usePreferences();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeader
          title={AppStrings.settingsTitle}
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.introCard}>
          <View style={styles.introBlob} />
          <Text style={styles.introDescription}>{AppStrings.settingsIntro}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{AppStrings.settingsSectionTitle}</Text>

          <View style={styles.rowGroup}>
            <SettingToggleRow
              title={AppStrings.darkModeTitle}
              description={AppStrings.darkModeDescription}
              value={preferences.themeMode === 'dark'}
              onValueChange={(enabled) =>
                setThemeMode(enabled ? 'dark' : 'light')
              }
            />
            <SettingToggleRow
              title={AppStrings.readingComfortModeTitle}
              description={AppStrings.readingComfortModeDescription}
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
    rowGroup: {
      gap: AppConstants.cardSpacing,
    },
  });
}
