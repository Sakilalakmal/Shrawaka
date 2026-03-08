import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { AppColors } from '../../../theme/colors';
import { Typography } from '../../../theme/typography';
import { homeCategories } from '../data/homeCategories';
import { HomeCategoryCard } from '../components/HomeCategoryCard';

export function HomeScreen() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!message) {
      return undefined;
    }

    const timer = setTimeout(() => setMessage(''), 2500);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.appTitle}>{AppStrings.appName}</Text>

        <View style={styles.heroCard}>
          <Text style={styles.greeting}>{AppStrings.homeGreeting}</Text>
          <Text style={styles.intro}>{AppStrings.homeIntro}</Text>
        </View>

        {message ? (
          <View style={styles.feedbackBanner}>
            <Text style={styles.feedbackText}>{message}</Text>
          </View>
        ) : null}

        <Text style={styles.sectionTitle}>{AppStrings.homeSectionTitle}</Text>

        <View style={styles.cardList}>
          {homeCategories.map((category) => (
            <HomeCategoryCard
              key={category.title}
              category={category}
              onPress={() =>
                setMessage(`${category.title} ${AppStrings.feedbackSuffix}`)
              }
            />
          ))}
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
    padding: AppConstants.screenPadding,
    paddingBottom: 32,
  },
  appTitle: {
    ...Typography.headline,
    color: AppColors.textPrimary,
    marginBottom: 20,
  },
  heroCard: {
    backgroundColor: AppColors.surface,
    borderRadius: AppConstants.radiusLarge,
    borderWidth: 1,
    borderColor: AppColors.border,
    padding: 24,
    marginBottom: 18,
  },
  greeting: {
    ...Typography.headline,
    color: AppColors.textPrimary,
    marginBottom: 12,
  },
  intro: {
    ...Typography.bodyLarge,
    color: AppColors.textSecondary,
  },
  feedbackBanner: {
    backgroundColor: AppColors.surfaceSoft,
    borderRadius: AppConstants.radiusMedium,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 18,
  },
  feedbackText: {
    ...Typography.label,
    color: AppColors.textPrimary,
  },
  sectionTitle: {
    ...Typography.title,
    color: AppColors.textPrimary,
    marginBottom: 16,
  },
  cardList: {
    gap: AppConstants.cardSpacing,
  },
});
