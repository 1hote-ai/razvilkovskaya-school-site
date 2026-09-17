import styles from './Header.module.scss'

/**
 * Header — фиксированная навигация сайта.
 * Навигационные ссылки будут добавлены по мере реализации секций.
 */
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <span className={styles.header__logo}>
          Развилковская СОШ
        </span>

        <nav className={styles.header__nav} aria-label="Основная навигация">
          {/* Навигация будет добавлена при реализации секций */}
        </nav>
      </div>
    </header>
  )
}

export default Header
