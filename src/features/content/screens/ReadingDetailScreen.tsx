import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../../../app/navigation/routes';
import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { AppColors } from '../../../theme/colors';
import { Typography } from '../../../theme/typography';
import { ContentScreenHeader } from '../components/ContentScreenHeader';
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

  if (!reading) {
    return (
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <View style={styles.fallbackContainer}>
          <ContentScreenHeader
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
        <ContentScreenHeader
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  content: {
    paddingHorizontal: AppConstants.readingScreenPadding,
    paddingTop: AppConstants.screenPadding,
    paddingBottom: 40,
  },
  articleCard: {
    backgroundColor: AppColors.surface,
    borderRadius: AppConstants.radiusLarge,
    borderWidth: 1,
    borderColor: AppColors.border,
    paddingHorizontal: 22,
    paddingVertical: 24,
  },
  title: {
    ...Typography.headline,
    color: AppColors.textPrimary,
    marginBottom: 12,
  },
  subtitle: {
    ...Typography.bodyLarge,
    color: AppColors.primaryDeep,
    marginBottom: 18,
  },
  body: {
    fontSize: 21,
    lineHeight: 37,
    fontWeight: '400',
    color: AppColors.textPrimary,
  },
  fallbackContainer: {
    flex: 1,
    paddingHorizontal: AppConstants.readingScreenPadding,
    paddingTop: AppConstants.screenPadding,
  },
  primaryAction: {
    alignSelf: 'flex-start',
    backgroundColor: AppColors.primary,
    borderRadius: AppConstants.radiusMedium,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  primaryActionPressed: {
    opacity: 0.92,
  },
  primaryActionLabel: {
    ...Typography.label,
    color: AppColors.white,
  },
});
