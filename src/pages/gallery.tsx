import React from 'react';
import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';

interface MenuItem {
  id: string;
  category: 'starters' | 'mains' | 'desserts';
  image: string;
  imageSm?: string;
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const MENU_ITEMS: MenuItem[] = [
    {
      id: 'tlacoyos',
      category: 'starters',
      image: '/assets/images/platos/tlacoyos.jpg',
      imageSm: '/assets/images/platos/tlacoyos-sm.jpg',
    },
    {
      id: 'ceviche',
      category: 'starters',
      image: '/assets/images/platos/ceviche.jpg',
      imageSm: '/assets/images/platos/ceviche-sm.jpg',
    },
    {
      id: 'esquites',
      category: 'starters',
      image: '/assets/images/platos/esquites.jpg',
      imageSm: '/assets/images/platos/esquites-sm.jpg',
    },
    {
      id: 'quesadillas',
      category: 'starters',
      image: '/assets/images/platos/quesadillas.jpg',
      imageSm: '/assets/images/platos/quesadillas-sm.jpg',
    },
    {
      id: 'cochinita',
      category: 'mains',
      image: '/assets/images/platos/cochinita.jpg',
      imageSm: '/assets/images/platos/cochinita-sm.jpg',
    },
    {
      id: 'mole',
      category: 'mains',
      image: '/assets/images/platos/mole.jpg',
      imageSm: '/assets/images/platos/mole-sm.jpg',
    },
    {
      id: 'enchiladas',
      category: 'mains',
      image: '/assets/images/platos/enchiladas.jpg',
      imageSm: '/assets/images/platos/enchiladas-sm.jpg',
    },
    {
      id: 'pescado',
      category: 'mains',
      image: '/assets/images/platos/pescado.jpg',
      imageSm: '/assets/images/platos/pescado-sm.jpg',
    },
    {
      id: 'tres-leches',
      category: 'desserts',
      image: '/assets/images/platos/tres-leches.jpg',
    },
    {
      id: 'churros',
      category: 'desserts',
      image: '/assets/images/platos/churros.jpg',
    },
    {
      id: 'mamey-sorbet',
      category: 'desserts',
      image: '/assets/images/platos/mamey-sorbet.jpg',
    },
    {
      id: 'flan',
      category: 'desserts',
      image: '/assets/images/platos/flan.jpg',
    },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<'starters' | 'mains' | 'desserts' | 'all'>('all');

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
          <div key={item.id} className="gallery-item">
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
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Gallery;
