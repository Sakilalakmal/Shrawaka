import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Image,
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
          <View>
            <Text style={styles.eyebrow}>{AppStrings.appName}</Text>
            <Text style={styles.appTitle}>{AppStrings.homeGreeting}</Text>
          </View>
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
          <View style={styles.heroBlobPrimary} />
          <View style={styles.heroBlobSecondary} />
          <View style={styles.heroContent}>
            <View style={styles.heroTextWrap}>
              <Text style={styles.greeting}>{AppStrings.appName}</Text>
              <Text style={styles.intro}>{AppStrings.homeIntro}</Text>
            </View>

            <View style={styles.heroArt}>
              <View style={styles.heroArtHalo}>
                <Image
                  source={require('../../../../assets/splash-icon.png')}
                  style={styles.heroLogo}
                />
              </View>
              <View style={styles.heroDot} />
              <View style={styles.heroDotSmall} />
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>{AppStrings.homeSectionTitle}</Text>

        <View style={styles.cardList}>
          {categories.map((category, index) => (
            <HomeCategoryCard
              key={category.key}
              category={category}
              variant={index === 0 ? 'featured' : 'compact'}
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
      paddingBottom: 36,
    },
    topBar: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 24,
    },
    eyebrow: {
      ...Typography.label,
      color: theme.colors.textSecondary,
      marginBottom: 6,
    },
    appTitle: {
      ...Typography.headline,
      color: theme.colors.textPrimary,
    },
    settingsButton: {
      width: AppConstants.iconButtonSize,
      height: AppConstants.iconButtonSize,
      borderRadius: 27,
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.12,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: 10 },
      elevation: 3,
    },
    settingsButtonPressed: {
      opacity: 0.9,
    },
    heroCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 34,
      padding: 26,
      marginBottom: 24,
      overflow: 'hidden',
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.14,
      shadowRadius: 22,
      shadowOffset: { width: 0, height: 14 },
      elevation: 4,
    },
    heroBlobPrimary: {
      position: 'absolute',
      width: 240,
      height: 240,
      borderRadius: 120,
      backgroundColor: theme.colors.accentBlush,
      right: -68,
      top: -54,
    },
    heroBlobSecondary: {
      position: 'absolute',
      width: 220,
      height: 220,
      borderRadius: 46,
      backgroundColor: theme.colors.accentSky,
      right: 26,
      bottom: -88,
      transform: [{ rotate: '-22deg' }],
    },
    heroContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
    },
    heroTextWrap: {
      flex: 1,
      paddingRight: 8,
    },
    greeting: {
      ...Typography.headline,
      color: theme.colors.textPrimary,
      marginBottom: 14,
    },
    intro: {
      ...Typography.bodyLarge,
      color: theme.colors.textSecondary,
    },
    heroArt: {
      width: 126,
      height: 126,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroArtHalo: {
      width: 106,
      height: 106,
      borderRadius: 53,
      backgroundColor: 'rgba(255,255,255,0.72)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroLogo: {
      width: 64,
      height: 64,
      tintColor: theme.colors.primaryDeep,
    },
    heroDot: {
      position: 'absolute',
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: theme.colors.primaryDeep,
      top: 14,
      right: 8,
    },
    heroDotSmall: {
      position: 'absolute',
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.primaryDeep,
      bottom: 16,
      left: 12,
    },
    sectionTitle: {
      ...Typography.title,
      color: theme.colors.textPrimary,
      marginBottom: 16,
    },
    cardList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      rowGap: AppConstants.cardSpacing,
    },
  });
}
