import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead 
        title={t('about.title')} 
        description={t('about.story')} 
        pathname="/about" 
      />
      
      {/* Hero with background image */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1920&q=80" 
            alt={t('about.title')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-(--color-bg-dark)/90 via-(--color-bg-dark)/75 to-(--color-bg-dark)/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center py-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4 border border-white/20">
            {t('about.hero_badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-body">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-body">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Story with image */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80" 
                  alt={t('about.team.title')}
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-4 md:right-6 bg-white rounded-2xl p-5 shadow-lg">
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-(--color-primary)">6+</p>
                    <p className="text-xs text-(--color-text-muted)">{t('about.stats.years')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-(--color-secondary)">15k+</p>
                    <p className="text-xs text-(--color-text-muted)">{t('about.stats.tortillas')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story text */}
            <div className="lg:pl-8">
              <span className="text-(--color-primary) font-semibold text-sm uppercase tracking-wider">
                {t('about.founded')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-(--color-bg-dark) mt-2 mb-6 font-body">
                {t('about.team.title')}
              </h2>
              <div className="space-y-4 text-(--color-text-muted) leading-relaxed">
                <p>{t('about.story')}</p>
                <p>{t('about.story_extra')}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-(--color-border-light)">
                <p className="text-sm font-bold text-(--color-bg-dark)">{t('about.team.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Values */}
      <section className="w-full bg-(--color-bg-light) py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="w-10 h-10 mx-auto mb-2 bg-(--color-primary) rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-(--color-bg-dark) text-sm">{t('about.values.authenticity')}</h4>
              <p className="text-xs text-(--color-text-muted) mt-1">{t('about.values.authenticity_desc')}</p>
            </div>

            <div className="text-center p-4">
              <div className="w-10 h-10 mx-auto mb-2 bg-(--color-accent) rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-(--color-bg-dark) text-sm">{t('about.values.family')}</h4>
              <p className="text-xs text-(--color-text-muted) mt-1">{t('about.values.family_desc')}</p>
            </div>

            <div className="text-center p-4">
              <div className="w-10 h-10 mx-auto mb-2 bg-(--color-secondary) rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="font-bold text-(--color-bg-dark) text-sm">{t('about.values.quality')}</h4>
              <p className="text-xs text-(--color-text-muted) mt-1">{t('about.values.quality_desc')}</p>
            </div>

            <div className="text-center p-4">
              <div className="w-10 h-10 mx-auto mb-2 bg-(--color-bg-dark) rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-(--color-bg-dark) text-sm">{t('about.values.community')}</h4>
              <p className="text-xs text-(--color-text-muted) mt-1">{t('about.values.community_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-(--color-bg-dark) py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-body">
            {t('about.cta.title')}
          </h2>
          <p className="text-white/70 mb-8">
            {t('about.cta.subtitle')}
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-(--color-primary) text-white font-semibold rounded-xl hover:bg-(--color-primary-hover) transition-all"
          >
            {t('about.cta.button')}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </Layout>
  );
}