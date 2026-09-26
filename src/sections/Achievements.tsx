import styles from './Achievements.module.scss';
const placeholderImg = '/images/IMG_0128.jpg';

const ACHIEVEMENTS = [
  { id: 1, title: 'Достижение школы (в разработке)', category: 'Достижения', year: '—', desc: 'Информация о наградах, кубках и дипломах будет опубликована позже.', img: '/images/IMG_0128.jpg' },
  { id: 2, title: 'Учебные награды', category: 'Олимпиады', year: '—', desc: 'Раздел находится в стадии наполнения материалами.', img: '/images/IMG_0130.jpg' },
  { id: 3, title: 'Спортивные успехи', category: 'Спорт', year: '—', desc: 'Раздел находится в стадии наполнения материалами.', img: '/images/IMG_0135.jpg' },
  { id: 4, title: 'Творчество', category: 'Конкурсы', year: '—', desc: 'Раздел находится в стадии наполнения материалами.', img: '/images/IMG_0129.jpg' },
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
