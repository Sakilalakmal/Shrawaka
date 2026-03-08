import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppConstants } from '../../../constants/appConstants';
import { AppColors } from '../../../theme/colors';
import { Typography } from '../../../theme/typography';
import { HomeCategory } from '../data/homeCategories';

type HomeCategoryCardProps = {
  category: HomeCategory;
  onPress: () => void;
};

export function HomeCategoryCard({
  category,
  onPress,
}: HomeCategoryCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={category.title}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.iconWrap}>
        <MaterialIcons
          color={AppColors.primaryDeep}
          name={category.icon}
          size={30}
        />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{category.title}</Text>
        <Text style={styles.subtitle}>{category.subtitle}</Text>
      </View>
      <MaterialIcons
        color={AppColors.primaryDeep}
        name="arrow-forward-ios"
        size={18}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: AppConstants.cardMinHeight,
    borderRadius: AppConstants.radiusLarge,
    borderWidth: 1,
    borderColor: AppColors.border,
    backgroundColor: AppColors.surface,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: AppColors.textPrimary,
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.995 }],
  },
  iconWrap: {
    width: 58,
    height: 58,
    borderRadius: AppConstants.radiusMedium,
    backgroundColor: 'rgba(201, 138, 34, 0.14)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },
  textWrap: {
    flex: 1,
    gap: 8,
  },
  title: {
    ...Typography.title,
    color: AppColors.textPrimary,
  },
  subtitle: {
    ...Typography.body,
    color: AppColors.textSecondary,
  },
});
