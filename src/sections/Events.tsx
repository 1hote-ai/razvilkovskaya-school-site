import styles from './Events.module.scss';
import placeholderImg from '../assets/images/cover/building-placeholder.svg';

const EVENTS = [
  { id: 1, date: '[ДД.ММ.ГГГГ]', title: '[НАЗВАНИЕ СОБЫТИЯ]', desc: '[КОРОТКОЕ ОПИСАНИЕ МЕРОПРИЯТИЯ]', category: 'Праздник' },
  { id: 2, date: '[ДД.ММ.ГГГГ]', title: '[НАЗВАНИЕ СОБЫТИЯ]', desc: '[КОРОТКОЕ ОПИСАНИЕ МЕРОПРИЯТИЯ]', category: 'Лекция' },
  { id: 3, date: '[ДД.ММ.ГГГГ]', title: '[НАЗВАНИЕ СОБЫТИЯ]', desc: '[КОРОТКОЕ ОПИСАНИЕ МЕРОПРИЯТИЯ]', category: 'Спорт' },
];

export function Events() {
  return (
    <section id="events" className={styles.events} aria-label="События">
      <div className={styles.events__inner}>
        <div className={styles.events__header}>
          <h2 className={styles.events__title}>СОБЫТИЯ</h2>
          <p className={styles.events__subtitle}>Жизнь школы</p>
        </div>

        <div className={styles.events__list}>
          {EVENTS.map(event => (
            <div key={event.id} className={styles.event}>
              <div className={styles.event__image}>
                <img src={placeholderImg} alt="Событие" />
              </div>
              <div className={styles.event__content}>
                <div className={styles.event__meta}>
                  <span className={styles.event__category}>{event.category}</span>
                  <span className={styles.event__date}>{event.date}</span>
                </div>
                <h3 className={styles.event__title}>{event.title}</h3>
                <p className={styles.event__desc}>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
