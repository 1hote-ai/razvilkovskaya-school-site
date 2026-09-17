import { useState, useEffect } from 'react'
import styles from './Header.module.scss'

const NAV_LINKS = [
  { href: '#about', label: 'О школе' },
  { href: '#space', label: 'Пространство' },
  { href: '#day', label: 'Один день' },
  { href: '#achievements', label: 'Достижения' },
  { href: '#events', label: 'События' },
  { href: '#gallery', label: 'Галерея' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles['header--scrolled'] : ''}`}>
      <div className={styles.header__inner}>
        <a href="#" className={styles.header__logo}>
          МБОУ «Развилковская СОШ<br />с УИОП»
        </a>

        <nav className={`${styles.header__nav} ${menuOpen ? styles['header__nav--open'] : ''}`} aria-label="Основная навигация">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className={styles.header__link} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        
        <button 
          className={styles.header__menuBtn} 
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.header__menuIcon} ${menuOpen ? styles['header__menuIcon--open'] : ''}`} />
        </button>
      </div>
    </header>
  )
}

export default Header
