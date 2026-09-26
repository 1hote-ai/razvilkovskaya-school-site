import { useState, useEffect } from 'react';
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
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  const filteredImages = activeCategory === 'Все' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory);

  const selectedImageIndex = filteredImages.findIndex(img => img.id === selectedImageId);
  const selectedImage = selectedImageIndex !== -1 ? filteredImages[selectedImageIndex] : null;

  useEffect(() => {
    if (selectedImageId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedImageId]);

  const closeLightbox = () => setSelectedImageId(null);
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex < filteredImages.length - 1) {
      setSelectedImageId(filteredImages[selectedImageIndex + 1].id);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex > 0) {
      setSelectedImageId(filteredImages[selectedImageIndex - 1].id);
    }
  };

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
              onClick={() => {
                setActiveCategory(cat);
                setSelectedImageId(null);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.gallery__grid}>
          {filteredImages.map(img => (
            <div 
              key={img.id} 
              className={`${styles.gallery__item} ${styles[`gallery__item--${img.size}`]}`}
              onClick={() => setSelectedImageId(img.id)}
            >
              <img src={img.img} alt={`Галерея - ${img.category}`} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.lightbox__close} onClick={closeLightbox}>&times;</button>
          
          <button 
            className={`${styles.lightbox__nav} ${styles['lightbox__nav--prev']}`} 
            onClick={showPrev}
            disabled={selectedImageIndex === 0}
          >
            &#8592;
          </button>

          <img 
            src={selectedImage.img} 
            alt={`Галерея - ${selectedImage.category}`} 
            className={styles.lightbox__image}
            onClick={(e) => e.stopPropagation()} 
          />

          <button 
            className={`${styles.lightbox__nav} ${styles['lightbox__nav--next']}`} 
            onClick={showNext}
            disabled={selectedImageIndex === filteredImages.length - 1}
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
}
