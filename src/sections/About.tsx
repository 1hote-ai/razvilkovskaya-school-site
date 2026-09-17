import styles from './About.module.scss';

export function About() {
  return (
    <section id="about" className={styles.about} aria-label="О школе">
      <div className={styles.about__inner}>
        <div className={styles.about__content}>
          <h2 className={styles.about__title}>О школе</h2>
          <p className={styles.about__text}>
            [ДАННЫЕ БУДУТ ДОБАВЛЕНЫ] — короткое, но ёмкое описание школы, её миссии, истории и особенностей образовательного процесса.
          </p>
        </div>
        
        <div className={styles.about__stats}>
          <div className={styles.stat}>
            <span className={styles.stat__value}>[XXXX]</span>
            <span className={styles.stat__label}>учеников</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.stat__value}>[XX]</span>
            <span className={styles.stat__label}>кабинетов</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.stat__value}>[XX]</span>
            <span className={styles.stat__label}>лет истории</span>
          </div>
        </div>
      </div>
    </section>
  );
}
