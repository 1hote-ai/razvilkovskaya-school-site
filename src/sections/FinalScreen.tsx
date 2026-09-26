import styles from './FinalScreen.module.scss';
const bgImage = '/images/IMG_0136.jpg';

export function FinalScreen() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.final} aria-label="Финал">
      <div className={styles.final__bg} aria-hidden="true">
        <img src={bgImage} alt="Школа" />
      </div>
      <div className={styles.final__content}>
        <span className={styles.final__subtitle}>
          МБОУ «РАЗВИЛКОВСКАЯ СОШ С УИОП»
        </span>
        <h2 className={styles.final__title}>
          Это наша школа.<br />
          Здесь начинается следующий этап.
        </h2>
        
        <button onClick={scrollToTop} className={styles.final__topBtn} aria-label="Наверх">
          &uarr; Наверх
        </button>
      </div>
    </section>
  );
}
