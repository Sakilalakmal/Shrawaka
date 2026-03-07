import 'package:flutter/material.dart';
import 'package:shrawaka/app/router/app_routes.dart';
import 'package:shrawaka/features/home/presentation/screens/home_screen.dart';
import 'package:shrawaka/features/splash/presentation/screens/splash_screen.dart';

abstract final class AppRouter {
  static Route<dynamic> onGenerateRoute(RouteSettings settings) {
    switch (settings.name) {
      case AppRoutes.splash:
        return MaterialPageRoute<void>(
          builder: (_) => const SplashScreen(),
          settings: settings,
        );
      case AppRoutes.home:
        return MaterialPageRoute<void>(
          builder: (_) => const HomeScreen(),
          settings: settings,
        );
      default:
        return MaterialPageRoute<void>(
          builder: (_) => const SplashScreen(),
          settings: settings,
        );
    }
  }
}
