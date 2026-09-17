import styles from './About.module.scss';

export function About() {
  return (
    <section id="about" className={styles.about} aria-label="О школе">
      <div className={styles.about__inner}>
        <h2 className={styles.about__title}>О школе</h2>
        <p className={styles.about__text}>
          Здесь будет располагаться подробная информация об истории, 
          миссии и образовательном подходе нашей школы.
        </p>
      </div>
    </section>
  );
}
