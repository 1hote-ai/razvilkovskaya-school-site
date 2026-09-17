import styles from './About.module.scss';

export function About() {
  return (
    <section id="about" className={styles.about} aria-label="О школе">
      <div className={styles.about__inner}>
        <div className={styles.about__content}>
          <h2 className={styles.about__title}>О школе</h2>
          <p className={styles.about__text}>
            Школа — это не только здание, но и пространство для развития, 
            формирования ценностей и подготовки к будущему. Здесь закладывается 
            фундамент знаний, раскрываются таланты и создаются возможности для каждого.
            <br/><br/>
            <span className={styles.about__placeholderNote}>
              Подробная информация об истории, миссии и образовательном 
              процессе будет опубликована в ближайшее время.
            </span>
          </p>
        </div>
        
        <div className={styles.about__stats}>
          <div className={styles.stat}>
            <span className={styles.stat__value}>—</span>
            <span className={styles.stat__label}>учеников</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.stat__value}>—</span>
            <span className={styles.stat__label}>кабинетов</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.stat__value}>—</span>
            <span className={styles.stat__label}>лет истории</span>
          </div>
        </div>
      </div>
    </section>
  );
}
