import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { AppColors } from '../../../theme/colors';
import { Typography } from '../../../theme/typography';

type ContentScreenHeaderProps = {
  title: string;
  description?: string;
  onBackPress: () => void;
};

export function ContentScreenHeader({
  title,
  description,
  onBackPress,
}: ContentScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable
        accessibilityLabel={AppStrings.contentBackLabel}
        accessibilityRole="button"
        onPress={onBackPress}
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.backButtonPressed,
        ]}
      >
        <MaterialIcons
          color={AppColors.primaryDeep}
          name="arrow-back-ios-new"
          size={18}
        />
        <Text style={styles.backLabel}>{AppStrings.contentBackLabel}</Text>
      </Pressable>

      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: AppConstants.sectionSpacing,
  },
  backButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.surface,
    borderWidth: 1,
    borderColor: AppColors.border,
    borderRadius: AppConstants.radiusMedium,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 20,
  },
  backButtonPressed: {
    opacity: 0.9,
  },
  backLabel: {
    ...Typography.label,
    color: AppColors.primaryDeep,
    marginLeft: 8,
  },
  title: {
    ...Typography.headline,
    color: AppColors.textPrimary,
    marginBottom: 10,
  },
  description: {
    ...Typography.bodyLarge,
    color: AppColors.textSecondary,
  },
});
