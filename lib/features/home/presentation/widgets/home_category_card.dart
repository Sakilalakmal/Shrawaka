import 'package:flutter/material.dart';
import 'package:shrawaka/app/theme/app_colors.dart';
import 'package:shrawaka/core/constants/app_constants.dart';
import 'package:shrawaka/features/home/models/home_category.dart';

class HomeCategoryCard extends StatelessWidget {
  const HomeCategoryCard({
    required this.category,
    required this.onTap,
    super.key,
  });

  final HomeCategory category;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Material(
      color: AppColors.surface,
      borderRadius: BorderRadius.circular(AppConstants.cardRadius),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(AppConstants.cardRadius),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(AppConstants.cardRadius),
            border: Border.all(color: AppColors.border),
            boxShadow: const [
              BoxShadow(
                color: AppColors.shadow,
                blurRadius: 18,
                offset: Offset(0, 10),
              ),
            ],
            gradient: const LinearGradient(
              colors: [AppColors.surface, AppColors.surfaceSoft],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: ConstrainedBox(
            constraints: const BoxConstraints(
              minHeight: AppConstants.cardMinHeight,
            ),
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Row(
                children: [
                  Container(
                    width: 58,
                    height: 58,
                    decoration: BoxDecoration(
                      color: AppColors.primary.withValues(alpha: 0.14),
                      borderRadius: BorderRadius.circular(18),
                    ),
                    child: Icon(
                      category.icon,
                      size: 30,
                      color: AppColors.primaryDeep,
                    ),
                  ),
                  const SizedBox(width: 18),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(category.title, style: theme.textTheme.titleLarge),
                        const SizedBox(height: 8),
                        Text(
                          category.subtitle,
                          style: theme.textTheme.bodyMedium?.copyWith(
                            color: AppColors.textSecondary,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 12),
                  const Icon(
                    Icons.arrow_forward_ios_rounded,
                    size: 20,
                    color: AppColors.primaryDeep,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
