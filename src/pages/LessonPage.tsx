import React, { useDeferredValue, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCourseData, getLessonById } from '@/src/data/lessons';
import { PreviewRegistry } from '@/src/components/previews/PreviewRegistry';
import { Quiz } from '@/src/components/Quiz';
import {
  MonitorSmartphone,
  Menu,
  ChevronRight,
  ChevronLeft,
  Home,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Info,
  Target,
  Search,
  X,
} from 'lucide-react';
import { useLanguage } from '@/src/i18n/LanguageContext';
import { LanguageSwitcher } from '@/src/i18n/LanguageSwitcher';
import { ThemeToggle } from '@/src/components/ThemeToggle';

export function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang, t } = useLanguage();
  const courseData = getCourseData(lang);
  const lessonData = id ? getLessonById(id, lang) : null;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopSidebarVisible, setDesktopSidebarVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    const stored = window.localStorage.getItem('flutterscope_sidebar_visible');
    return stored === null ? true : stored === 'true';
  });
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
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
    window.localStorage.setItem('flutterscope_sidebar_visible', String(desktopSidebarVisible));
  }, [desktopSidebarVisible]);

  useEffect(() => {
    if (!lessonData) {
      document.title = lang === 'ar' ? 'FlutterScope | الدرس غير موجود' : 'FlutterScope | Lesson Not Found';
      return;
    }

    document.title =
      lang === 'ar'
        ? `FlutterScope | ${lessonData.lesson.title}`
        : `FlutterScope | ${lessonData.lesson.title}`;
  }, [lang, lessonData]);

  const markCompleted = (lessonId: string) => {
    setCompletedLessons((previousLessons) => {
      if (previousLessons.includes(lessonId)) return previousLessons;
      const nextLessons = [...previousLessons, lessonId];
      localStorage.setItem('flutterscope_completed', JSON.stringify(nextLessons));
      return nextLessons;
    });
  };

  if (!lessonData) {
    return (
      <div className="p-20 text-center text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {t('lessonNotFound')}
        <Link to="/" className="mt-4 block text-blue-500 dark:text-blue-400">
          {t('goHome')}
        </Link>
      </div>
    );
  }

  const { lesson, section } = lessonData;

  const filteredCourseData = courseData
    .map((currentSection) => {
      if (!deferredSearchQuery) {
        return currentSection;
      }

      const sectionMatches = `${currentSection.title} ${currentSection.description}`.toLowerCase().includes(deferredSearchQuery);
      const lessons = sectionMatches
        ? currentSection.lessons
        : currentSection.lessons.filter((currentLesson) =>
            `${currentLesson.title} ${currentLesson.description}`.toLowerCase().includes(deferredSearchQuery)
          );

      return lessons.length > 0 ? { ...currentSection, lessons } : null;
    })
    .filter((currentSection): currentSection is typeof courseData[number] => currentSection !== null);

  const getSectionProgress = (lessonIds: string[]) => {
    const completedCount = lessonIds.filter((lessonId) => completedLessons.includes(lessonId)).length;
    const totalCount = lessonIds.length;
    const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    return { completedCount, totalCount, percent };
  };

  let prevLessonId: string | null = null;
  let nextLessonId: string | null = null;

  const flatLessons: { id: string }[] = [];
  courseData.forEach((currentSection) => {
    currentSection.lessons.forEach((currentLesson) => flatLessons.push(currentLesson));
  });

  const flatIndex = flatLessons.findIndex((currentLesson) => currentLesson.id === lesson.id);
  if (flatIndex > 0) prevLessonId = flatLessons[flatIndex - 1].id;
  if (flatIndex < flatLessons.length - 1) nextLessonId = flatLessons[flatIndex + 1].id;

  const currentSectionProgress = getSectionProgress(section.lessons.map((currentLesson) => currentLesson.id));

  const RTLChevronRight = lang === 'ar' ? ChevronLeft : ChevronRight;
  const RTLChevronLeft = lang === 'ar' ? ChevronRight : ChevronLeft;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {sidebarOpen && <div className="fixed inset-0 z-40 bg-black/20 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <aside
        className={`
          fixed top-0 bottom-0 z-50 flex w-72 shrink-0 flex-col bg-white transition-all duration-300 ease-in-out dark:bg-slate-900 dark:text-slate-100
          lg:relative
          ${lang === 'ar' ? 'right-0' : 'left-0'}
          ${sidebarOpen ? 'translate-x-0' : lang === 'ar' ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${
            desktopSidebarVisible
              ? `${lang === 'ar' ? 'border-l' : 'border-r'} lg:w-72 lg:min-w-72 lg:opacity-100 lg:pointer-events-auto`
              : `${lang === 'ar' ? 'lg:translate-x-full' : 'lg:-translate-x-full'} lg:w-0 lg:min-w-0 lg:border-0 lg:opacity-0 lg:pointer-events-none`
          }
          ${lang === 'ar' ? 'border-l' : 'border-r'} dark:border-slate-800
        `}
      >
        <div className="flex items-center justify-between border-b p-5 dark:border-slate-800">
          <Link to="/" className="group flex items-center gap-2">
            <div className="rounded-lg bg-blue-100 p-1.5 transition-colors group-hover:bg-blue-500">
              <MonitorSmartphone className="h-5 w-5 text-blue-600 transition-colors group-hover:text-white" />
            </div>
            <span className="whitespace-nowrap font-bold">FlutterScope</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded p-1 text-gray-500 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
          >
            {lang === 'ar' ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
          <div className="px-1">
            <div className="relative">
              <Search
                className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-slate-500 ${lang === 'ar' ? 'right-4' : 'left-4'}`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={t('searchLessonsPlaceholder')}
                className={`w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:bg-slate-900 dark:focus:ring-blue-900/30 ${lang === 'ar' ? 'pr-10 pl-10 text-right' : 'pl-10 pr-10'}`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={`absolute top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-200 ${lang === 'ar' ? 'left-2' : 'right-2'}`}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {filteredCourseData.length > 0 ? (
            filteredCourseData.map((currentSection) => {
              const sectionProgress = getSectionProgress(currentSection.lessons.map((currentLesson) => currentLesson.id));

              return (
                <div key={currentSection.id}>
                  <div className="mb-3 px-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500">
                      {currentSection.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-3 text-[11px] font-semibold text-gray-500 dark:text-slate-400">
                      <span>{t('sectionProgressLabel')}</span>
                      <span>
                        {sectionProgress.completedCount}/{sectionProgress.totalCount}
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                      <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${sectionProgress.percent}%` }} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    {currentSection.lessons.map((currentLesson) => {
                      const isActive = currentLesson.id === lesson.id;
                      const isCompleted = completedLessons.includes(currentLesson.id);
                      return (
                        <Link
                          key={currentLesson.id}
                          to={`/lesson/${currentLesson.id}`}
                          onClick={() => setSidebarOpen(false)}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                            isActive
                              ? 'bg-blue-50 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300'
                              : 'text-gray-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span className={`truncate ${lang === 'ar' ? 'pl-2' : 'pr-2'}`}>{currentLesson.title}</span>
                          {isCompleted && <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 text-center text-sm text-gray-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400">
              {t('noLessonsFound')}
            </div>
          )}
        </div>
      </aside>

      <main className="relative flex h-full flex-1 flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-3 dark:border-slate-800 dark:bg-slate-950 lg:px-6 xl:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden items-center gap-2 text-sm text-gray-500 dark:text-slate-400 sm:flex">
              <span className="font-medium">{section.title}</span>
              <RTLChevronRight className="h-4 w-4 opacity-50" />
              <span className="font-medium text-gray-900 dark:text-slate-100">{lesson.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden min-w-[180px] xl:block">
              <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-gray-500 dark:text-slate-400">
                <span>{t('sectionProgressLabel')}</span>
                <span>
                  {currentSectionProgress.completedCount}/{currentSectionProgress.totalCount}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${currentSectionProgress.percent}%` }} />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setDesktopSidebarVisible((current) => !current)}
              className="hidden items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 lg:flex"
            >
              {desktopSidebarVisible ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span>{desktopSidebarVisible ? t('hideSidebar') : t('showSidebar')}</span>
            </button>
            <ThemeToggle />
            <LanguageSwitcher />
            <div className="flex items-center gap-2">
              <button
                onClick={() => prevLessonId && navigate(`/lesson/${prevLessonId}`)}
                disabled={!prevLessonId}
                className="rounded-lg border p-2 text-gray-600 transition hover:bg-gray-50 disabled:bg-gray-50 disabled:opacity-30 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:disabled:bg-slate-900"
                title={t('previousLesson')}
              >
                <RTLChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => nextLessonId && navigate(`/lesson/${nextLessonId}`)}
                disabled={!nextLessonId}
                className="rounded-lg border p-2 text-gray-600 transition hover:bg-gray-50 disabled:bg-gray-50 disabled:opacity-30 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:disabled:bg-slate-900"
                title={t('nextLesson')}
              >
                <RTLChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-[1480px] space-y-8 px-4 py-6 lg:px-6 lg:py-8 xl:space-y-10 xl:px-8">
            <section className="max-w-4xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-slate-400">
                <Clock className="h-4 w-4" />
                <span>
                  ~{lesson.durationMinutes || Math.max(1, Math.ceil(lesson.description.split(' ').length / 200))} {t('minRead')}
                </span>
              </div>
              <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-100 md:text-4xl">
                {lesson.title}
              </h1>

              {lesson.objectives && lesson.objectives.length > 0 && (
                <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50/50 p-5 dark:border-blue-900/40 dark:bg-blue-500/10">
                  <h3 className="mb-3 flex items-center gap-2 font-bold text-blue-900 dark:text-blue-200">
                    <Target className="h-5 w-5 text-blue-500" />
                    {t('whatYouWillLearn')}
                  </h3>
                  <ul className="space-y-2">
                    {lesson.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-blue-800 dark:text-blue-200">
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-8 block">
                {lesson.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-slate-300">
                    {paragraph.split(/(\*\*.*?\*\*|`.*?`)/g).map((part, partIndex) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return (
                          <strong key={partIndex} className="font-bold text-gray-900 dark:text-slate-100">
                            {part.slice(2, -2)}
                          </strong>
                        );
                      }

                      if (part.startsWith('`') && part.endsWith('`')) {
                        return (
                          <code
                            key={partIndex}
                            className="mx-0.5 rounded-md border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-pink-600 dark:border-slate-700 dark:bg-slate-900 dark:text-pink-300"
                            dir="ltr"
                          >
                            {part.slice(1, -1)}
                          </code>
                        );
                      }

                      return part;
                    })}
                  </p>
                ))}
              </div>

              {lesson.callout && (
                <div
                  className={`mb-8 flex gap-3 border-amber-400 bg-amber-50 p-5 text-amber-900 dark:bg-amber-500/10 dark:text-amber-100 ${
                    lang === 'ar' ? 'rounded-l-xl border-r-4' : 'rounded-r-xl border-l-4'
                  }`}
                >
                  <Info className="mt-0.5 h-6 w-6 shrink-0 text-amber-500" />
                  <p className="text-sm font-medium leading-relaxed">{lesson.callout}</p>
                </div>
              )}
            </section>

            <section className="w-full">
              <PreviewRegistry lessonId={lesson.id} />
            </section>

            {lesson.quiz.length > 0 && (
              <section className="max-w-4xl border-t pt-10 dark:border-slate-800">
                <Quiz
                  questions={lesson.quiz}
                  onComplete={() => markCompleted(lesson.id)}
                  onNextLesson={() => {
                    if (nextLessonId) navigate(`/lesson/${nextLessonId}`);
                  }}
                  hasNextLesson={!!nextLessonId}
                />
              </section>
            )}

            <section className="flex max-w-4xl items-center justify-between pb-16 pt-10">
              {prevLessonId ? (
                <Link to={`/lesson/${prevLessonId}`} className="flex items-center gap-2 font-medium text-blue-600 hover:underline dark:text-blue-400">
                  <RTLChevronLeft className="h-4 w-4" /> {t('previousLesson')}
                </Link>
              ) : (
                <div />
              )}

              {nextLessonId ? (
                <button
                  onClick={() => {
                    markCompleted(lesson.id);
                    navigate(`/lesson/${nextLessonId}`);
                  }}
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-blue-700"
                >
                  {t('nextLesson')} <RTLChevronRight className="h-4 w-4 shrink-0" />
                </button>
              ) : (
                <Link
                  to="/"
                  onClick={() => markCompleted(lesson.id)}
                  className="flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
                >
                  <Home className="h-4 w-4" /> {t('finishCourse')}
                </Link>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
