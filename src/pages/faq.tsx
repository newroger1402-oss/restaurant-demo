import { Layout } from '@/components/layout';
import { FAQSection } from '@/components/sections';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';
import { BUSINESS_INFO } from '@/config/constants';

export default function FAQPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead 
        title={`${t('faq.title')} | ${BUSINESS_INFO.NAME}`} 
        description={t('faq.subtitle')} 
        pathname="/faq" 
      />
      <FAQSection />
    </Layout>
  );
};