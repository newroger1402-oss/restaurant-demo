import { Layout } from '@/components/layout';
import { ContactSection } from '@/components/sections';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';
import { BUSINESS_INFO } from '@/config/constants';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead 
        title={`${t('contact.title')} | ${BUSINESS_INFO.NAME}`} 
        description={t('contact.subtitle')} 
        pathname="/contact" 
      />
      <ContactSection isHomePage={false} />
    </Layout>
  );
};