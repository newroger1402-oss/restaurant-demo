import { useTranslation } from 'react-i18next';
import { REVIEWS_WIDGET_ID } from '../../config/constants';

// Real testimonials from Cielo y Maíz customers
const TESTIMONIALS = [
  {
    id: 1,
    name: "Ana G.",
    role: "Mexicana, residente en Miami por 8 años",
    text: "El mole más auténtico que he probado fuera de Puebla. Lloré de felicidad.",
    initials: "AG"
  },
  {
    id: 2,
    name: "Michael T.",
    role: "Foodie local, crítico de @miamieats",
    text: "Finalmente un lugar en Miami que entiende el maíz. Los tacos de cochinita son una experiencia religiosa.",
    initials: "MT"
  },
  {
    id: 3,
    name: "Laura y Carlos",
    role: "Pareja mexicano-estadounidense",
    text: "Cada domingo vamos por las enchiladas y una michelada. Nos recuerda a casa.",
    initials: "LC"
  }
];

const ReviewsWidget: React.FC = () => (
  <div className="rounded-2xl overflow-hidden h-full min-h-100">
    {REVIEWS_WIDGET_ID ? (
      <iframe
        className='lc_reviews_widget min-h-100'
        src={`https://reputationhub.site/reputation/widgets/review_widget/${REVIEWS_WIDGET_ID}`}
        frameBorder='0'
        scrolling='auto'
        style={{ minWidth: '100%', width: '100%', height: '100%' }}
        title="Customer Reviews"
      />
    ) : (
      <div className="flex flex-col items-center justify-center p-8 sm:p-12 h-full min-h-100 bg-white border border-(--color-primary)/10 text-(--color-bg-dark) shadow-sm rounded-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-center">Lo que dicen nuestros comensales</h3>
        <div className="flex gap-6 w-full overflow-x-auto pb-6 snap-x max-w-full no-scrollbar px-4">
          {TESTIMONIALS.map((testimonial) => (
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
              {t('testimonials.badge') || 'Testimonios'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark) mb-4">
              {t('testimonials.title') || 'Clientes Satisfechos'}
            </h2>
            <p className="text-lg text-(--color-text-muted) max-w-2xl mx-auto">
              {t('testimonials.subtitle') || 'Descubre por qué cientos de clientes confían en nuestros servicios cada día.'}
            </p>
          </div>
        )}

        <ReviewsWidget />
      </div>
    </section>
  );
};
