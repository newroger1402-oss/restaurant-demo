import React from 'react';
import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';

interface MenuItem {
  id: string;
  category: 'starters' | 'mains' | 'desserts';
  price: string;
  image: string;
  imageSm?: string;
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const imageBase = `${import.meta.env.BASE_URL}assets/images/platos`;

  const MENU_ITEMS: MenuItem[] = [
    {
      id: 'tlacoyos',
      category: 'starters',
      price: '$9.50',
      image: `${imageBase}/tlacoyos.jpg`,
      imageSm: `${imageBase}/tlacoyos-sm.jpg`,
    },
    {
      id: 'ceviche',
      category: 'starters',
      price: '$14.00',
      image: `${imageBase}/ceviche.jpg`,
      imageSm: `${imageBase}/ceviche-sm.jpg`,
    },
    {
      id: 'esquites',
      category: 'starters',
      price: '$7.50',
      image: `${imageBase}/esquites.jpg`,
      imageSm: `${imageBase}/esquites-sm.jpg`,
    },
    {
      id: 'quesadillas',
      category: 'starters',
      price: '$10.50',
      image: `${imageBase}/quesadillas.jpg`,
      imageSm: `${imageBase}/quesadillas-sm.jpg`,
    },
    {
      id: 'cochinita',
      category: 'mains',
      price: '$16.00',
      image: `${imageBase}/cochinita.jpg`,
      imageSm: `${imageBase}/cochinita-sm.jpg`,
    },
    {
      id: 'mole',
      category: 'mains',
      price: '$19.50',
      image: `${imageBase}/mole.jpg`,
      imageSm: `${imageBase}/mole-sm.jpg`,
    },
    {
      id: 'enchiladas',
      category: 'mains',
      price: '$15.00',
      image: `${imageBase}/enchiladas.jpg`,
      imageSm: `${imageBase}/enchiladas-sm.jpg`,
    },
    {
      id: 'pescado',
      category: 'mains',
      price: '$24.00',
      image: `${imageBase}/pescado.jpg`,
      imageSm: `${imageBase}/pescado-sm.jpg`,
    },
    {
      id: 'tres-leches',
      category: 'desserts',
      price: '$8.00',
      image: `${imageBase}/tres-leches.jpg`,
    },
    {
      id: 'churros',
      category: 'desserts',
      price: '$7.50',
      image: `${imageBase}/churros.jpg`,
    },
    {
      id: 'mamey-sorbet',
      category: 'desserts',
      price: '$6.00',
      image: `${imageBase}/mamey-sorbet.jpg`,
    },
    {
      id: 'flan',
      category: 'desserts',
      price: '$7.00',
      image: `${imageBase}/flan.jpg`,
    },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<'starters' | 'mains' | 'desserts' | 'all'>('all');
  const [lightboxItem, setLightboxItem] = React.useState<MenuItem | null>(null);

  React.useEffect(() => {
    if (!lightboxItem) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxItem(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [lightboxItem]);

  const filteredItems = selectedCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      <SEOHead title={t('common.gallery')} pathname="/gallery" />
      
      {/* Gallery Header */}
      <div className="gallery-header">
        <h1 className="gallery-title">{t('gallery.title')}</h1>
        <p className="gallery-subtitle">{t('gallery.subtitle')}</p>
      </div>

      {/* Category Filter */}
      <div className="gallery-filters">
        <button 
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          {t('gallery.filters.all')}
        </button>
        <button 
          className={`filter-btn ${selectedCategory === 'starters' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('starters')}
        >
          {t('gallery.filters.starters')}
        </button>
        <button 
          className={`filter-btn ${selectedCategory === 'mains' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('mains')}
        >
          {t('gallery.filters.mains')}
        </button>
        <button 
          className={`filter-btn ${selectedCategory === 'desserts' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('desserts')}
        >
          {t('gallery.filters.desserts')}
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="gallery">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            role="button"
            tabIndex={0}
            onClick={() => setLightboxItem(item)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setLightboxItem(item);
              }
            }}
          >
            <div className="gallery-item-image">
              <img
                src={item.image}
                srcSet={item.imageSm ? `${item.imageSm} 720w, ${item.image} 1280w` : undefined}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                alt={t(`gallery.items.${item.id}.name`)}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="gallery-item-content">
              <h3 className="gallery-item-title">{t(`gallery.items.${item.id}.name`)}</h3>
              <p className="gallery-item-description">{t(`gallery.items.${item.id}.description`)}</p>
              <div className="gallery-item-footer">
                <span className="gallery-item-price-badge">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxItem && (
        <div className="gallery-lightbox" onClick={() => setLightboxItem(null)}>
          <div className="gallery-lightbox-dialog" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setLightboxItem(null)}
              aria-label="Close"
            >
              x
            </button>
            <img
              src={lightboxItem.image}
              alt={t(`gallery.items.${lightboxItem.id}.name`)}
              className="gallery-lightbox-image"
            />
            <div className="gallery-lightbox-caption">
              <h3>{t(`gallery.items.${lightboxItem.id}.name`)}</h3>
              <p className="gallery-lightbox-price">{lightboxItem.price}</p>
              <p>{t(`gallery.items.${lightboxItem.id}.description`)}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
