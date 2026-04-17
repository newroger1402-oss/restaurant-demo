import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import { APP_SERVICES } from '../../config/constants';

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (serviceKey: string) => {
    navigate(`/contact?service=${serviceKey}`);
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section className="relative w-full bg-(--color-bg-light) py-20 md:py-32 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-(--color-primary)/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark) mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-(--color-text-muted) max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Lista de servicios alternados */}
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24">
          {APP_SERVICES.map((service, index) => {
            const isImageLeft = index % 2 === 0;
            return (
              <div
                key={service.key}
                id={service.key}
                className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16`}
              >
                {/* Imagen */}
                <div className="w-full md:w-5/12">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img
                      src={service.image}
                      alt={t(`services.${service.key}.title`)}
                      className="w-full h-60 sm:h-68 md:h-76 lg:h-88 object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-(--color-bg-dark)/20 to-transparent" />
                  </div>
                </div>

                {/* Info */}
                <div className="w-full md:w-5/12">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--color-bg-dark) mb-4">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-(--color-text-muted) text-base sm:text-lg leading-relaxed mb-6">
                    {t(`services.${service.key}.description`)}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => handleClick(service.key)}
                      className="inline-flex items-center gap-2 text-(--color-primary) font-semibold hover:text-(--color-primary-hover) transition-colors group/link cursor-pointer bg-transparent border-none p-0 text-base"
                    >
                      {t('services.cta') || 'Solicitar información'}
                      <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <Link
                      to="/gallery"
                      className="inline-flex items-center gap-2 text-(--color-text-muted) hover:text-(--color-bg-dark) transition-colors text-sm"
                    >
                      {t('services.more_info') || 'Ver más'}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};