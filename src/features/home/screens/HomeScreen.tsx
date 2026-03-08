import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../../../app/navigation/routes';
import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
import { getAllCategories } from '../../content/selectors';
import { HomeCategoryCard } from '../components/HomeCategoryCard';

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof Routes.home
>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const categories = getAllCategories();
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          <Text style={styles.appTitle}>{AppStrings.appName}</Text>
          <Pressable
            accessibilityLabel={AppStrings.homeSettingsLabel}
            accessibilityRole="button"
            onPress={() => navigation.navigate(Routes.settings)}
            style={({ pressed }) => [
              styles.settingsButton,
              pressed && styles.settingsButtonPressed,
            ]}
          >
            <MaterialIcons
              color={theme.colors.primaryDeep}
              name="settings"
              size={26}
            />
          </Pressable>
        </View>

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
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    appTitle: {
      ...Typography.headline,
      color: theme.colors.textPrimary,
    },
    settingsButton: {
      width: AppConstants.iconButtonSize,
      height: AppConstants.iconButtonSize,
      borderRadius: AppConstants.radiusMedium,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    settingsButtonPressed: {
      opacity: 0.9,
    },
    heroCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: AppConstants.radiusLarge,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 24,
      marginBottom: 18,
    },
    greeting: {
      ...Typography.headline,
      color: theme.colors.textPrimary,
      marginBottom: 12,
    },
    intro: {
      ...Typography.bodyLarge,
      color: theme.colors.textSecondary,
    },
    sectionTitle: {
      ...Typography.title,
      color: theme.colors.textPrimary,
      marginBottom: 16,
    },
    cardList: {
      gap: AppConstants.cardSpacing,
    },
  });
}
