import styles from './Achievements.module.scss';
const placeholderImg = '/images/IMG_0128.jpg';

const ACHIEVEMENTS = [
  { id: 1, title: 'Гордость нашей школы', category: 'Главные достижения', year: '2026', desc: 'Ежегодные победы на муниципальных и региональных этапах.', img: '/images/IMG_0128.jpg' },
  { id: 2, title: 'Учебные награды', category: 'Олимпиады', year: '2026', desc: 'Призовые места во Всероссийской олимпиаде школьников.', img: '/images/IMG_0130.jpg' },
  { id: 3, title: 'Спортивные успехи', category: 'Спорт', year: '2026', desc: 'Победы в районных спортивных соревнованиях и турнирах.', img: '/images/IMG_0128.jpg' },
  { id: 4, title: 'Творческие победы', category: 'Конкурсы', year: '2026', desc: 'Участие в региональных выставках и творческих смотрах.', img: '/images/IMG_0129.jpg' },
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
          {ACHIEVEMENTS.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.card__image}>
                <img src={item.img || placeholderImg} alt={item.category} />
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
