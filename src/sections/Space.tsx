import { useState } from 'react';
import styles from './Space.module.scss';
const roomPlaceholder = '/images/IMG_0119.jpg';

const ZONES = [
  { id: 'sport', label: 'Спортивный зал', desc: 'Просторный зал для уроков физкультуры и спортивных секций', img: '/images/IMG_0121.jpg' },
  { id: 'food', label: 'Столовая', desc: 'Светлое помещение для комфортного питания учеников', img: '/images/IMG_0135.jpg' },
  { id: 'library', label: 'Библиотека', desc: 'Пространство для чтения, учебы и подготовки к урокам', img: '/images/IMG_0119.jpg' },
  { id: 'classes', label: 'Учебные классы', desc: 'Современные кабинеты, оборудованные всем необходимым', img: '/images/IMG_0123.jpg' },
];

export function Space() {
  const [activeZoneId, setActiveZoneId] = useState('sport');
  const activeZone = ZONES.find(z => z.id === activeZoneId) || ZONES[0];

  return (
    <section id="space" className={styles.space} aria-label="Пространство школы">
      <div className={styles.space__inner}>
        <div className={styles.space__header}>
          <h2 className={styles.space__title}>Пространство школы</h2>
          <p className={styles.space__subtitle}>Архитектура и инфраструктура (в разработке)</p>
        </div>

        <div className={styles.space__interactive}>
          <div className={styles.space__controls}>
            {ZONES.map(zone => (
              <button
                key={zone.id}
                className={`${styles.space__btn} ${activeZoneId === zone.id ? styles['space__btn--active'] : ''}`}
                onClick={() => setActiveZoneId(zone.id)}
              >
                {zone.label}
              </button>
            ))}
          </div>

          <div className={styles.space__content}>
            <div className={styles.space__imageWrapper}>
              <img src={activeZone.img || roomPlaceholder} alt={activeZone.label} />
              <div className={styles.space__info}>
                <h3>{activeZone.label}</h3>
                <p>{activeZone.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
