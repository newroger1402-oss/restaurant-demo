import React from 'react';
import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';

interface MenuItem {
  id: string;
  category: 'starters' | 'mains' | 'desserts';
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const MENU_ITEMS: MenuItem[] = [
    {
      id: 'tlacoyos',
      category: 'starters',
    },
    {
      id: 'ceviche',
      category: 'starters',
    },
    {
      id: 'esquites',
      category: 'starters',
    },
    {
      id: 'quesadillas',
      category: 'starters',
    },
    {
      id: 'cochinita',
      category: 'mains',
    },
    {
      id: 'mole',
      category: 'mains',
    },
    {
      id: 'enchiladas',
      category: 'mains',
    },
    {
      id: 'pescado',
      category: 'mains',
    },
    {
      id: 'tres-leches',
      category: 'desserts',
    },
    {
      id: 'churros',
      category: 'desserts',
    },
    {
      id: 'mamey-sorbet',
      category: 'desserts',
    },
    {
      id: 'flan',
      category: 'desserts',
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
