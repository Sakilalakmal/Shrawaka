import { CategoryKey } from '../../features/content/types';

export const Routes = {
  splash: 'Splash',
  home: 'Home',
  categoryList: 'CategoryList',
  readingDetail: 'ReadingDetail',
} as const;

export type RootStackParamList = {
  [Routes.splash]: undefined;
  [Routes.home]: undefined;
  [Routes.categoryList]: {
    categoryKey: CategoryKey;
  };
  [Routes.readingDetail]: {
    readingId: string;
  };
};
