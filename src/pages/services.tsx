import { Layout } from '@/components/layout';
import { ServicesSection } from '@/components/sections';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';
import { BUSINESS_INFO } from '@/config/constants';

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead 
        title={`${t('services.title')} | ${BUSINESS_INFO.NAME}`} 
        description={t('services.subtitle')} 
        pathname="/services" 
      />
      <ServicesSection />
    </Layout>
  );
};