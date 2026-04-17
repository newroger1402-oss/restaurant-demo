import { Layout } from '@/components/layout';
import { HeroSection } from '@/components/sections';
import { ServicesSection } from '@/components/sections';
import { FAQSection } from '@/components/sections';
import { ContactSection } from '@/components/sections';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';
import { BUSINESS_INFO } from '@/config/constants';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead 
        title={BUSINESS_INFO.NAME} 
        description={t('home.hero.subtitle')} 
        pathname="/" 
      />
      <HeroSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection isHomePage={true} />
    </Layout>
  );
};