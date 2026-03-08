import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../../../app/navigation/routes';
import { ScreenHeader } from '../../../components/ScreenHeader';
import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
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
  const styles = createStyles(theme);

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

function createStyles(theme: ReturnType<typeof useAppTheme>) {
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
      marginBottom: 16,
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
