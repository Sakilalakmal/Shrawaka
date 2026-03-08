import { MaterialIcons } from '@expo/vector-icons';

export type HomeCategory = {
  title: string;
  subtitle: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const homeCategories: HomeCategory[] = [
  {
    title: 'ජාතක කතා',
    subtitle: 'බුදුරජාණන් වහන්සේගේ පෙර භව කථා සරලව කියවන්න.',
    icon: 'auto-stories',
  },
  {
    title: 'පන්සිය පනස් ජාතක',
    subtitle: 'ප්‍රධාන ජාතක කථා සංග්‍රහය පියවරෙන් පියවර කියවන්න.',
    icon: 'menu-book',
  },
  {
    title: 'දහම් කරුණු',
    subtitle: 'දිනපතා මතක තබාගත හැකි සරල දහම් කරුණු කියවන්න.',
    icon: 'self-improvement',
  },
];
