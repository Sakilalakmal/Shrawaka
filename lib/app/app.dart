import 'package:flutter/material.dart';
import 'package:shrawaka/app/router/app_router.dart';
import 'package:shrawaka/app/router/app_routes.dart';
import 'package:shrawaka/app/theme/app_theme.dart';
import 'package:shrawaka/core/constants/app_strings.dart';

class ShrawakaApp extends StatelessWidget {
  const ShrawakaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: AppStrings.appName,
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light(),
      initialRoute: AppRoutes.splash,
      onGenerateRoute: AppRouter.onGenerateRoute,
    );
  }
}
