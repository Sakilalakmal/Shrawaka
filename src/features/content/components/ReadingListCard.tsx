import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppConstants } from '../../../constants/appConstants';
import { AppColors } from '../../../theme/colors';
import { Typography } from '../../../theme/typography';
import { ReadingItem } from '../types';

type ReadingListCardProps = {
  reading: ReadingItem;
  onPress: () => void;
};

export function ReadingListCard({ reading, onPress }: ReadingListCardProps) {
  return (
    <Pressable
      accessibilityLabel={reading.title}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{reading.title}</Text>
        {reading.subtitle ? (
          <Text style={styles.subtitle}>{reading.subtitle}</Text>
        ) : null}
        <Text style={styles.preview}>{reading.previewText}</Text>
      </View>

      <View style={styles.iconWrap}>
        <MaterialIcons
          color={AppColors.primaryDeep}
          name="arrow-forward-ios"
          size={18}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: AppConstants.listItemMinHeight,
    borderRadius: AppConstants.radiusLarge,
    borderWidth: 1,
    borderColor: AppColors.border,
    backgroundColor: AppColors.surface,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardPressed: {
    opacity: 0.92,
  },
  content: {
    flex: 1,
    paddingRight: 16,
  },
  title: {
    ...Typography.title,
    color: AppColors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    ...Typography.label,
    color: AppColors.primaryDeep,
    marginBottom: 10,
  },
  preview: {
    ...Typography.bodyLarge,
    color: AppColors.textSecondary,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.surfaceSoft,
  },
});
