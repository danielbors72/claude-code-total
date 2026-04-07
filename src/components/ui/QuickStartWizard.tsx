import { useState, useEffect } from 'react';
import type { Lang, QuickStartStep } from '../../lib/types';
import { quickstartSteps } from '../../content/quickstart';

export default function QuickStartWizard() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('cct-lang') as Lang | null;
    if (stored === 'en' || stored === 'ro') setLang(stored);
    const onLangChange = (e: Event) => setLang((e as CustomEvent).detail);
    window.addEventListener('cct-lang-change', onLangChange);
    return () => window.removeEventListener('cct-lang-change', onLangChange);
  }, []);

  const t = (text: { en: string; ro: string }) => text[lang];

  const copyCode = (code: string, stepId: string) => {
    navigator.clipboard.writeText(code);
    setCopied(stepId);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold mb-4">
        🚀 {lang === 'en' ? 'Quick Start Guide' : 'Ghid de pornire rapidă'}
      </h2>
      <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
        {lang === 'en'
          ? 'Get up and running with Claude Code in 5 minutes. Click each step to expand.'
          : 'Începe cu Claude Code în 5 minute. Click pe fiecare pas pentru detalii.'}
      </p>

      {quickstartSteps.map((step, idx) => {
        const isActive = activeStep === step.id;
        return (
          <div
            key={step.id}
            className={`border rounded-lg transition-all duration-200 ${
              isActive
                ? 'border-primary-300 dark:border-primary-700 bg-primary-50/50 dark:bg-primary-900/10 shadow-sm'
                : 'border-surface-200 dark:border-surface-800 hover:border-surface-300 dark:hover:border-surface-700'
            }`}
          >
            <button
              onClick={() => setActiveStep(isActive ? null : step.id)}
              className="w-full flex items-center gap-4 px-4 py-3 text-left"
            >
              <span className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 ${
                isActive
                  ? 'bg-primary-500 text-white'
                  : 'bg-surface-200 dark:bg-surface-700 text-surface-600 dark:text-surface-300'
              }`}>
                {idx + 1}
              </span>
              <span className="font-medium text-sm flex-1">{t(step.title)}</span>
              <svg
                className={`w-4 h-4 shrink-0 text-surface-400 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isActive && (
              <div className="px-4 pb-4 pt-1 border-t border-surface-200 dark:border-surface-800">
                <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed ml-11">
                  {t(step.instruction)}
                </p>

                {step.code && (
                  <div className="mt-3 ml-11">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-surface-400">
                        {lang === 'en' ? 'Terminal' : 'Terminal'}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); copyCode(step.code!, step.id); }}
                        className="text-xs text-primary-500 hover:text-primary-600"
                      >
                        {copied === step.id ? '✓' : (lang === 'en' ? 'Copy' : 'Copiază')}
                      </button>
                    </div>
                    <pre className="p-3 rounded-md bg-surface-900 dark:bg-surface-950 text-xs font-mono text-green-400 overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                )}

                {step.expectedOutput && (
                  <div className="mt-2 ml-11">
                    <pre className="p-3 rounded-md bg-surface-100 dark:bg-surface-900 text-xs font-mono text-surface-500 dark:text-surface-400 overflow-x-auto">
                      <code>{step.expectedOutput}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
