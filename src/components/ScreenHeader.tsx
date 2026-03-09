import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppConstants } from '../constants/appConstants';
import { AppStrings } from '../constants/appStrings';
import { Typography } from '../theme/typography';
import { useAppTheme } from '../theme/useAppTheme';

type ScreenHeaderProps = {
  title: string;
  description?: string;
  onBackPress: () => void;
};

export function ScreenHeader({
  title,
  description,
  onBackPress,
}: ScreenHeaderProps) {
  const theme = useAppTheme();
  const styles = createStyles(theme);

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
          color={theme.colors.primaryDeep}
          name="arrow-back-ios-new"
          size={18}
        />
      </Pressable>

      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
    </View>
  );
}

function createStyles(theme: ReturnType<typeof useAppTheme>) {
  return StyleSheet.create({
    container: {
      marginBottom: AppConstants.sectionSpacing,
    },
    backButton: {
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 23,
      marginBottom: 22,
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.12,
      shadowRadius: 14,
      shadowOffset: { width: 0, height: 8 },
      elevation: 2,
    },
    backButtonPressed: {
      opacity: 0.9,
    },
    title: {
      ...Typography.headline,
      color: theme.colors.textPrimary,
      marginBottom: 10,
    },
    description: {
      ...Typography.bodyLarge,
      color: theme.colors.textSecondary,
    },
  });
}
