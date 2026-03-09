import { LanguageCode } from '../preferences/types';
import { contentCategories } from './data/contentCategories';
import { readingItems } from './data/readingItems';
import {
  CategoryKey,
  ContentCategory,
  LocalizedContentCategory,
  LocalizedReadingItem,
  LocalizedText,
  ReadingItem,
} from './types';

function resolveText(text: LocalizedText, language: LanguageCode) {
  return text[language];
}

function mapCategory(
  category: LocalizedContentCategory,
  language: LanguageCode
): ContentCategory {
  return {
    key: category.key,
    title: resolveText(category.title, language),
    subtitle: resolveText(category.subtitle, language),
    description: resolveText(category.description, language),
    icon: category.icon,
  };
}

function mapReading(
  reading: LocalizedReadingItem,
  language: LanguageCode
): ReadingItem {
  return {
    id: reading.id,
    categoryKey: reading.categoryKey,
    title: resolveText(reading.title, language),
    subtitle: reading.subtitle
      ? resolveText(reading.subtitle, language)
      : undefined,
    previewText: resolveText(reading.previewText, language),
    body: resolveText(reading.body, language),
  };
}

export function getAllCategories(language: LanguageCode): ContentCategory[] {
  return contentCategories.map((category) => mapCategory(category, language));
}

export function getCategoryByKey(
  categoryKey: CategoryKey,
  language: LanguageCode
): ContentCategory | undefined {
  const category = contentCategories.find((item) => item.key === categoryKey);
  return category ? mapCategory(category, language) : undefined;
}

export function getReadingsByCategory(
  categoryKey: CategoryKey,
  language: LanguageCode
): ReadingItem[] {
  return readingItems
    .filter((reading) => reading.categoryKey === categoryKey)
    .map((reading) => mapReading(reading, language));
}

export function getReadingById(
  readingId: string,
  language: LanguageCode
): ReadingItem | undefined {
  const reading = readingItems.find((item) => item.id === readingId);
  return reading ? mapReading(reading, language) : undefined;
}
