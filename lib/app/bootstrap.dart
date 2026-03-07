import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/widgets.dart';
import 'package:shrawaka/app/app.dart';
import 'package:shrawaka/firebase_options.dart';

Future<void> bootstrap() async {
  WidgetsFlutterBinding.ensureInitialized();

  try {
    await Firebase.initializeApp(
      options: DefaultFirebaseOptions.currentPlatform,
    );
  } on UnsupportedError {
    // Firebase is not configured for every desktop target in this phase.
  }

  runApp(const ShrawakaApp());
}
