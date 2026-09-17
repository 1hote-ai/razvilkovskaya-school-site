import styles from './Cover.module.scss';
import coverImage from '../assets/images/cover/building-placeholder.svg';

export function Cover() {
  return (
    <section className={styles.cover} aria-label="Введение">
      <div className={styles.cover__bg} aria-hidden="true">
        <img src={coverImage} alt="Placeholder школы" />
      </div>

      <div className={styles.cover__content}>
        <span className={styles.cover__subtitle}>
          МБОУ «Развилковская СОШ с УИОП»
        </span>
        
        <h1 className={styles.cover__title}>
          Знания, которые открывают возможности
        </h1>
        
        <p className={styles.cover__description}>
          Современная образовательная среда, в которой учатся, развиваются и создают.
        </p>
        
        <a href="#about" className={styles.cover__scroll}>
          Прокрутить &darr;
        </a>
      </div>
    </section>
  );
}
