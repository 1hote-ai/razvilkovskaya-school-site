import { useState } from 'react';
import styles from './Gallery.module.scss';


const CATEGORIES = ['Все', 'Кабинеты', 'Спорт', 'Столовая', 'Территория'];
const IMAGES = [
  { id: 1, category: 'Кабинеты', size: 'large', img: '/images/IMG_0120.jpg' },
  { id: 2, category: 'Спорт', size: 'small', img: '/images/IMG_0135.jpg' },
  { id: 3, category: 'Территория', size: 'small', img: '/images/IMG_0122.jpg' },
  { id: 4, category: 'Столовая', size: 'medium', img: '/images/IMG_0127.jpg' },
  { id: 5, category: 'Кабинеты', size: 'small', img: '/images/IMG_0121.jpg' },
  { id: 6, category: 'Территория', size: 'large', img: '/images/IMG_0124.jpg' },
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
              <img src={img.img} alt={`Галерея - ${img.category}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
