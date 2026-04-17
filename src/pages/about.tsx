import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead 
        title={t('about.title')} 
        description={t('about.story')} 
        pathname="/about" 
      />
      
      {/* Hero Section */}
      <section className="relative w-full bg-(--color-bg-dark) py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/src/assets/images/hero.jpg')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-text-light) mb-4 font-body">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-(--color-text-light)/80 max-w-2xl mx-auto font-body">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full bg-(--color-bg-light) py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-(--color-bg-dark) rounded-2xl p-8 text-(--color-text-light)">
                <p className="text-lg leading-relaxed font-body">
                  {t('about.story')}
                </p>
                <div className="mt-6 pt-6 border-t border-(--color-text-light)/20">
                  <p className="text-sm text-(--color-secondary) font-bold uppercase tracking-wider">
                    — Doña Elena
                  </p>
                  <p className="text-xs text-(--color-text-light)/60 mt-1">
                    {t('about.team.description')}
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="space-y-4">
                <div className="bg-(--color-background) rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-(--color-bg-dark) mb-2 font-body">
                    {t('about.team.title')}
                  </h3>
                  <p className="text-(--color-text-muted) font-body">
                    {t('about.team.description')}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-(--color-primary) rounded-xl p-4 text-(--color-text-light) text-center">
                    <p className="text-3xl font-bold">2019</p>
                    <p className="text-xs uppercase tracking-wider opacity-80">Fundado</p>
                  </div>
                  <div className="bg-(--color-accent) rounded-xl p-4 text-(--color-text-light) text-center">
                    <p className="text-3xl font-bold">+500</p>
                    <p className="text-xs uppercase tracking-wider opacity-80">Comensales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-(--color-background) py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-bg-dark) text-center mb-12 font-body">
            {t('about.values.title')}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-(--color-bg-light) rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-(--color-primary) rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-(--color-text-light)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-(--color-bg-dark) mb-2">{t('about.values.authenticity')}</h3>
              <p className="text-sm text-(--color-text-muted)">Recetas tradicionales de Puebla, ingredientes auténticos.</p>
            </div>

            <div className="bg-(--color-bg-light) rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-(--color-bg-dark) rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-(--color-text-light)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-(--color-bg-dark) mb-2">{t('about.values.family')}</h3>
              <p className="text-sm text-(--color-text-muted)">Cada platillo lleva el amor de la abuela Doña Elena.</p>
            </div>

            <div className="bg-(--color-bg-light) rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-(--color-accent) rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-(--color-text-light)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-(--color-bg-dark) mb-2">{t('about.values.quality')}</h3>
              <p className="text-sm text-(--color-text-muted)">Maíz nixtamalizado a mano, chiles de Oaxaca.</p>
            </div>

            <div className="bg-(--color-bg-light) rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-(--color-secondary) rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-(--color-text-light)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-(--color-bg-dark) mb-2">{t('about.values.community')}</h3>
              <p className="text-sm text-(--color-text-muted)">Punto de encuentro para la comunidad mexicana en Miami.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}