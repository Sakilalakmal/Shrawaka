import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shrawaka/app/app.dart';
import 'package:shrawaka/core/constants/app_constants.dart';

void main() {
  testWidgets('app starts on splash and moves to home', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(const ShrawakaApp());

    expect(find.text('Shrawaka'), findsOneWidget);
    expect(find.text('සාමයෙන් දහම් කියවීම සඳහා'), findsOneWidget);

    await tester.pump(AppConstants.splashDuration);
    await tester.pumpAndSettle();

    expect(find.text('ආයුබෝවන්'), findsOneWidget);
    expect(find.text('ජාතක කතා'), findsOneWidget);
    expect(find.text('පන්සිය පනස් ජාතක'), findsOneWidget);
    expect(find.text('දහම් කරුණු'), findsOneWidget);
  });

  testWidgets('category tap shows placeholder snackbar', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(const ShrawakaApp());
    await tester.pump(AppConstants.splashDuration);
    await tester.pumpAndSettle();

    await tester.tap(find.text('ජාතක කතා'));
    await tester.pump();

    expect(find.byType(SnackBar), findsOneWidget);
    expect(find.text('ජාතක කතා අංශය ඉදිරියේදී එක් කෙරේ.'), findsOneWidget);
  });
}
