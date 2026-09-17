import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Подвал сайта">
      <div className={styles.footer__inner}>
        <div className={styles.footer__grid}>
          <div className={styles.footer__col}>
            <h3 className={styles.footer__title}>МБОУ «Развилковская СОШ с УИОП»</h3>
            <p className={styles.footer__desc}>
              Знания, которые открывают возможности.
            </p>
          </div>
          
          <div className={styles.footer__col}>
            <h4 className={styles.footer__subtitle}>Контакты</h4>
            <p className={styles.footer__placeholder}>Телефон будет добавлен</p>
            <p className={styles.footer__placeholder}>Email будет добавлен</p>
          </div>
          
          <div className={styles.footer__col}>
            <h4 className={styles.footer__subtitle}>Адрес</h4>
            <p className={styles.footer__placeholder}>Полный адрес школы будет добавлен позже</p>
          </div>
        </div>
        
        <div className={styles.footer__bottom}>
          <p>© {new Date().getFullYear()} МБОУ «Развилковская СОШ с УИОП»</p>
          <div className={styles.footer__links}>
            <span className={styles.footer__link}>Официальные ресурсы появятся здесь</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
