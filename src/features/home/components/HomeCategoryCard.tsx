import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppConstants } from '../../../constants/appConstants';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
import { getCategoryPresentation } from '../../content/categoryPresentation';
import { ContentCategory } from '../../content/types';

type HomeCategoryCardProps = {
  category: ContentCategory;
  onPress: () => void;
  variant?: 'featured' | 'compact';
};

export function HomeCategoryCard({
  category,
  onPress,
  variant = 'compact',
}: HomeCategoryCardProps) {
  const theme = useAppTheme();
  const palette = getCategoryPresentation(category.key, theme.colors);
  const styles = createStyles(theme, variant, palette.background, palette.accent);
  const isFeatured = variant === 'featured';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={category.title}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.blob} />
      <View style={styles.blobSecondary} />
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
      <View style={styles.cta}>
        <MaterialIcons
          color={theme.colors.primaryDeep}
          name={isFeatured ? 'arrow-forward' : 'play-arrow'}
          size={isFeatured ? 20 : 24}
        />
      </View>
    </Pressable>
  );
}

function createStyles(
  theme: ReturnType<typeof useAppTheme>,
  variant: 'featured' | 'compact',
  backgroundColor: string,
  accentColor: string
) {
  const isFeatured = variant === 'featured';

  return StyleSheet.create({
    card: {
      minHeight: isFeatured ? 186 : 208,
      width: isFeatured ? '100%' : '48%',
      borderRadius: AppConstants.radiusLarge,
      backgroundColor,
      padding: isFeatured ? 24 : 20,
      justifyContent: 'space-between',
      overflow: 'hidden',
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.14,
      shadowRadius: 18,
      shadowOffset: { width: 0, height: 12 },
      elevation: 4,
    },
    cardPressed: {
      opacity: 0.92,
      transform: [{ scale: 0.985 }],
    },
    blob: {
      position: 'absolute',
      width: isFeatured ? 164 : 126,
      height: isFeatured ? 164 : 126,
      borderRadius: 999,
      backgroundColor: accentColor,
      top: isFeatured ? -38 : -24,
      right: isFeatured ? -18 : -20,
      opacity: 0.82,
    },
    blobSecondary: {
      position: 'absolute',
      width: isFeatured ? 150 : 112,
      height: isFeatured ? 104 : 82,
      borderRadius: 999,
      backgroundColor: 'rgba(255,255,255,0.35)',
      bottom: isFeatured ? -18 : -14,
      left: isFeatured ? -8 : -12,
      transform: [{ rotate: isFeatured ? '-10deg' : '-16deg' }],
    },
    iconWrap: {
      width: isFeatured ? 64 : 58,
      height: isFeatured ? 64 : 58,
      borderRadius: 999,
      backgroundColor: 'rgba(255,255,255,0.72)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: isFeatured ? 28 : 38,
    },
    textWrap: {
      gap: 8,
      paddingRight: isFeatured ? 82 : 22,
    },
    title: {
      ...Typography.title,
      color: theme.colors.textPrimary,
    },
    subtitle: {
      ...Typography.body,
      color: theme.colors.textSecondary,
    },
    cta: {
      position: 'absolute',
      right: 18,
      bottom: 18,
      width: isFeatured ? 48 : 50,
      height: isFeatured ? 48 : 50,
      borderRadius: 999,
      backgroundColor: 'rgba(255,255,255,0.88)',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.12,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 8 },
      elevation: 3,
    },
  });
}
