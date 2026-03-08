# Shrawaka

Shrawaka is a calm, elderly-friendly Buddhist mobile app. This repo is now a React Native app built with Expo and TypeScript, focused in Phase 1 on a simple, readable foundation for elderly users.

## Implemented in Phase 1

- Expo + TypeScript app foundation
- Clean folder structure for app config, theme, constants, and features
- Warm, accessible light theme
- Simple splash screen with automatic transition
- Home screen with Sinhala-first UI
- Reusable large category cards for:
  - `ජාතක කතා`
  - `පන්සිය පනස් ජාතක`
  - `දහම් කරුණු`
- Placeholder feedback when cards are tapped

## Folder Structure

```text
assets/
App.tsx
app.json
index.ts
package.json
src/
  app/
    navigation/
  constants/
  features/
    home/
      components/
      data/
      screens/
    splash/
      screens/
  theme/
tsconfig.json
```

## Packages

- `expo`: managed React Native runtime and tooling
- `react-native`: core mobile UI framework
- `expo-status-bar`: status bar control
- `@react-navigation/native`: app navigation foundation
- `@react-navigation/native-stack`: splash-to-home stack navigation
- `react-native-safe-area-context`: safe area handling
- `react-native-screens`: native screen optimizations for navigation

## Phase 2

- Add category detail screens
- Define content models and repository layer
- Introduce backend integration for Buddhist content
- Add real reading flows, search/filtering, and audio features later
