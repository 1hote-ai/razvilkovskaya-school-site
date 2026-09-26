import styles from './About.module.scss';
const placeholderImg = '/images/IMG_0131.jpg';

export function About() {
  return (
    <section id="about" className={styles.about} aria-label="О школе">
      <div className={styles.about__inner}>
        
        <div className={styles.about__visual}>
          <img 
            src={placeholderImg} 
            alt="Архитектура школы (в разработке)" 
            className={styles.about__image}
          />
        </div>

        <div className={styles.about__content}>
          <h2 className={styles.about__title}>О школе</h2>
          <p className={styles.about__text}>
            Школа — это не только здание, но и пространство для развития, 
            формирования ценностей и подготовки к будущему. Здесь закладывается 
            фундамент знаний, раскрываются таланты и создаются возможности для каждого.
          </p>
          <p className={styles.about__placeholderNote}>
            [Подробная информация об истории, миссии и образовательном 
            процессе будет опубликована в ближайшее время]
          </p>
          
          <div className={styles.about__stats}>
            <div className={styles.stat}>
              <span className={styles.stat__value}>1250</span>
              <span className={styles.stat__label}>учеников</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.stat__value}>~30</span>
              <span className={styles.stat__label}>кабинетов</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.stat__value}>71</span>
              <span className={styles.stat__label}>год истории</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
