import styles from './Achievements.module.scss';
import placeholderImg from '../assets/images/cover/building-placeholder.svg';

const ACHIEVEMENTS = [
  { id: 1, title: '[НАЗВАНИЕ]', category: 'Олимпиады', year: '[ГОД]', desc: '[ОПИСАНИЕ ПОБЕДЫ]' },
  { id: 2, title: '[НАЗВАНИЕ]', category: 'Спорт', year: '[ГОД]', desc: '[ОПИСАНИЕ ПОБЕДЫ]' },
  { id: 3, title: '[НАЗВАНИЕ]', category: 'Конкурсы', year: '[ГОД]', desc: '[ОПИСАНИЕ ПОБЕДЫ]' },
  { id: 4, title: '[НАЗВАНИЕ]', category: 'Проекты', year: '[ГОД]', desc: '[ОПИСАНИЕ ПОБЕДЫ]' },
];

export function Achievements() {
  return (
    <section id="achievements" className={styles.achievements} aria-label="Достижения">
      <div className={styles.achievements__inner}>
        <div className={styles.achievements__header}>
          <h2 className={styles.achievements__title}>ДОСТИЖЕНИЯ</h2>
          <p className={styles.achievements__subtitle}>Кубки, грамоты и награды</p>
        </div>

        <div className={styles.achievements__grid}>
          {ACHIEVEMENTS.map(item => (
            <div key={item.id} className={styles.card}>
              <div className={styles.card__image}>
                <img src={placeholderImg} alt="Награда" />
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
