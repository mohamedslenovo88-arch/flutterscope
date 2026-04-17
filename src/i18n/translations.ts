export const translations = {
  en: {
    startLearning: 'Start Learning',
    learnFlutterVisually: 'Learn Flutter Visually.',
    heroDesc:
      'Stop memorizing theory. Start understanding Flutter widgets, layouts, and state through interactive visual device previews and real Dart code.',
    launchCourse: 'Launch Interactive Course',
    widgetBasics: 'Widget Basics',
    widgetBasicsDesc:
      'Master Container, Padding, Center, and more. See how properties directly affect the visual output immediately.',
    flexLayouts: 'Flex Layouts',
    flexLayoutsDesc:
      'Visually understand Row, Column, Stack and Alignment properties. No more guessing how flex layouts work.',
    interactiveState: 'Interactive State',
    interactiveStateDesc:
      'Experience StatefulWidgets & setState. Click the virtual phone screen to drive state changes and view code updates.',
    curriculumStr: 'Curriculum Structure',
    lessonsCompleted: 'of',
    lessonsCompletedSuffix: 'lessons completed',
    lessonComplete: 'Lesson Complete!',
    lessonCompleteDesc: 'You answered all the questions correctly. Awesome job!',
    continueToNext: 'Continue to Next Lesson',
    checkUnderstanding: 'Check Your Understanding',
    question: 'Question',
    ofText: 'of',
    correct: 'Correct!',
    wrongTryAgain: 'Not quite. Try again!',
    checkAnswer: 'Check Answer',
    nextQuestion: 'Next Question',
    finishLesson: 'Finish Lesson',
    tryAgain: 'Try Again',
    minRead: 'min read',
    whatYouWillLearn: "What You'll Learn",
    previousLesson: 'Previous Lesson',
    nextLesson: 'Next Lesson',
    finishCourse: 'Finish Course',
    interactiveControls: 'Interactive Controls',
    fontSize: 'Font Size',
    textColor: 'Text Color',
    withCenter: 'With Center Widget',
    withoutCenter: 'Without Center Widget',
    toggleCenter: 'Toggle this to physically wrap the Text widget inside a Center widget.',
    selectButtonType: 'Select Button Type',
    navigatorStack: 'Navigator Stack',
    navigatorDesc:
      'Flutter uses a Stack for navigation. Navigator.push() adds a new screen to the top of the stack. Navigator.pop() removes the current screen, revealing the one underneath.',
    itemCount: 'Item Count',
    listViewNotice:
      "Notice that if you increase the item count past the screen bounds, the screen doesn't break. It just scrolls.",
    tryTyping: 'Try Typing Below',
    simulateKeyboard: 'Simulate Keyboard Input',
    typingSimulNotice:
      'Normally you type directly on the phone keyboard. We simulate it here so you can see the state change live in the emulator.',
    startTypingHere: 'Start typing here...',
    youTyped: 'You typed:',
    nothingYet: '(nothing yet)',
    theoryLesson: 'This is a theory lesson.',
    comingSoon: 'Interactive preview for this lesson is coming soon!',
    scaffoldGridTitle: 'The Scaffold Grid',
    scaffoldGridDesc1:
      'Without Scaffold, your app looks like an ugly unstyled black screen (like the previous lesson).',
    scaffoldGridDesc2:
      'The Scaffold widget automatically provides the standard white background, and gives you neat slots to drop in an appBar, a body, and a floatingActionButton.',

    inheritedWidgetTitle: 'InheritedWidget',
    inheritedThemeColor: 'Theme Color',
    inheritedAnyDescendant: 'Any descendant can read the shared value from the tree.',
    inheritedGrandParent: 'GrandParent',
    inheritedGrandParentDesc: 'Provides the shared theme color to everything below it.',
    inheritedParent: 'Parent',
    inheritedParentDesc: 'Reads the same value without passing it through constructors.',
    inheritedChild: 'Child',
    inheritedChildDesc: 'Gets the color instantly through ThemeColorScope.of(context).',
    inheritedChallengeGoal:
      'Complete the static helper method used to read an InheritedWidget from the current BuildContext.',
    inheritedSuccess:
      'Exactly. Flutter conventionally exposes inherited data through a static of(context) helper.',

    providerPreviewTitle: 'Provider Store',
    providerCartItems: 'Items in Cart',
    addToCart: 'Add to Cart',
    cartBadge: 'Cart',
    providerTapProductHint:
      'Tap any product to simulate context.read<CartModel>().addItem() updating the whole UI.',
    providerCartModelTitle: 'CartModel State',
    providerListenersTitle: 'Listeners',
    providerProductOne: 'Flutter Mug',
    providerProductTwo: 'Widget Stickers',
    providerProductThree: 'Dart Notebook',
    providerChallengeGoal:
      'Complete the ChangeNotifier method that tells Consumer and watch() listeners to rebuild.',
    providerSuccess:
      'Correct. notifyListeners() is what pushes Provider state changes out to listening widgets.',

    valueNotifierTitle: 'ValueNotifier',
    valueNotifierLikes: 'Likes',
    likeButton: 'Like',
    valueNotifierPostTitle: 'A post worth saving',
    valueNotifierPostBody: 'Tap the heart. Only the small like counter needs to rebuild.',
    valueNotifierHint:
      'ValueNotifier is ideal when one small value changes and you do not need a full model class.',
    valueNotifierRebuildNote:
      'The highlighted counter is the only part that visually rebuilds when the value changes.',
    valueNotifierRebuildLabel: 'Rebuilt Widget',
    valueNotifierChallengeGoal:
      'Fill in the widget that listens to a ValueNotifier and rebuilds only the subtree it wraps.',
    valueNotifierSuccess:
      'Exactly. ValueListenableBuilder keeps the rebuild scope small and efficient.',

    nullSafetyTitle: 'Null Safety',
    nullSafeTab: 'Safe',
    crashTab: 'Will Crash',
    nullSafetyQuestionDesc:
      'A nullable type allows null, so you must safely read it with ? or another null-aware operator.',
    nullSafetyBangDesc:
      'The ! operator forces Dart to treat the value as non-null. If it is null at runtime, the app crashes.',
    nullSafetyFallbackDesc:
      'The ?? operator swaps in a fallback value instead of throwing a null error.',
    nullSafetyLateDesc:
      'late promises that a non-nullable variable will be initialized before it is read.',
    nullSafetyChallengeGoal:
      'Fill in the null-aware fallback operator that provides a default value when the left side is null.',
    nullSafetySuccess:
      'Correct. ?? is the safe fallback operator and is usually better than reaching for !.',

    streamTicker: 'Live Price Feed',
    streamEmitting: 'Stream emitting values...',
    streamPipeLabel: 'Event Flow',
    streamPriceLabel: 'Current Price',
    streamChallengeGoal:
      'Complete the Flutter widget that rebuilds every time a Stream emits a new event.',
    streamSuccess:
      'Exactly. StreamBuilder listens to a stream and rebuilds the UI on each incoming event.',

    mixinsTitle: 'Mixins',
    mixinDiagram: 'Mixin Diagram',
    mixinsBirdSwim: 'Bird uses Swimmable',
    mixinsBirdFly: 'Bird uses Flyable',
    mixinsFishSwim: 'Fish uses Swimmable',
    mixinsFishFly: 'Fish uses Flyable',
    mixinsNone: 'No mixins',
    mixinsChallengeGoal:
      'Fill in the Dart keyword that applies a mixin to a class declaration.',
    mixinsSuccess:
      'Correct. The with keyword lets a class reuse behavior from one or more mixins.',

    animatedContainerTitle: 'AnimatedContainer',
    animSize: 'Size',
    animColor: 'Color',
    animCorners: 'Corners',
    animDuration: 'Duration',
    animSmall: 'Small',
    animLarge: 'Large',
    animSharp: 'Sharp',
    animRound: 'Round',
    animatedContainerChallengeGoal:
      'Fill in the required AnimatedContainer parameter that controls how long the implicit animation runs.',
    animatedContainerSuccess:
      'Exactly. duration is required so Flutter knows how long the transition should last.',

    animationControllerTitle: 'AnimationController',
    animationControllerPanelTitle: 'Controller',
    animationControllerHint:
      'AnimationController gives you explicit control over play, reverse, repeat, and stop.',
    animPlay: 'Play',
    animReverse: 'Reverse',
    animRepeat: 'Repeat',
    animStop: 'Stop',
    animValue: 'Animation Value',
    animationControllerChallengeGoal:
      'Fill in the lifecycle method where an AnimationController must be cleaned up.',
    animationControllerSuccess:
      'Correct. dispose() prevents memory leaks by releasing the controller when the widget is removed.',

    heroAnimationTitle: 'Hero Animation',
    heroScreen1: 'Product List',
    heroScreen2: 'Product Detail',
    heroViewDetail: 'View Detail',
    heroGoBack: 'Go Back',
    heroProductTitle: 'Gradient Lamp',
    heroHint:
      'Flutter matches the same Hero tag on two screens and animates the shared widget between them.',
    heroChallengeGoal:
      'Fill in the Hero property that must match on both screens for the transition to work.',
    heroSuccess:
      'Exactly. Matching the tag links the source and destination widgets into one smooth transition.',

    jsonPreviewTitle: 'JSON Serialization',
    jsonEditorLabel: 'Edit JSON',
    jsonParsedLabel: 'Parsed Dart Object',
    jsonInvalid: 'Invalid JSON',
    jsonChallengeGoal:
      'Fill in the conventional factory constructor name used to convert JSON maps into Dart objects.',
    jsonSuccess:
      'Correct. fromJson is the common factory constructor name used throughout Flutter codebases.',

    httpPreviewTitle: 'http.get()',
    httpRequestStage: 'Request',
    httpMakeRequest: 'Make Request',
    httpLoading: 'Fetching...',
    httpResponse: 'Response Received',
    httpStatusCode: 'Status Code',
    httpRequestHint: 'Press the button to fetch a real user from jsonplaceholder.typicode.com.',
    httpChallengeGoal:
      'Fill in the Response property you check to confirm the request succeeded with code 200.',
    httpSuccess:
      'Exactly. statusCode tells you whether the request succeeded before you parse response.body.',
    httpError: 'Request failed',

    prefsTitle: 'App Settings',
    prefsSave: 'Save Settings',
    prefsRestart: 'Simulate App Restart',
    prefsStorage: 'Simulated Device Storage',
    prefsUsername: 'Username',
    prefsDarkMode: 'Dark Mode',
    prefsNotifications: 'Notifications',
    prefsUsernamePlaceholder: 'Type a username',
    prefsChallengeGoal:
      'Fill in the SharedPreferences method that returns the prefs instance before reading or writing values.',
    prefsSuccess:
      'Correct. SharedPreferences.getInstance() gives you the async handle to local key-value storage.',
    prefsRestarting: 'Closing app and reloading saved values...',
    codeChallengeTitle: 'Code Challenge',
    codeChallengeInstruction1:
      'Fill in the highlighted blank with the missing Flutter or Dart code only. Do not rewrite the whole line.',
    codeChallengeInstruction2:
      'The surrounding code is already correct. Your job is to make the snippet complete and valid.',
    codeChallengeExpectedInput: 'Expected input type:',
    codeChallengeTip:
      'Tip: answer with the missing word or expression only, exactly as it should appear in code.',
    codeChallengeDefaultSuccess:
      'Great job! Challenge completed. Watch the preview update!',
    loadingPreview: 'Loading interactive preview...',
    copyCode: 'Copy',
    copiedCode: 'Copied',
    mainDartFile: 'main.dart',
    searchLessonsPlaceholder: 'Search lessons or sections...',
    searchResultsLabel: 'results',
    noLessonsFound: 'No lessons matched your search.',
    sectionProgressLabel: 'Section Progress',
    lessonNotFound: 'Lesson not found',
    goHome: 'Go Home',
    hideSidebar: 'Hide Sidebar',
    showSidebar: 'Show Sidebar',
    switchToDarkMode: 'Dark Mode',
    switchToLightMode: 'Light Mode',
    widgetTestingTitle: 'Widget Testing',
    widgetTestingRun: 'Run Test',
    widgetTestingReset: 'Reset',
    widgetTestingIdle: 'Ready',
    widgetTestingRunning: 'Running',
    widgetTestingPassed: 'Passed',
    widgetTestingHint: 'Run the test to watch Flutter pump the widget, tap the button, and verify the counter text.',
    widgetTestingCounter: 'Counter Value',
    widgetTestingIncrement: 'Increment',
    widgetTestingStepPump: 'Pump the widget into the test environment',
    widgetTestingStepTap: 'Tap the Increment button',
    widgetTestingStepExpect: 'Expect the counter to show 1',
    widgetTestingChallengeGoal: 'Fill in the Flutter test function used to define a widget test.',
    widgetTestingSuccess: 'Correct. testWidgets() is the entry point for Flutter widget tests.',
    unitTestingTitle: 'Unit Testing',
    unitTestingCorrect: 'Correct Implementation',
    unitTestingBuggy: 'Buggy Implementation',
    unitTestingCases: 'Test Cases',
    unitTestingPass: 'PASS',
    unitTestingFail: 'FAIL',
    unitTestingReceipt: 'Checkout Receipt',
    unitTestingSubtotal: 'Subtotal',
    unitTestingTax: 'Tax',
    unitTestingTotal: 'Total',
    unitTestingExpected: 'expected',
    unitTestingActual: 'actual',
    unitTestingHint: 'Pure Dart logic should be easy to test without rendering any UI at all.',
    unitTestingChallengeGoal: 'Fill in the assertion function used to compare actual and expected values in Dart tests.',
    unitTestingSuccess: 'Exactly. expect() is the core assertion used in unit tests.',
    inspectorTitle: 'Flutter Inspector',
    inspectorSelectWidget: 'Select Widget',
    inspectorShowPadding: 'Show Padding Overlay',
    inspectorShowConstraints: 'Show Constraints',
    inspectorTreePath: 'Widget Tree Path',
    inspectorSelectedWidget: 'Selected Widget',
    inspectorScaffoldNode: 'Scaffold',
    inspectorPaddingNode: 'Padding',
    inspectorCardNode: 'Card',
    inspectorTextNode: 'Text',
    inspectorHint: 'Select a widget and toggle the overlays to see how Inspector reveals structure and spacing.',
    inspectorPaddingValue: 'Padding',
    inspectorConstraintsValue: 'maxWidth: 252',
    inspectorSampleTitle: 'Profile Summary',
    inspectorSampleBody: 'Inspector helps you see which widget owns space, padding, and constraints.',
    inspectorChallengeGoal: 'Fill in the DevTools tool name that inspects the widget tree and layout details.',
    inspectorSuccess: 'Correct. Flutter Inspector is the visual debugging tool for widget trees and layout issues.',
  },
  ar: {
    startLearning: 'ابدأ التعلم',
    learnFlutterVisually: 'تعلّم فلاتر بصريًا.',
    heroDesc:
      'توقف عن حفظ النظرية. ابدأ بفهم Widgets وتخطيطات Flutter والحالة من خلال معاينات تفاعلية وكود Dart حقيقي.',
    launchCourse: 'ابدأ الدورة التفاعلية',
    widgetBasics: 'أساسيات الواجهات',
    widgetBasicsDesc:
      'أتقن Container وPadding وCenter والمزيد. شاهد كيف تؤثر الخصائص مباشرة على النتيجة المرئية.',
    flexLayouts: 'التخطيطات المرنة',
    flexLayoutsDesc:
      'افهم بصريًا Row وColumn وStack وخصائص المحاذاة. لا مزيد من التخمين في سلوك التخطيطات.',
    interactiveState: 'الحالة التفاعلية',
    interactiveStateDesc:
      'جرّب StatefulWidget وsetState. انقر على الهاتف الافتراضي لتغيير الحالة ومشاهدة الكود يتحدث.',
    curriculumStr: 'هيكل المنهج',
    lessonsCompleted: 'من',
    lessonsCompletedSuffix: 'دروس مكتملة',
    lessonComplete: 'اكتمل الدرس!',
    lessonCompleteDesc: 'أجبت عن جميع الأسئلة بشكل صحيح. عمل رائع!',
    continueToNext: 'الانتقال إلى الدرس التالي',
    checkUnderstanding: 'تحقق من فهمك',
    question: 'سؤال',
    ofText: 'من',
    correct: 'صحيح!',
    wrongTryAgain: 'ليست الإجابة الصحيحة. حاول مرة أخرى!',
    checkAnswer: 'تحقق من الإجابة',
    nextQuestion: 'السؤال التالي',
    finishLesson: 'إنهاء الدرس',
    tryAgain: 'حاول مرة أخرى',
    minRead: 'دقائق قراءة',
    whatYouWillLearn: 'ماذا ستتعلم',
    previousLesson: 'الدرس السابق',
    nextLesson: 'الدرس التالي',
    finishCourse: 'إنهاء الدورة',
    interactiveControls: 'عناصر التحكم التفاعلية',
    fontSize: 'حجم الخط',
    textColor: 'لون النص',
    withCenter: 'مع Widget Center',
    withoutCenter: 'بدون Center',
    toggleCenter: 'بدّل هذا الخيار لتغليف Widget النص داخل Center فعليًا.',
    selectButtonType: 'اختر نوع الزر',
    navigatorStack: 'مكدس التنقل',
    navigatorDesc:
      'يستخدم Flutter مكدسًا للتنقل. يقوم Navigator.push() بإضافة شاشة جديدة أعلى المكدس، بينما Navigator.pop() يزيل الشاشة الحالية ويكشف التي تحتها.',
    itemCount: 'عدد العناصر',
    listViewNotice:
      'لاحظ أنه إذا زاد عدد العناصر عن حدود الشاشة فلن تنكسر الواجهة، بل ستصبح قابلة للتمرير.',
    tryTyping: 'جرّب الكتابة بالأسفل',
    simulateKeyboard: 'محاكاة إدخال لوحة المفاتيح',
    typingSimulNotice:
      'عادة تكتب مباشرة على لوحة مفاتيح الهاتف. نحاكي ذلك هنا لتشاهد تغير الحالة مباشرة داخل المعاينة.',
    startTypingHere: 'ابدأ الكتابة هنا...',
    youTyped: 'لقد كتبت:',
    nothingYet: '(لا شيء بعد)',
    theoryLesson: 'هذا درس نظري.',
    comingSoon: 'المعاينة التفاعلية لهذا الدرس قادمة قريبًا!',
    scaffoldGridTitle: 'شبكة Scaffold',
    scaffoldGridDesc1:
      'بدون Scaffold سيبدو تطبيقك كشاشة سوداء غير منسقة (مثل الدرس السابق).',
    scaffoldGridDesc2:
      'يوفر Scaffold الخلفية البيضاء القياسية تلقائيًا ويمنحك أماكن مخصصة للـ appBar والـ body والـ floatingActionButton.',

    inheritedWidgetTitle: 'InheritedWidget',
    inheritedThemeColor: 'لون السمة',
    inheritedAnyDescendant: 'يمكن لأي Widget ابن قراءة القيمة المشتركة من الشجرة.',
    inheritedGrandParent: 'الجد',
    inheritedGrandParentDesc: 'يوفر لون السمة المشترك لكل ما يوجد تحته في الشجرة.',
    inheritedParent: 'الأب',
    inheritedParentDesc: 'يقرأ نفس القيمة بدون تمريرها عبر سلسلة من الـ constructors.',
    inheritedChild: 'الابن',
    inheritedChildDesc: 'يحصل على اللون مباشرة عبر ThemeColorScope.of(context).',
    inheritedChallengeGoal:
      'أكمل اسم الدالة المساعدة الثابتة المستخدمة لقراءة InheritedWidget من BuildContext الحالي.',
    inheritedSuccess:
      'صحيح. الأسلوب الشائع في Flutter هو توفير البيانات الموروثة من خلال دالة ثابتة اسمها of(context).',

    providerPreviewTitle: 'متجر Provider',
    providerCartItems: 'العناصر في السلة',
    addToCart: 'أضف إلى السلة',
    cartBadge: 'السلة',
    providerTapProductHint:
      'اضغط على أي منتج لمحاكاة context.read<CartModel>().addItem() وتحديث الواجهة كاملة.',
    providerCartModelTitle: 'حالة CartModel',
    providerListenersTitle: 'المستمعون',
    providerProductOne: 'كوب Flutter',
    providerProductTwo: 'ملصقات Widget',
    providerProductThree: 'دفتر Dart',
    providerChallengeGoal:
      'أكمل اسم الدالة في ChangeNotifier التي تخبر Consumer وwatch() بإعادة البناء.',
    providerSuccess:
      'صحيح. notifyListeners() هي ما يدفع تغييرات حالة Provider إلى كل Widgets المستمعة.',

    valueNotifierTitle: 'ValueNotifier',
    valueNotifierLikes: 'الإعجابات',
    likeButton: 'إعجاب',
    valueNotifierPostTitle: 'منشور يستحق الحفظ',
    valueNotifierPostBody: 'اضغط على القلب. عداد الإعجابات الصغير فقط هو الذي يحتاج إلى إعادة بناء.',
    valueNotifierHint:
      'يعد ValueNotifier مثاليًا عندما تتغير قيمة صغيرة واحدة ولا تحتاج إلى Model كامل.',
    valueNotifierRebuildNote:
      'العداد المميز هو الجزء الوحيد الذي يعاد بناؤه بصريًا عند تغير القيمة.',
    valueNotifierRebuildLabel: 'الـ Widget التي أعيد بناؤها',
    valueNotifierChallengeGoal:
      'أكمل اسم الـ Widget التي تستمع إلى ValueNotifier وتعيد بناء الجزء الذي تغلفه فقط.',
    valueNotifierSuccess:
      'صحيح. ValueListenableBuilder يبقي نطاق إعادة البناء صغيرًا وفعالًا.',

    nullSafetyTitle: 'الأمان ضد null',
    nullSafeTab: 'آمن',
    crashTab: 'سيتعطل',
    nullSafetyQuestionDesc:
      'النوع القابل لـ null يسمح بالقيمة null، لذلك يجب قراءته بأمان باستخدام ? أو أي عامل مشابه.',
    nullSafetyBangDesc:
      'العامل ! يجبر Dart على اعتبار القيمة غير null. إذا كانت null أثناء التشغيل فسيتعطل التطبيق.',
    nullSafetyFallbackDesc:
      'العامل ?? يضع قيمة بديلة بدلًا من رمي خطأ null.',
    nullSafetyLateDesc:
      'تعني late أنك تعد Dart بأن المتغير غير القابل لـ null سيتم تهيئته قبل قراءته.',
    nullSafetyChallengeGoal:
      'أكمل عامل القيمة البديلة الذي يوفر قيمة افتراضية عندما تكون الجهة اليسرى null.',
    nullSafetySuccess:
      'صحيح. العامل ?? هو عامل القيمة البديلة الآمن وغالبًا أفضل من استخدام !.',

    streamTicker: 'تغذية الأسعار الحية',
    streamEmitting: 'يقوم الـ Stream بإطلاق قيم جديدة...',
    streamPipeLabel: 'تدفق الأحداث',
    streamPriceLabel: 'السعر الحالي',
    streamChallengeGoal:
      'أكمل اسم الـ Widget في Flutter التي تعيد بناء الواجهة كلما أطلق الـ Stream حدثًا جديدًا.',
    streamSuccess:
      'صحيح. StreamBuilder يستمع إلى الـ Stream ويعيد بناء الواجهة عند كل حدث جديد.',

    mixinsTitle: 'Mixins',
    mixinDiagram: 'مخطط الـ Mixin',
    mixinsBirdSwim: 'الطائر يستخدم Swimmable',
    mixinsBirdFly: 'الطائر يستخدم Flyable',
    mixinsFishSwim: 'السمكة تستخدم Swimmable',
    mixinsFishFly: 'السمكة تستخدم Flyable',
    mixinsNone: 'بدون Mixins',
    mixinsChallengeGoal:
      'أكمل الكلمة المفتاحية في Dart التي تطبق Mixin على تعريف class.',
    mixinsSuccess:
      'صحيح. الكلمة with تسمح للـ class بإعادة استخدام السلوك من Mixin واحدة أو أكثر.',

    animatedContainerTitle: 'AnimatedContainer',
    animSize: 'الحجم',
    animColor: 'اللون',
    animCorners: 'الزوايا',
    animDuration: 'المدة',
    animSmall: 'صغير',
    animLarge: 'كبير',
    animSharp: 'حادة',
    animRound: 'دائرية',
    animatedContainerChallengeGoal:
      'أكمل اسم الخاصية المطلوبة في AnimatedContainer التي تتحكم في مدة الحركة الضمنية.',
    animatedContainerSuccess:
      'صحيح. الخاصية duration مطلوبة حتى يعرف Flutter كم تستغرق الحركة.',

    animationControllerTitle: 'AnimationController',
    animationControllerPanelTitle: 'المتحكم',
    animationControllerHint:
      'يمنحك AnimationController تحكمًا صريحًا في التشغيل والعكس والتكرار والإيقاف.',
    animPlay: 'تشغيل',
    animReverse: 'عكس',
    animRepeat: 'تكرار',
    animStop: 'إيقاف',
    animValue: 'قيمة الحركة',
    animationControllerChallengeGoal:
      'أكمل اسم دالة دورة الحياة التي يجب فيها تنظيف AnimationController.',
    animationControllerSuccess:
      'صحيح. dispose() تمنع تسرب الذاكرة عبر تحرير المتحكم عند إزالة الـ Widget.',

    heroAnimationTitle: 'Hero Animation',
    heroScreen1: 'قائمة المنتجات',
    heroScreen2: 'تفاصيل المنتج',
    heroViewDetail: 'عرض التفاصيل',
    heroGoBack: 'رجوع',
    heroProductTitle: 'مصباح متدرج',
    heroHint:
      'يقوم Flutter بمطابقة نفس Hero tag على شاشتين وتحريك الـ Widget المشتركة بينهما.',
    heroChallengeGoal:
      'أكمل اسم الخاصية في Hero التي يجب أن تتطابق على الشاشتين حتى تعمل الحركة.',
    heroSuccess:
      'صحيح. تطابق tag يربط بين الـ Widget المصدر والوجهة في انتقال واحد سلس.',

    jsonPreviewTitle: 'تحويل JSON',
    jsonEditorLabel: 'حرر JSON',
    jsonParsedLabel: 'كائن Dart الناتج',
    jsonInvalid: 'JSON غير صالح',
    jsonChallengeGoal:
      'أكمل اسم الـ factory constructor الشائع المستخدم لتحويل خرائط JSON إلى كائنات Dart.',
    jsonSuccess:
      'صحيح. fromJson هو الاسم الشائع المستخدم في أغلب مشاريع Flutter.',

    httpPreviewTitle: 'http.get()',
    httpRequestStage: 'الطلب',
    httpMakeRequest: 'نفذ الطلب',
    httpLoading: 'جارٍ الجلب...',
    httpResponse: 'تم استلام الاستجابة',
    httpStatusCode: 'رمز الحالة',
    httpRequestHint: 'اضغط الزر لجلب مستخدم حقيقي من jsonplaceholder.typicode.com.',
    httpChallengeGoal:
      'أكمل اسم الخاصية في Response التي تتحقق منها للتأكد من نجاح الطلب بالكود 200.',
    httpSuccess:
      'صحيح. statusCode تخبرك هل نجح الطلب قبل تحليل response.body.',
    httpError: 'فشل الطلب',

    prefsTitle: 'إعدادات التطبيق',
    prefsSave: 'حفظ الإعدادات',
    prefsRestart: 'محاكاة إعادة تشغيل التطبيق',
    prefsStorage: 'تخزين الجهاز المحاكى',
    prefsUsername: 'اسم المستخدم',
    prefsDarkMode: 'الوضع الداكن',
    prefsNotifications: 'الإشعارات',
    prefsUsernamePlaceholder: 'اكتب اسم مستخدم',
    prefsChallengeGoal:
      'أكمل اسم الدالة في SharedPreferences التي تعيد كائن التفضيلات قبل القراءة أو الحفظ.',
    prefsSuccess:
      'صحيح. SharedPreferences.getInstance() تمنحك المقبض غير المتزامن لتخزين القيم المحلية.',
    prefsRestarting: 'جارٍ إغلاق التطبيق وإعادة تحميل القيم المحفوظة...',
    codeChallengeTitle: 'تحدي برمجي',
    codeChallengeInstruction1:
      'اكتب الجزء الناقص فقط من كود Flutter أو Dart داخل الفراغ المظلل، ولا تعد كتابة السطر كاملًا.',
    codeChallengeInstruction2:
      'الكود المحيط بالفراغ صحيح بالفعل. المطلوب منك فقط إكمال الجزء الناقص حتى يصبح المثال صحيحًا ومكتملًا.',
    codeChallengeExpectedInput: 'نوع الإدخال المتوقع:',
    codeChallengeTip:
      'تلميح: اكتب الكلمة أو التعبير الناقص فقط، بنفس الشكل الذي يجب أن يظهر به داخل الكود.',
    codeChallengeDefaultSuccess:
      'أحسنت! اكتمل التحدي، ولاحظ كيف تتحدث المعاينة بعد الحل.',
    loadingPreview: 'جاري تحميل المعاينة التفاعلية...',
    copyCode: 'نسخ',
    copiedCode: 'تم النسخ',
    mainDartFile: 'main.dart',
    searchLessonsPlaceholder: 'ابحث عن درس أو قسم...',
    searchResultsLabel: 'نتيجة',
    noLessonsFound: 'لم يتم العثور على دروس تطابق البحث.',
    sectionProgressLabel: 'تقدم القسم',
    lessonNotFound: 'لم يتم العثور على الدرس',
    goHome: 'العودة للرئيسية',
    hideSidebar: 'إخفاء القائمة',
    showSidebar: 'إظهار القائمة',
    switchToDarkMode: 'الوضع الداكن',
    switchToLightMode: 'الوضع الفاتح',
    widgetTestingTitle: 'اختبار الواجهة',
    widgetTestingRun: 'تشغيل الاختبار',
    widgetTestingReset: 'إعادة تعيين',
    widgetTestingIdle: 'جاهز',
    widgetTestingRunning: 'قيد التشغيل',
    widgetTestingPassed: 'نجح',
    widgetTestingHint: 'شغّل الاختبار لترى Flutter يبني الواجهة ويضغط الزر ثم يتحقق من نص العداد.',
    widgetTestingCounter: 'قيمة العداد',
    widgetTestingIncrement: 'زيادة',
    widgetTestingStepPump: 'بناء الـ widget داخل بيئة الاختبار',
    widgetTestingStepTap: 'الضغط على زر الزيادة',
    widgetTestingStepExpect: 'التحقق من أن العداد أصبح 1',
    widgetTestingChallengeGoal: 'أكمل اسم دالة Flutter المستخدمة لتعريف اختبار واجهة widget.',
    widgetTestingSuccess: 'صحيح. testWidgets() هي نقطة البداية لاختبارات واجهات Flutter.',
    unitTestingTitle: 'اختبار الوحدات',
    unitTestingCorrect: 'تنفيذ صحيح',
    unitTestingBuggy: 'تنفيذ يحتوي خطأ',
    unitTestingCases: 'حالات الاختبار',
    unitTestingPass: 'ناجح',
    unitTestingFail: 'فاشل',
    unitTestingReceipt: 'ملخص الطلب',
    unitTestingSubtotal: 'المجموع الفرعي',
    unitTestingTax: 'الضريبة',
    unitTestingTotal: 'الإجمالي',
    unitTestingHint: 'يجب أن يكون منطق Dart الصافي سهل الاختبار دون الحاجة إلى بناء أي واجهة.',
    unitTestingChallengeGoal: 'أكمل اسم دالة التحقق المستخدمة لمقارنة القيمة الفعلية والمتوقعة في اختبارات Dart.',
    unitTestingSuccess: 'بالضبط. expect() هي دالة التحقق الأساسية في اختبارات الوحدات.',
    inspectorTitle: 'Flutter Inspector',
    inspectorSelectWidget: 'اختر الـ Widget',
    inspectorShowPadding: 'إظهار طبقة الـ Padding',
    inspectorShowConstraints: 'إظهار القيود',
    inspectorTreePath: 'مسار شجرة الـ Widgets',
    inspectorSelectedWidget: 'العنصر المحدد',
    inspectorPaddingNode: 'Padding',
    inspectorCardNode: 'Card',
    inspectorTextNode: 'Text',
    inspectorHint: 'اختر عنصرًا وبدّل الطبقات لتشاهد كيف يكشف Inspector البنية والمسافات.',
    inspectorPaddingValue: 'المسافة الداخلية',
    inspectorConstraintsValue: 'أقصى عرض: 252',
    inspectorSampleTitle: 'ملخص الملف الشخصي',
    inspectorSampleBody: 'يساعدك Inspector على معرفة أي widget تملك المساحة والـ padding والقيود.',
    inspectorChallengeGoal: 'أكمل اسم أداة DevTools التي تفحص شجرة الـ widgets وتفاصيل التخطيط.',
    inspectorSuccess: 'صحيح. Flutter Inspector هي الأداة البصرية لتصحيح شجرة العناصر ومشكلات التخطيط.',
    unitTestingExpected: 'المتوقع',
    unitTestingActual: 'الفعلي',
    inspectorScaffoldNode: 'Scaffold',
  },
};
