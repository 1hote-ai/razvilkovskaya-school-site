import { useState } from 'react';
import styles from './Gallery.module.scss';
import placeholderImg from '../assets/images/cover/building-placeholder.svg';

const CATEGORIES = ['Все', 'Кабинеты', 'Спорт', 'Столовая', 'Территория'];
const IMAGES = [
  { id: 1, category: 'Кабинеты', size: 'large' },
  { id: 2, category: 'Спорт', size: 'small' },
  { id: 3, category: 'Территория', size: 'small' },
  { id: 4, category: 'Столовая', size: 'medium' },
  { id: 5, category: 'Кабинеты', size: 'small' },
  { id: 6, category: 'Спорт', size: 'large' },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredImages = activeCategory === 'Все' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className={styles.gallery} aria-label="Галерея">
      <div className={styles.gallery__inner}>
        <div className={styles.gallery__header}>
          <h2 className={styles.gallery__title}>Галерея</h2>
          <p className={styles.gallery__subtitle}>Школа в деталях</p>
        </div>

        <div className={styles.gallery__filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.gallery__filter} ${activeCategory === cat ? styles['gallery__filter--active'] : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.gallery__grid}>
          {filteredImages.map(img => (
            <div key={img.id} className={`${styles.gallery__item} ${styles[`gallery__item--${img.size}`]}`}>
              <img src={placeholderImg} alt={`Галерея - ${img.category}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
