import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Routes, RootStackParamList } from '../../../app/navigation/routes';
import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { AppColors } from '../../../theme/colors';
import { Typography } from '../../../theme/typography';

type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof Routes.splash
>;

export function SplashScreen({ navigation }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(Routes.home);
    }, AppConstants.splashDurationMs);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconBox}>
          <MaterialIcons
            color={AppColors.primaryDeep}
            name="self-improvement"
            size={48}
          />
        </View>
        <Text style={styles.title}>{AppStrings.appName}</Text>
        <Text style={styles.subtitle}>{AppStrings.splashTagline}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    backgroundColor: AppColors.background,
  },
  iconBox: {
    width: 92,
    height: 92,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.surface,
    borderWidth: 1,
    borderColor: AppColors.border,
    marginBottom: 28,
  },
  title: {
    ...Typography.display,
    color: AppColors.textPrimary,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    ...Typography.bodyLarge,
    color: AppColors.textSecondary,
    textAlign: 'center',
  },
});
