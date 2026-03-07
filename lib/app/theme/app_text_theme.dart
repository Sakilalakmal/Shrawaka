import 'package:flutter/material.dart';
import 'package:shrawaka/app/theme/app_colors.dart';

abstract final class AppTextTheme {
  static TextTheme build() {
    const base = TextTheme(
      displaySmall: TextStyle(
        fontSize: 34,
        fontWeight: FontWeight.w700,
        height: 1.2,
      ),
      headlineLarge: TextStyle(
        fontSize: 30,
        fontWeight: FontWeight.w700,
        height: 1.25,
      ),
      headlineMedium: TextStyle(
        fontSize: 24,
        fontWeight: FontWeight.w700,
        height: 1.3,
      ),
      titleLarge: TextStyle(
        fontSize: 22,
        fontWeight: FontWeight.w700,
        height: 1.35,
      ),
      titleMedium: TextStyle(
        fontSize: 18,
        fontWeight: FontWeight.w600,
        height: 1.35,
      ),
      bodyLarge: TextStyle(
        fontSize: 18,
        fontWeight: FontWeight.w500,
        height: 1.5,
      ),
      bodyMedium: TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.w400,
        height: 1.5,
      ),
      labelLarge: TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.w600,
        height: 1.4,
      ),
    );

    return base.apply(
      bodyColor: AppColors.textPrimary,
      displayColor: AppColors.textPrimary,
    );
  }
}
