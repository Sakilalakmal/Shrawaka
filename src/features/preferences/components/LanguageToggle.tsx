import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';
import { LanguageCode } from '../types';

type LanguageToggleProps = {
  value: LanguageCode;
  onChange: (language: LanguageCode) => void;
  sinhalaLabel: string;
  englishLabel: string;
};

export function LanguageToggle({
  value,
  onChange,
  sinhalaLabel,
  englishLabel,
}: LanguageToggleProps) {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      {[
        { key: 'si' as const, label: sinhalaLabel },
        { key: 'en' as const, label: englishLabel },
      ].map((option) => {
        const isActive = value === option.key;

        return (
          <Pressable
            key={option.key}
            accessibilityRole="button"
            onPress={() => onChange(option.key)}
            style={({ pressed }) => [
              styles.option,
              isActive && styles.optionActive,
              pressed && styles.optionPressed,
            ]}
          >
            <Text style={[styles.optionLabel, isActive && styles.optionLabelActive]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function createStyles(theme: ReturnType<typeof useAppTheme>) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.surface,
      borderRadius: 999,
      padding: 4,
      gap: 4,
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.08,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 6 },
      elevation: 2,
    },
    option: {
      minWidth: 96,
      borderRadius: 999,
      paddingHorizontal: 16,
      paddingVertical: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionActive: {
      backgroundColor: theme.colors.primary,
    },
    optionPressed: {
      opacity: 0.92,
    },
    optionLabel: {
      ...Typography.label,
      color: theme.colors.textSecondary,
    },
    optionLabelActive: {
      color: theme.colors.onPrimary,
    },
  });
}
