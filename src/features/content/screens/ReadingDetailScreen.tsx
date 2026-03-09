import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../../../app/navigation/routes';
import { ScreenHeader } from '../../../components/ScreenHeader';
import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
import { usePreferences } from '../../preferences/PreferencesContext';
import { getCategoryPresentation } from '../categoryPresentation';
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
  const palette =
    reading && category
      ? getCategoryPresentation(category.key, theme.colors)
      : undefined;
  const styles = createStyles(
    theme,
    preferences.readingComfortMode,
    palette?.background,
    palette?.accent
  );

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

        {category ? (
          <View style={styles.heroCard}>
            <View style={styles.heroBlob} />
            <View style={styles.heroIconWrap}>
              <MaterialIcons
                color={theme.colors.primaryDeep}
                name={category.icon}
                size={28}
              />
            </View>
            <Text style={styles.heroTitle}>{reading.title}</Text>
            {reading.subtitle ? (
              <Text style={styles.heroSubtitle}>{reading.subtitle}</Text>
            ) : null}
          </View>
        ) : null}

        <View style={styles.articleCard}>
          <Text style={styles.body}>{reading.body}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(
  theme: ReturnType<typeof useAppTheme>,
  isReadingComfortMode: boolean,
  heroBackground?: string,
  heroAccent?: string
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
    heroCard: {
      backgroundColor: heroBackground ?? theme.colors.surfaceSoft,
      borderRadius: 32,
      paddingHorizontal: 24,
      paddingVertical: 22,
      marginBottom: 18,
      overflow: 'hidden',
    },
    heroBlob: {
      position: 'absolute',
      width: 188,
      height: 188,
      borderRadius: 999,
      backgroundColor: heroAccent ?? theme.colors.surfaceMuted,
      top: -64,
      right: -18,
      opacity: 0.78,
    },
    heroIconWrap: {
      width: 58,
      height: 58,
      borderRadius: 999,
      backgroundColor: 'rgba(255,255,255,0.76)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18,
    },
    heroTitle: {
      ...Typography.title,
      color: theme.colors.textPrimary,
      marginBottom: 8,
      paddingRight: 54,
    },
    heroSubtitle: {
      ...Typography.body,
      color: theme.colors.textSecondary,
      paddingRight: 64,
    },
    articleCard: {
      backgroundColor: articleSurface,
      borderRadius: 32,
      borderWidth: 1,
      borderColor: isReadingComfortMode
        ? theme.colors.readingBorderComfort
        : theme.colors.readingBorder,
      paddingHorizontal: isReadingComfortMode ? 26 : 22,
      paddingVertical: isReadingComfortMode ? 30 : 24,
    },
    body: {
      fontSize: isReadingComfortMode ? 23 : 20,
      lineHeight: isReadingComfortMode ? 40 : 35,
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
      borderRadius: 999,
      paddingHorizontal: 20,
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
