import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Routes, RootStackParamList } from '../../../app/navigation/routes';
import { AppConstants } from '../../../constants/appConstants';
import { AppStrings } from '../../../constants/appStrings';
import { Typography } from '../../../theme/typography';
import { useAppTheme } from '../../../theme/useAppTheme';

type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof Routes.splash
>;

export function SplashScreen({ navigation }: SplashScreenProps) {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(Routes.home);
    }, AppConstants.splashDurationMs);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.panel}>
          <View style={[styles.blob, styles.blobSky]} />
          <View style={[styles.blob, styles.blobBlush]} />
          <View style={[styles.blob, styles.blobSun]} />
          <View style={styles.dotOne} />
          <View style={styles.dotTwo} />
          <View style={styles.dotThree} />

          <View style={styles.logoHalo}>
            <View style={styles.logoHaloInner}>
              <Image
                source={require('../../../../assets/splash-icon.png')}
                style={styles.logo}
              />
            </View>
          </View>

          <View style={styles.copyBlock}>
            <Text style={styles.title}>{AppStrings.appName}</Text>
            <Text style={styles.subtitle}>{AppStrings.splashTagline}</Text>
          </View>

          <View style={styles.cornerBadge}>
            <MaterialIcons
              color={theme.colors.primaryDeep}
              name="self-improvement"
              size={24}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function createStyles(theme: ReturnType<typeof useAppTheme>) {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.splashBackdrop,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: theme.colors.splashBackdrop,
    },
    panel: {
      width: '100%',
      minHeight: 620,
      maxWidth: 420,
      overflow: 'hidden',
      borderRadius: 38,
      backgroundColor: theme.colors.splashPanel,
      paddingHorizontal: 30,
      paddingTop: 40,
      paddingBottom: 36,
      justifyContent: 'space-between',
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.2,
      shadowRadius: 26,
      shadowOffset: { width: 0, height: 18 },
      elevation: 8,
    },
    blob: {
      position: 'absolute',
      borderRadius: 999,
    },
    blobSky: {
      width: 320,
      height: 360,
      left: -72,
      top: 86,
      backgroundColor: theme.colors.accentSky,
      transform: [{ rotate: '-24deg' }],
    },
    blobBlush: {
      width: 254,
      height: 254,
      right: -38,
      top: -36,
      backgroundColor: theme.colors.accentBlush,
    },
    blobSun: {
      width: 290,
      height: 250,
      bottom: -74,
      left: -48,
      backgroundColor: theme.colors.accentSun,
      opacity: 0.68,
      transform: [{ rotate: '18deg' }],
    },
    dotOne: {
      position: 'absolute',
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.splashDot,
      top: 162,
      right: 82,
    },
    dotTwo: {
      position: 'absolute',
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: theme.colors.splashDot,
      top: 222,
      left: 58,
    },
    dotThree: {
      position: 'absolute',
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.splashDot,
      top: 286,
      right: 52,
    },
    logoHalo: {
      alignSelf: 'center',
      width: 280,
      height: 280,
      borderRadius: 140,
      backgroundColor: 'rgba(255,255,255,0.26)',
      marginTop: 118,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoHaloInner: {
      width: 196,
      height: 196,
      borderRadius: 98,
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 120,
      height: 120,
      tintColor: theme.colors.primaryDeep,
      opacity: 0.96,
    },
    copyBlock: {
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingTop: 20,
    },
    title: {
      ...Typography.display,
      color: theme.colors.textPrimary,
      textAlign: 'center',
      marginBottom: 14,
    },
    subtitle: {
      ...Typography.bodyLarge,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    cornerBadge: {
      position: 'absolute',
      top: 28,
      right: 28,
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: 'rgba(255,255,255,0.86)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
