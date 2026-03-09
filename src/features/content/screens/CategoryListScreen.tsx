import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../../../app/navigation/routes';
import { ScreenHeader } from '../../../components/ScreenHeader';
import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
import { getCategoryPresentation } from '../categoryPresentation';
import { ReadingListCard } from '../components/ReadingListCard';
import { getCategoryByKey, getReadingsByCategory } from '../selectors';

type CategoryListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof Routes.categoryList
>;

export function CategoryListScreen({
  navigation,
  route,
}: CategoryListScreenProps) {
  const category = getCategoryByKey(route.params.categoryKey);
  const readings = getReadingsByCategory(route.params.categoryKey);
  const theme = useAppTheme();
  const palette = category
    ? getCategoryPresentation(category.key, theme.colors)
    : undefined;
  const styles = createStyles(theme, palette?.background, palette?.accent);

  if (!category) {
    return (
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <View style={styles.fallbackContainer}>
          <ScreenHeader
            title={AppStrings.categoryNotFoundTitle}
            description={AppStrings.categoryNotFoundMessage}
            onBackPress={() => navigation.navigate(Routes.home)}
          />
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate(Routes.home)}
            style={({ pressed }) => [
              styles.primaryAction,
              pressed && styles.primaryActionPressed,
            ]}
          >
            <Text style={styles.primaryActionLabel}>{AppStrings.returnHome}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <FlatList
        contentContainerStyle={styles.content}
        data={readings}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <ScreenHeader
              title={category.title}
              description={category.description}
              onBackPress={() => navigation.goBack()}
            />
            <View style={styles.heroCard}>
              <View style={styles.heroBlob} />
              <View style={styles.heroIconWrap}>
                <MaterialIcons
                  color={theme.colors.primaryDeep}
                  name={category.icon}
                  size={34}
                />
              </View>
              <Text style={styles.heroSubtitle}>{category.subtitle}</Text>
              <Text style={styles.heroCount}>
                {String(readings.length).padStart(2, '0')}
              </Text>
            </View>
            <Text style={styles.heading}>{AppStrings.readingListHeading}</Text>
          </View>
        }
        renderItem={({ item }) => (
          <ReadingListCard
            reading={item}
            onPress={() =>
              navigation.navigate(Routes.readingDetail, {
                readingId: item.id,
              })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

function createStyles(
  theme: ReturnType<typeof useAppTheme>,
  backgroundColor?: string,
  accentColor?: string
) {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      paddingHorizontal: AppConstants.screenPadding,
      paddingTop: AppConstants.screenPadding,
      paddingBottom: 32,
    },
    heading: {
      ...Typography.title,
      color: theme.colors.textPrimary,
      marginBottom: 18,
    },
    heroCard: {
      backgroundColor: backgroundColor ?? theme.colors.surfaceSoft,
      borderRadius: 32,
      padding: 24,
      marginBottom: 22,
      overflow: 'hidden',
    },
    heroBlob: {
      position: 'absolute',
      width: 184,
      height: 184,
      borderRadius: 999,
      backgroundColor: accentColor ?? theme.colors.surfaceMuted,
      top: -56,
      right: -18,
      opacity: 0.76,
    },
    heroIconWrap: {
      width: 66,
      height: 66,
      borderRadius: 999,
      backgroundColor: 'rgba(255,255,255,0.74)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    heroSubtitle: {
      ...Typography.bodyLarge,
      color: theme.colors.textPrimary,
      paddingRight: 88,
    },
    heroCount: {
      position: 'absolute',
      right: 22,
      bottom: 16,
      fontSize: 54,
      lineHeight: 58,
      fontWeight: '800',
      color: 'rgba(255,255,255,0.56)',
    },
    separator: {
      height: AppConstants.cardSpacing,
    },
    fallbackContainer: {
      flex: 1,
      paddingHorizontal: AppConstants.screenPadding,
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
