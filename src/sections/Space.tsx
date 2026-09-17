import { useState } from 'react';
import styles from './Space.module.scss';
import roomPlaceholder from '../assets/images/cover/building-placeholder.svg';

const FLOORS = [
  { id: 1, label: '1 этаж', rooms: ['Вестибюль', 'Столовая', 'Спортзал'] },
  { id: 2, label: '2 этаж', rooms: ['Библиотека', 'Младшая школа', 'Актовый зал'] },
  { id: 3, label: '3 этаж', rooms: ['Лаборатории', 'Старшая школа', 'Кабинет информатики'] },
];

export function Space() {
  const [activeFloor, setActiveFloor] = useState(1);

  return (
    <section id="space" className={styles.space} aria-label="Пространство школы">
      <div className={styles.space__inner}>
        <div className={styles.space__header}>
          <h2 className={styles.space__title}>ПРОСТРАНСТВО ШКОЛЫ</h2>
          <p className={styles.space__subtitle}>Кабинеты и инфраструктура</p>
        </div>

        <div className={styles.space__interactive}>
          <div className={styles.space__controls}>
            {FLOORS.map(floor => (
              <button
                key={floor.id}
                className={`${styles.space__btn} ${activeFloor === floor.id ? styles['space__btn--active'] : ''}`}
                onClick={() => setActiveFloor(floor.id)}
              >
                {floor.label}
              </button>
            ))}
          </div>

          <div className={styles.space__content}>
            <div className={styles.space__mapPlaceholder}>
              <img src={roomPlaceholder} alt="Схема" />
            </div>
            <div className={styles.space__info}>
              <h3>{FLOORS.find(f => f.id === activeFloor)?.label}</h3>
              <ul>
                {FLOORS.find(f => f.id === activeFloor)?.rooms.map(room => (
                  <li key={room}>{room}</li>
                ))}
              </ul>
              <p className={styles.space__note}>[СХЕМА И ДАННЫЕ БУДУТ ДОБАВЛЕНЫ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
