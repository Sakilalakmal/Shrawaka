import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

import { AppConstants } from '../../../constants/appConstants';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';

type SettingToggleRowProps = {
  title: string;
  description?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function SettingToggleRow({
  title,
  description,
  value,
  onValueChange,
}: SettingToggleRowProps) {
  const theme = useAppTheme();
  const styles = createStyles(theme, Boolean(description));

  return (
    <Pressable
      accessibilityLabel={title}
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      onPress={() => onValueChange(!value)}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
    >
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
      </View>

      <View pointerEvents="none">
        <Switch
          ios_backgroundColor={theme.colors.switchTrackInactive}
          onValueChange={onValueChange}
          thumbColor={theme.colors.switchThumb}
          trackColor={{
            false: theme.colors.switchTrackInactive,
            true: theme.colors.switchTrackActive,
          }}
          value={value}
        />
      </View>
    </Pressable>
  );
}

function createStyles(
  theme: ReturnType<typeof useAppTheme>,
  hasDescription: boolean
) {
  return StyleSheet.create({
    row: {
      minHeight: AppConstants.settingsRowMinHeight,
      borderRadius: AppConstants.radiusLarge,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.settingsRowBackground,
      paddingHorizontal: 20,
      paddingVertical: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
    },
    rowPressed: {
      opacity: 0.94,
    },
    textWrap: {
      flex: 1,
    },
    title: {
      ...Typography.title,
      color: theme.colors.textPrimary,
      marginBottom: hasDescription ? 8 : 0,
    },
    description: {
      ...Typography.body,
      color: theme.colors.textSecondary,
    },
  });
}
