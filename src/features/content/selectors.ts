import { contentCategories } from './data/contentCategories';
import { readingItems } from './data/readingItems';
import { CategoryKey, ContentCategory, ReadingItem } from './types';

export function getAllCategories(): ContentCategory[] {
  return contentCategories;
}

export function getCategoryByKey(
  categoryKey: CategoryKey
): ContentCategory | undefined {
  return contentCategories.find((category) => category.key === categoryKey);
}

export function getReadingsByCategory(categoryKey: CategoryKey): ReadingItem[] {
  return readingItems.filter((reading) => reading.categoryKey === categoryKey);
}

export function getReadingById(readingId: string): ReadingItem | undefined {
  return readingItems.find((reading) => reading.id === readingId);
}
