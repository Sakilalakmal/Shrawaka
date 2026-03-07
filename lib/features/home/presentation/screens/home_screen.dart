import 'package:flutter/material.dart';
import 'package:shrawaka/app/theme/app_colors.dart';
import 'package:shrawaka/core/constants/app_constants.dart';
import 'package:shrawaka/core/constants/app_strings.dart';
import 'package:shrawaka/features/home/models/home_category.dart';
import 'package:shrawaka/features/home/presentation/widgets/home_category_card.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  static const List<HomeCategory> _categories = [
    HomeCategory(
      title: 'ජාතක කතා',
      subtitle: 'බුදුරජාණන් වහන්සේගේ පෙර භව කථා සරලව කියවන්න.',
      icon: Icons.auto_stories_rounded,
    ),
    HomeCategory(
      title: 'පන්සිය පනස් ජාතක',
      subtitle: 'ප්‍රධාන ජාතක කථා සංග්‍රහය පියවරෙන් පියවර කියවන්න.',
      icon: Icons.menu_book_rounded,
    ),
    HomeCategory(
      title: 'දහම් කරුණු',
      subtitle: 'දිනපතා මතක තබාගත හැකි සරල දහම් කරුණු කියවන්න.',
      icon: Icons.self_improvement_rounded,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Scaffold(
      appBar: AppBar(title: const Text(AppStrings.appName)),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(
            AppConstants.screenHorizontalPadding,
            AppConstants.screenVerticalPadding,
            AppConstants.screenHorizontalPadding,
            AppConstants.screenVerticalPadding,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  color: AppColors.surface,
                  borderRadius: BorderRadius.circular(AppConstants.cardRadius),
                  border: Border.all(color: AppColors.border),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      AppStrings.homeGreeting,
                      style: theme.textTheme.headlineMedium,
                    ),
                    const SizedBox(height: 12),
                    Text(
                      AppStrings.homeIntro,
                      style: theme.textTheme.bodyLarge?.copyWith(
                        color: AppColors.textSecondary,
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: AppConstants.sectionSpacing),
              Text(
                AppStrings.homeSectionTitle,
                style: theme.textTheme.titleLarge,
              ),
              const SizedBox(height: 16),
              for (final category in _categories) ...[
                HomeCategoryCard(
                  category: category,
                  onTap: () => _showComingSoonMessage(context, category.title),
                ),
                if (category != _categories.last)
                  const SizedBox(height: AppConstants.cardSpacing),
              ],
            ],
          ),
        ),
      ),
    );
  }

  void _showComingSoonMessage(BuildContext context, String title) {
    ScaffoldMessenger.of(context)
      ..hideCurrentSnackBar()
      ..showSnackBar(
        SnackBar(content: Text('$title ${AppStrings.homeFeedbackSuffix}')),
      );
  }
}
