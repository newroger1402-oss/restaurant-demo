import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import { BUSINESS_INFO, SEO_DEFAULTS } from '@/config/constants';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  pathname: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = BUSINESS_INFO.NAME,
  description = SEO_DEFAULTS.DESCRIPTION,
  image = SEO_DEFAULTS.IMAGE,
  pathname
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'es' ? 'es' : 'en';

  // Full page title with template
  const fullTitle = SEO_DEFAULTS.TITLE_TEMPLATE(title);

  // Full canonical URL
  const hashPath = pathname === '/' ? '' : pathname;
  const fullUrl = `${BUSINESS_INFO.URL}/#${hashPath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SEO_DEFAULTS.KEYWORDS} />
      <meta name="author" content={SEO_DEFAULTS.AUTHOR} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BUSINESS_INFO.NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEOHead;