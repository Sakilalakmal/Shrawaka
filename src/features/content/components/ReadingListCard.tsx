import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppConstants } from '../../../constants/appConstants';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
import { usePreferences } from '../../preferences/PreferencesContext';
import { getCategoryPresentation } from '../categoryPresentation';
import { getCategoryByKey } from '../selectors';
import { ReadingItem } from '../types';

type ReadingListCardProps = {
  reading: ReadingItem;
  onPress: () => void;
};

export function ReadingListCard({ reading, onPress }: ReadingListCardProps) {
  const theme = useAppTheme();
  const { preferences } = usePreferences();
  const category = getCategoryByKey(reading.categoryKey, preferences.language);
  const palette = getCategoryPresentation(reading.categoryKey, theme.colors);
  const styles = createStyles(theme, palette.background, palette.accent);

  return (
    <Pressable
      accessibilityLabel={reading.title}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.mediaBlock}>
        <View style={styles.mediaOrb} />
        <View style={styles.mediaIcon}>
          <MaterialIcons
            color={theme.colors.primaryDeep}
            name={category?.icon ?? 'article'}
            size={24}
          />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{reading.title}</Text>
        {reading.subtitle ? (
          <View style={styles.subtitleChip}>
            <Text style={styles.subtitle}>{reading.subtitle}</Text>
          </View>
        ) : null}
        <Text style={styles.preview}>{reading.previewText}</Text>
      </View>

      <View style={styles.iconWrap}>
        <MaterialIcons
          color={theme.colors.primaryDeep}
          name="arrow-forward-ios"
          size={18}
        />
      </View>
    </Pressable>
  );
}

function createStyles(
  theme: ReturnType<typeof useAppTheme>,
  mediaBackground: string,
  orbColor: string
) {
  return StyleSheet.create({
    card: {
      minHeight: AppConstants.listItemMinHeight,
      borderRadius: AppConstants.radiusLarge,
      backgroundColor: theme.colors.surface,
      paddingHorizontal: 20,
      paddingVertical: 18,
      flexDirection: 'row',
      alignItems: 'stretch',
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.12,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: 10 },
      elevation: 3,
    },
    cardPressed: {
      opacity: 0.92,
    },
    mediaBlock: {
      width: 88,
      borderRadius: 24,
      backgroundColor: mediaBackground,
      marginRight: 16,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mediaOrb: {
      position: 'absolute',
      width: 82,
      height: 82,
      borderRadius: 999,
      backgroundColor: orbColor,
      top: -18,
      right: -16,
      opacity: 0.8,
    },
    mediaIcon: {
      width: 46,
      height: 46,
      borderRadius: 999,
      backgroundColor: 'rgba(255,255,255,0.76)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      flex: 1,
      paddingRight: 14,
    },
    title: {
      ...Typography.title,
      color: theme.colors.textPrimary,
      marginBottom: 8,
    },
    subtitleChip: {
      alignSelf: 'flex-start',
      paddingHorizontal: 12,
      paddingVertical: 7,
      borderRadius: 999,
      backgroundColor: theme.colors.accentSoft,
      marginBottom: 12,
    },
    subtitle: {
      ...Typography.label,
      color: theme.colors.primaryDeep,
    },
    preview: {
      ...Typography.body,
      color: theme.colors.textSecondary,
    },
    iconWrap: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.accentSoft,
      alignSelf: 'center',
    },
  });
}
