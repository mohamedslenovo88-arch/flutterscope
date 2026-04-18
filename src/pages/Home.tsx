import React, { useDeferredValue, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Lightbulb, MonitorSmartphone, Code2, ArrowRight, Play, CheckCircle2, Search, X, Info } from 'lucide-react';
import { getCourseData, getFirstLessonId } from '@/src/data/lessons';
import { motion } from 'motion/react';
import { useLanguage } from '@/src/i18n/LanguageContext';
import { LanguageSwitcher } from '@/src/i18n/LanguageSwitcher';
import { ThemeToggle } from '@/src/components/ThemeToggle';

const WELCOME_STORAGE_KEY = 'flutterscope_welcome_seen';

export function Home() {
  const { lang, t } = useLanguage();
  const courseData = getCourseData(lang);
  const firstLessonId = getFirstLessonId();
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showWelcomePanel, setShowWelcomePanel] = useState(false);
  const deferredSearchQuery = useDeferredValue(searchQuery.trim().toLowerCase());

  useEffect(() => {
    const stored = localStorage.getItem('flutterscope_completed');
    if (stored) {
      try {
        setCompletedLessons(JSON.parse(stored));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    document.title = lang === 'ar' ? 'FlutterScope | تعلّم فلاتر' : 'FlutterScope | Learn Flutter';
  }, [lang]);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem(WELCOME_STORAGE_KEY);
    if (!hasSeenWelcome) {
      setShowWelcomePanel(true);
    }
  }, []);

  const dismissWelcomePanel = () => {
    localStorage.setItem(WELCOME_STORAGE_KEY, 'true');
    setShowWelcomePanel(false);
  };

  const totalLessons = courseData.reduce((acc, section) => acc + section.lessons.length, 0);
  const progressPercent = Math.round((completedLessons.length / totalLessons) * 100);

  const filteredCourseData = courseData
    .map((section) => {
      if (!deferredSearchQuery) {
        return section;
      }

      const sectionMatches = `${section.title} ${section.description}`.toLowerCase().includes(deferredSearchQuery);
      const lessons = sectionMatches
        ? section.lessons
        : section.lessons.filter((lesson) =>
            `${lesson.title} ${lesson.description}`.toLowerCase().includes(deferredSearchQuery)
          );

      return lessons.length > 0 ? { ...section, lessons } : null;
    })
    .filter((section): section is typeof courseData[number] => section !== null);

  const getSectionProgress = (lessonIds: string[]) => {
    const completedCount = lessonIds.filter((lessonId) => completedLessons.includes(lessonId)).length;
    const totalCount = lessonIds.length;
    const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    return { completedCount, totalCount, percent };
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {showWelcomePanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white text-slate-900 shadow-2xl dark:bg-slate-900 dark:text-slate-100">
            <button
              type="button"
              onClick={dismissWelcomePanel}
              className={`absolute top-4 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-500 transition hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:text-white ${lang === 'ar' ? 'left-4' : 'right-4'}`}
              aria-label="Close welcome panel"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 px-8 py-8 text-white">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em]">FlutterScope</p>
              <h2 className="text-3xl font-black md:text-4xl">Welcome to FlutterScope</h2>
              <p className="mt-2 text-lg font-medium text-white/90">مرحبًا بك في FlutterScope</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
                Learn Flutter visually through interactive lessons, code challenges, and live previews.
                <br />
                تعلّم Flutter بصريًا من خلال الدروس التفاعلية، تحديات الكود، والمعاينات الحية.
              </p>
            </div>

            <div className="grid gap-6 px-8 py-8 md:grid-cols-2">
              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-950/60">
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-slate-100">English Guide</h3>
                <ul className="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  <li>1. Start from the first lesson and move section by section.</li>
                  <li>2. Switch between Arabic and English anytime from the top bar.</li>
                  <li>3. Open each interactive preview and try the code challenge yourself.</li>
                  <li>4. Use search to jump quickly to any lesson or topic.</li>
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-right dark:border-slate-700 dark:bg-slate-950/60" dir="rtl">
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-slate-100">دليل سريع بالعربية</h3>
                <ul className="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  <li>١. ابدأ من أول درس وامشِ بالتدرج قسمًا بعد قسم.</li>
                  <li>٢. يمكنك التبديل بين العربية والإنجليزية من الشريط العلوي في أي وقت.</li>
                  <li>٣. افتح المعاينات التفاعلية وجرّب تحديات الكود بنفسك.</li>
                  <li>٤. استخدم البحث للوصول السريع إلى أي درس أو موضوع.</li>
                </ul>
              </section>
            </div>

            <div className="flex flex-col gap-4 border-t border-slate-200 px-8 py-6 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Developed by Mohammed Taha</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">تم تطوير هذه التجربة بواسطة Mohammed Taha</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={dismissWelcomePanel}
                  className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Continue / متابعة
                </button>
                <Link
                  to={`/lesson/${firstLessonId}`}
                  onClick={dismissWelcomePanel}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
                >
                  Start Learning / ابدأ التعلّم
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-950/90 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-500 p-2">
            <MonitorSmartphone className="h-6 w-6 text-white" />
          </div>
          <h1 className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-xl font-bold text-transparent">
            FlutterScope
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setShowWelcomePanel(true)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Info className="h-4 w-4" />
            <span>{lang === 'ar' ? 'حول المشروع' : 'About'}</span>
          </button>
          <Link
            to={`/lesson/${firstLessonId}`}
            className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 font-medium text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700 sm:flex"
          >
            {t('startLearning')} {lang === 'en' ? <ArrowRight className="h-4 w-4" /> : null}
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-12 lg:py-20">
        <section className="mx-auto mb-20 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex flex-wrap justify-center gap-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl lg:text-6xl"
          >
            <span className="text-blue-600">FlutterScope</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-200 md:text-3xl"
          >
            {t('learnFlutterVisually')}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-10 text-lg text-slate-600 dark:text-slate-400 md:text-xl"
          >
            {t('heroDesc')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mb-8 text-sm font-medium uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500"
          >
            Developed by Mohammed Taha
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Link
              to={`/lesson/${firstLessonId}`}
              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/20 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              <Play className={`h-5 w-5 fill-current ${lang === 'ar' ? 'rotate-180' : ''}`} />
              {t('launchCourse')}
            </Link>
          </motion.div>
        </section>

        <section className="mb-20 grid gap-6 px-4 md:grid-cols-3 lg:gap-10">
          <FeatureCard icon={Layers} title={t('widgetBasics')} desc={t('widgetBasicsDesc')} color="bg-blue-100 text-blue-600" />
          <FeatureCard
            icon={MonitorSmartphone}
            title={t('flexLayouts')}
            desc={t('flexLayoutsDesc')}
            color="bg-purple-100 text-purple-600"
          />
          <FeatureCard
            icon={Code2}
            title={t('interactiveState')}
            desc={t('interactiveStateDesc')}
            color="bg-emerald-100 text-emerald-600"
          />
        </section>

        <section className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:p-12">
          <div className={`pointer-events-none absolute top-0 opacity-5 ${lang === 'ar' ? 'left-0 p-12' : 'right-0 p-12'}`}>
            <Layers className="h-64 w-64" />
          </div>

          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h3 className="flex items-center gap-3 text-2xl font-bold dark:text-slate-100">
              <Lightbulb className="h-6 w-6 text-amber-500" />
              {t('curriculumStr')}
            </h3>
            <div className={lang === 'ar' ? 'text-left' : 'text-right'}>
              <div className="mb-1 text-sm font-semibold text-gray-500 dark:text-slate-400">
                {completedLessons.length} {t('lessonsCompleted')} {totalLessons} {t('lessonsCompletedSuffix')}
              </div>
              <div className="flex h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800 sm:w-48" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <div className="h-full bg-green-500 transition-all duration-500" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-slate-500 ${lang === 'ar' ? 'right-4' : 'left-4'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={t('searchLessonsPlaceholder')}
                className={`w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:bg-slate-900 dark:focus:ring-blue-900/30 ${lang === 'ar' ? 'pr-11 pl-11 text-right' : 'pl-11 pr-11'}`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={`absolute top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-200 ${lang === 'ar' ? 'left-3' : 'right-3'}`}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-slate-400">
              {filteredCourseData.reduce((count, section) => count + section.lessons.length, 0)} {t('searchResultsLabel')}
            </div>
          </div>

          <div className="relative z-10 space-y-8">
            {filteredCourseData.length > 0 ? (
              filteredCourseData.map((section) => {
                const progress = getSectionProgress(section.lessons.map((lesson) => lesson.id));

                return (
                  <div
                    key={section.id}
                    className={`relative border-gray-100 pb-2 dark:border-slate-800 ${lang === 'ar' ? 'border-r-2 pr-6' : 'border-l-2 pl-6'}`}
                  >
                    <div
                      className={`absolute top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-blue-100 dark:border-slate-900 dark:bg-blue-500/20 ${lang === 'ar' ? '-right-[9px]' : '-left-[9px]'}`}
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="mb-1 text-lg font-bold text-gray-900 dark:text-slate-100">{section.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-slate-400">{section.description}</p>
                      </div>
                      <div className={`min-w-[180px] ${lang === 'ar' ? 'sm:text-left' : 'sm:text-right'}`}>
                        <div className="mb-2 text-xs font-semibold text-gray-500 dark:text-slate-400">
                          {t('sectionProgressLabel')}: {progress.completedCount}/{progress.totalCount}
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                          <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress.percent}%` }} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {section.lessons.map((lesson) => {
                        const isCompleted = completedLessons.includes(lesson.id);
                        return (
                          <Link
                            key={lesson.id}
                            to={`/lesson/${lesson.id}`}
                            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                              isCompleted
                                ? 'border-green-200 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-900/40 dark:bg-green-500/10 dark:text-green-300 dark:hover:bg-green-500/15'
                                : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-blue-900/50 dark:hover:bg-blue-500/10 dark:hover:text-blue-300'
                            }`}
                          >
                            {lesson.title}
                            {isCompleted && <CheckCircle2 className="h-3 w-3" />}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-gray-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400">
                {t('noLessonsFound')}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-slate-100">{title}</h3>
      <p className="leading-relaxed text-gray-500 dark:text-slate-400">{desc}</p>
    </div>
  );
}
