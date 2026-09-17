import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Подвал сайта">
      <div className={styles.footer__inner}>
        <div className={styles.footer__info}>
          <p>© {new Date().getFullYear()} МБОУ «Развилковская СОШ с УИОП»</p>
          <p>Сайт-презентация</p>
        </div>
      </div>
    </footer>
  );
}
