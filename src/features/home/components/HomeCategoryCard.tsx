import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppConstants } from '../../../constants/appConstants';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
import { ContentCategory } from '../../content/types';

type HomeCategoryCardProps = {
  category: ContentCategory;
  onPress: () => void;
};

export function HomeCategoryCard({
  category,
  onPress,
}: HomeCategoryCardProps) {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={category.title}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.iconWrap}>
        <MaterialIcons
          color={theme.colors.primaryDeep}
          name={category.icon}
          size={30}
        />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{category.title}</Text>
        <Text style={styles.subtitle}>{category.subtitle}</Text>
      </View>
      <MaterialIcons
        color={theme.colors.primaryDeep}
        name="arrow-forward-ios"
        size={18}
      />
    </Pressable>
  );
}

function createStyles(theme: ReturnType<typeof useAppTheme>) {
  return StyleSheet.create({
    card: {
      minHeight: AppConstants.cardMinHeight,
      borderRadius: AppConstants.radiusLarge,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.surface,
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.16,
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
      backgroundColor: theme.colors.accentSoft,
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
      color: theme.colors.textPrimary,
    },
    subtitle: {
      ...Typography.body,
      color: theme.colors.textSecondary,
    },
  });
}
