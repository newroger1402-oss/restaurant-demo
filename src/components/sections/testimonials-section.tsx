import { useTranslation } from 'react-i18next';
import { REVIEWS_WIDGET_ID } from '../../config/constants';

const ReviewsWidget: React.FC<{ t: (key: string) => string }> = ({ t }) => {
  const testimonials = [
    {
      id: 1,
      name: t('testimonials.items.1.name'),
      role: t('testimonials.items.1.role'),
      text: t('testimonials.items.1.text'),
      initials: 'AG',
    },
    {
      id: 2,
      name: t('testimonials.items.2.name'),
      role: t('testimonials.items.2.role'),
      text: t('testimonials.items.2.text'),
      initials: 'MT',
    },
    {
      id: 3,
      name: t('testimonials.items.3.name'),
      role: t('testimonials.items.3.role'),
      text: t('testimonials.items.3.text'),
      initials: 'LC',
    },
  ];

  return (
  <div className="rounded-2xl overflow-hidden h-full min-h-100">
    {REVIEWS_WIDGET_ID ? (
      <iframe
        className='lc_reviews_widget min-h-100'
        src={`https://reputationhub.site/reputation/widgets/review_widget/${REVIEWS_WIDGET_ID}`}
        frameBorder='0'
        scrolling='auto'
        style={{ minWidth: '100%', width: '100%', height: '100%' }}
        title={t('testimonials.widget_title')}
      />
    ) : (
      <div className="flex flex-col items-center justify-center p-8 sm:p-12 h-full min-h-100 bg-white border border-(--color-primary)/10 text-(--color-bg-dark) shadow-sm rounded-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-center">{t('testimonials.heading')}</h3>
        <div className="flex gap-6 w-full overflow-x-auto pb-6 snap-x max-w-full no-scrollbar px-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="snap-center min-w-75 sm:min-w-85 flex-1 p-8 rounded-2xl bg-(--color-bg-light) border border-(--color-primary)/10 shrink-0 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex text-(--color-primary) text-lg mb-4">★★★★★</div>
                <p className="text-base italic text-(--color-text-muted) leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-(--color-bg-dark) flex items-center justify-center text-(--color-text-light) font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-(--color-bg-dark)">{testimonial.name}</p>
                  <p className="text-xs text-(--color-text-muted)">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);
};

export const TestimonialsSection: React.FC<{ showTitle?: boolean; fullWidth?: boolean }> = ({ showTitle = true, fullWidth = false }) => {
  const { t } = useTranslation();
  
  return (
    <section id="testimonials" className={`relative w-full ${fullWidth ? '' : 'bg-(--color-bg-light)'} overflow-hidden ${showTitle ? 'py-20 md:py-32' : 'py-0'}`}>
      {showTitle && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-(--color-primary)/30 to-transparent"></div>
      )}
      
      <div className={`mx-auto relative ${fullWidth ? 'px-0' : 'px-4 md:px-8 max-w-7xl'}`}>
        {showTitle && (
          <div className="text-center mb-16">
            <p className="text-(--color-primary) font-semibold mb-3 uppercase tracking-wider text-sm">
              {t('testimonials.badge')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark) mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-lg text-(--color-text-muted) max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
        )}

        <ReviewsWidget t={t} />
      </div>
    </section>
  );
};
