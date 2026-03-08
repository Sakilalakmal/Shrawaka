import { MaterialIcons } from '@expo/vector-icons';

export type CategoryKey =
  | 'jathaka-katha'
  | 'pansiya-panas-jathaka'
  | 'daham-karunu';

export type ContentCategory = {
  key: CategoryKey;
  title: string;
  subtitle: string;
  description: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export type ReadingItem = {
  id: string;
  categoryKey: CategoryKey;
  title: string;
  subtitle?: string;
  previewText: string;
  body: string;
};
