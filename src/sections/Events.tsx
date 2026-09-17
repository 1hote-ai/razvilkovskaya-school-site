import styles from './Events.module.scss';
import placeholderImg from '../assets/images/cover/building-placeholder.svg';

const EVENTS = [
  { id: 1, date: 'Дата (в разработке)', title: 'Главное событие', desc: 'Здесь будет располагаться анонс или отчет о главном мероприятии школы.', category: 'Событие' },
  { id: 2, date: '—', title: 'Предстоящее мероприятие', desc: 'Краткое описание события будет добавлено позже.', category: 'Анонс' },
  { id: 3, date: '—', title: 'Школьная новость', desc: 'Информация находится в стадии подготовки.', category: 'Новость' },
];

export function Events() {
  return (
    <section id="events" className={styles.events} aria-label="События">
      <div className={styles.events__inner}>
        <div className={styles.events__header}>
          <h2 className={styles.events__title}>События</h2>
          <p className={styles.events__subtitle}>Жизнь школы и мероприятия</p>
        </div>

        <div className={styles.events__list}>
          {EVENTS.map((event, index) => (
            <div key={event.id} className={`${styles.event} ${index === 0 ? styles['event--featured'] : ''}`}>
              <div className={styles.event__image}>
                <img src={placeholderImg} alt={event.category} />
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
