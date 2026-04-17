import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es' || i18n.language.startsWith('es');

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/placeholder-hero.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-(--color-bg-dark)/90 via-(--color-bg-dark)/70 to-(--color-bg-dark)/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-(--color-primary) rounded-full animate-pulse"></span>
            <span className="text-(--color-text-light) text-xs font-semibold uppercase tracking-wider">
              {isSpanish ? 'Cocina Mexicana Auténtica' : 'Authentic Mexican Cuisine'}
            </span>
          </div>

          <p className="text-(--color-secondary) font-bold mb-3 tracking-[0.15em] uppercase text-sm font-body">
            {isSpanish ? 'Little Havana, Miami' : 'Little Havana, Miami'}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-(--color-text-light) mb-6 leading-tight font-body">
            {t('home.hero.title')}
          </h1>

          <p className="text-lg text-(--color-text-light)/90 mb-8 leading-relaxed max-w-xl font-body">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-xl shadow-lg shadow-(--color-primary)/25 hover:shadow-(--color-primary)/40 hover:-translate-y-0.5 active:scale-[0.98] bg-(--color-primary) text-(--color-text-light) hover:bg-(--color-primary-hover) px-8 py-4 text-base"
            >
              {t('home.hero.cta_primary')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-xl border-2 border-(--color-text-light)/30 text-(--color-text-light) hover:bg-(--color-text-light)/10 px-8 py-4 text-base"
            >
              {t('home.hero.cta_secondary')}
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3 text-(--color-text-light)/80">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-(--color-bg-dark) border-2 border-(--color-bg-dark) flex items-center justify-center text-[10px] text-(--color-text-light) font-bold">AG</div>
              <div className="w-8 h-8 rounded-full bg-(--color-primary) border-2 border-(--color-bg-dark) flex items-center justify-center text-[10px] text-(--color-text-light) font-bold">MT</div>
              <div className="w-8 h-8 rounded-full bg-(--color-accent) border-2 border-(--color-bg-dark) flex items-center justify-center text-[10px] text-(--color-text-light) font-bold">LC</div>
            </div>
            <p className="text-sm font-medium font-body">
              <span className="text-(--color-text-light) font-bold">+500</span> {isSpanish ? 'comensales felices' : 'happy diners'}
            </p>
          </div>
        </div>

        {/* Floating Cards - Restaurant Stats */}
        <div className="hidden lg:flex items-center gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-(--color-primary)/20 flex items-center justify-center">
                <span className="text-(--color-primary) font-bold text-xl">★</span>
              </div>
              <div>
                <p className="text-xs text-(--color-text-light)/60 uppercase">Google</p>
                <p className="text-(--color-text-light) font-bold text-lg">4.8/5</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-(--color-secondary)/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-(--color-secondary)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-(--color-text-light)/60 uppercase">{isSpanish ? 'Desde' : 'Since'}</p>
                <p className="text-(--color-text-light) font-bold text-lg">2019</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-(--color-accent)/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-(--color-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-(--color-text-light)/60 uppercase">{isSpanish ? 'Ubicación' : 'Location'}</p>
                <p className="text-(--color-text-light) font-bold text-lg">Little Havana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};