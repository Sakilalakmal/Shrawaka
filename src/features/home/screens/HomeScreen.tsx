import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../../../app/navigation/routes';
import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { AppColors } from '../../../theme/colors';
import { Typography } from '../../../theme/typography';
import { getAllCategories } from '../../content/selectors';
import { HomeCategoryCard } from '../components/HomeCategoryCard';

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof Routes.home
>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const categories = getAllCategories();

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

        <Text style={styles.sectionTitle}>{AppStrings.homeSectionTitle}</Text>

        <View style={styles.cardList}>
          {categories.map((category) => (
            <HomeCategoryCard
              key={category.key}
              category={category}
              onPress={() =>
                navigation.navigate(Routes.categoryList, {
                  categoryKey: category.key,
                })
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
  sectionTitle: {
    ...Typography.title,
    color: AppColors.textPrimary,
    marginBottom: 16,
  },
  cardList: {
    gap: AppConstants.cardSpacing,
  },
});
