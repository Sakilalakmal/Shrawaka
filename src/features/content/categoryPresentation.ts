import { CategoryKey } from './types';
import { ThemeColors } from '../../theme/appTheme';

export type CategoryPresentation = {
  background: string;
  accent: string;
  accentSecondary: string;
};

export function getCategoryPresentation(
  categoryKey: CategoryKey,
  colors: ThemeColors
): CategoryPresentation {
  switch (categoryKey) {
    case 'jathaka-katha':
      return {
        background: colors.accentSky,
        accent: colors.accentBlush,
        accentSecondary: colors.accentLilac,
      };
    case 'pansiya-panas-jathaka':
      return {
        background: colors.accentSun,
        accent: colors.accentBlush,
        accentSecondary: colors.accentSky,
      };
    case 'daham-karunu':
      return {
        background: colors.accentMint,
        accent: colors.accentLilac,
        accentSecondary: colors.accentSun,
      };
    default:
      return {
        background: colors.surfaceSoft,
        accent: colors.surfaceMuted,
        accentSecondary: colors.accentSoft,
      };
  }
}
