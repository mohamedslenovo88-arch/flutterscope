import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/src/i18n/LanguageContext';

interface InlineChallengeProps {
  goal: string;
  codePrefix: string;
  codeSuffix: string;
  answer: string;
  expectedAnswers: string[];
  onChange: (val: string) => void;
  successMessage?: string;
  placeholder?: string;
}

export function InlineChallenge({
  goal,
  codePrefix,
  codeSuffix,
  answer,
  expectedAnswers,
  onChange,
  successMessage,
  placeholder = '________',
}: InlineChallengeProps) {
  const { t } = useLanguage();
  const isCorrect = expectedAnswers.some(
    (candidate) => candidate.toLowerCase() === answer.toLowerCase().trim(),
  );

  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-bold text-indigo-900">{t('codeChallengeTitle')}</h3>
      <p className="mb-4 text-sm text-indigo-800">{goal}</p>

      <div className="mb-6 rounded-xl border border-indigo-100 bg-white/70 p-4 text-sm leading-relaxed text-slate-700">
        <p>{t('codeChallengeInstruction1')}</p>
        <p className="mt-2">{t('codeChallengeInstruction2')}</p>
        <p className="mt-2 text-indigo-900">
          {t('codeChallengeExpectedInput')} <strong>{placeholder}</strong>
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl bg-[#1e1e1e] p-5 font-mono text-[13px] leading-relaxed text-blue-300 shadow-inner md:text-sm">
        <div className="whitespace-pre">
          {codePrefix}
          <input
            type="text"
            value={answer}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            spellCheck={false}
            className={`inline-block min-w-[60px] max-w-[200px] border-b-2 bg-transparent px-1 py-0 outline-none transition-colors focus:border-blue-400 ${
              isCorrect
                ? 'border-green-500 text-green-300'
                : 'border-gray-500 text-yellow-300'
            }`}
            style={{ width: Math.max(placeholder.length, answer.length) * 8 + 16 + 'px' }}
          />
          {codeSuffix}
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        {t('codeChallengeTip')}
      </p>

      {isCorrect && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-100/50 p-4 text-green-900"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
          <span className="text-sm font-medium">
            {successMessage || t('codeChallengeDefaultSuccess')}
          </span>
        </motion.div>
      )}
    </div>
  );
}
