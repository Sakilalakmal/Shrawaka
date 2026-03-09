import { MaterialIcons } from '@expo/vector-icons';
import { LanguageCode } from '../preferences/types';

export type CategoryKey =
  | 'jathaka-katha'
  | 'pansiya-panas-jathaka'
  | 'daham-karunu';

export type LocalizedText = Record<LanguageCode, string>;

export type ContentCategory = {
  key: CategoryKey;
  title: string;
  subtitle: string;
  description: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export type LocalizedContentCategory = {
  key: CategoryKey;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
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

export type LocalizedReadingItem = {
  id: string;
  categoryKey: CategoryKey;
  title: LocalizedText;
  subtitle?: LocalizedText;
  previewText: LocalizedText;
  body: LocalizedText;
};
