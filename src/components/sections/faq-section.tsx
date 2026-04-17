import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  id: string;
  title: string;
  answer: string;
}

const FaqItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-(--color-primary)/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-(--color-primary)/40">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 text-left bg-white hover:bg-(--color-bg-light) transition-colors cursor-pointer"
      >
        <span className="font-semibold text-(--color-bg-dark) text-base sm:text-lg">{question}</span>
        <span className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-(--color-primary) text-white rotate-180' : 'bg-(--color-primary)/10 text-(--color-primary)'}`}>
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-4 sm:p-6 pt-0 text-(--color-text-muted) leading-relaxed text-sm sm:text-base whitespace-pre-line">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>('q1');

  const faqs: FAQItem[] = [
    {
      id: 'q1',
      title: t('faq.items.0.question'),
      answer: t('faq.items.0.answer'),
    },
    {
      id: 'q2',
      title: t('faq.items.1.question'),
      answer: t('faq.items.1.answer'),
    },
    {
      id: 'q3',
      title: t('faq.items.2.question'),
      answer: t('faq.items.2.answer'),
    },
    {
      id: 'q4',
      title: t('faq.items.3.question'),
      answer: t('faq.items.3.answer'),
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark) mb-4">
            {t('faq.title')}
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.title}
              answer={faq.answer}
              isOpen={expandedId === faq.id}
              onToggle={() => toggleExpand(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};