import styles from './Achievements.module.scss';
import placeholderImg from '../assets/images/cover/building-placeholder.svg';

const ACHIEVEMENTS = [
  { id: 1, title: 'Победа в олимпиаде', category: 'Олимпиады', year: '—', desc: 'Информация о достижении будет добавлена.' },
  { id: 2, title: 'Спортивный кубок', category: 'Спорт', year: '—', desc: 'Информация о достижении будет добавлена.' },
  { id: 3, title: 'Творческий конкурс', category: 'Конкурсы', year: '—', desc: 'Информация о достижении будет добавлена.' },
  { id: 4, title: 'Научный проект', category: 'Проекты', year: '—', desc: 'Информация о достижении будет добавлена.' },
];

export function Achievements() {
  return (
    <section id="achievements" className={styles.achievements} aria-label="Достижения">
      <div className={styles.achievements__inner}>
        <div className={styles.achievements__header}>
          <h2 className={styles.achievements__title}>Достижения</h2>
          <p className={styles.achievements__subtitle}>Кубки, грамоты и награды школы</p>
        </div>

        <div className={styles.achievements__grid}>
          {ACHIEVEMENTS.map((item, index) => (
            <div key={item.id} className={`${styles.card} ${index === 0 ? styles['card--featured'] : ''}`}>
              <div className={styles.card__image}>
                <img src={placeholderImg} alt={item.category} />
              </div>
              <div className={styles.card__content}>
                <div className={styles.card__meta}>
                  <span className={styles.card__category}>{item.category}</span>
                  <span className={styles.card__year}>{item.year}</span>
                </div>
                <h3 className={styles.card__title}>{item.title}</h3>
                <p className={styles.card__desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
