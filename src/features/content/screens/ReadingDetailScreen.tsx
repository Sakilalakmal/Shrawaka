import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../../../app/navigation/routes';
import { ScreenHeader } from '../../../components/ScreenHeader';
import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
import { usePreferences } from '../../preferences/PreferencesContext';
import { getCategoryByKey, getReadingById } from '../selectors';

type ReadingDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof Routes.readingDetail
>;

export function ReadingDetailScreen({
  navigation,
  route,
}: ReadingDetailScreenProps) {
  const reading = getReadingById(route.params.readingId);
  const category = reading ? getCategoryByKey(reading.categoryKey) : undefined;
  const theme = useAppTheme();
  const { preferences } = usePreferences();
  const styles = createStyles(theme, preferences.readingComfortMode);

  if (!reading) {
    return (
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <View style={styles.fallbackContainer}>
          <ScreenHeader
            title={AppStrings.readingNotFoundTitle}
            description={AppStrings.readingNotFoundMessage}
            onBackPress={() => navigation.goBack()}
          />
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
              styles.primaryAction,
              pressed && styles.primaryActionPressed,
            ]}
          >
            <Text style={styles.primaryActionLabel}>
              {AppStrings.returnToList}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeader
          title={category?.title ?? reading.title}
          description={AppStrings.readingDetailIntro}
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.articleCard}>
          <Text style={styles.title}>{reading.title}</Text>
          {reading.subtitle ? (
            <Text style={styles.subtitle}>{reading.subtitle}</Text>
          ) : null}
          <Text style={styles.body}>{reading.body}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(
  theme: ReturnType<typeof useAppTheme>,
  isReadingComfortMode: boolean
) {
  const articleSurface = isReadingComfortMode
    ? theme.colors.readingSurfaceComfort
    : theme.colors.readingSurface;
  const safeAreaBackground = isReadingComfortMode
    ? theme.colors.readingBackgroundComfort
    : theme.colors.readingBackground;
  const horizontalPadding = isReadingComfortMode
    ? AppConstants.readingScreenPadding + 8
    : AppConstants.readingScreenPadding;

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: safeAreaBackground,
    },
    content: {
      paddingHorizontal: horizontalPadding,
      paddingTop: AppConstants.screenPadding,
      paddingBottom: 40,
    },
    articleCard: {
      backgroundColor: articleSurface,
      borderRadius: AppConstants.radiusLarge,
      borderWidth: 1,
      borderColor: isReadingComfortMode
        ? theme.colors.readingBorderComfort
        : theme.colors.readingBorder,
      paddingHorizontal: isReadingComfortMode ? 26 : 22,
      paddingVertical: isReadingComfortMode ? 30 : 24,
    },
    title: {
      ...Typography.headline,
      color: theme.colors.textPrimary,
      marginBottom: 12,
    },
    subtitle: {
      ...Typography.bodyLarge,
      color: theme.colors.primaryDeep,
      marginBottom: 18,
    },
    body: {
      fontSize: isReadingComfortMode ? 24 : 21,
      lineHeight: isReadingComfortMode ? 42 : 37,
      fontWeight: '400',
      color: theme.colors.readingText,
    },
    fallbackContainer: {
      flex: 1,
      paddingHorizontal: AppConstants.readingScreenPadding,
      paddingTop: AppConstants.screenPadding,
    },
    primaryAction: {
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.primary,
      borderRadius: AppConstants.radiusMedium,
      paddingHorizontal: 18,
      paddingVertical: 14,
    },
    primaryActionPressed: {
      opacity: 0.92,
    },
    primaryActionLabel: {
      ...Typography.label,
      color: theme.colors.onPrimary,
    },
  });
}
