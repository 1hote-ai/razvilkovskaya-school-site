import styles from './Day.module.scss';

const SCHEDULE = [
  { time: '—:—', event: 'Начало учебного дня', type: 'Утро' },
  { time: '—:—', event: 'Основной образовательный блок', type: 'Учеба' },
  { time: '—:—', event: 'Время для отдыха и питания', type: 'Перерыв' },
  { time: '—:—', event: 'Дополнительное образование', type: 'Развитие' },
  { time: '—:—', event: 'Завершение дня, секции', type: 'Спорт / Творчество' },
];

export function Day() {
  return (
    <section id="day" className={styles.day} aria-label="Один день в школе">
      <div className={styles.day__inner}>
        <div className={styles.day__header}>
          <h2 className={styles.day__title}>Один день в школе</h2>
          <p className={styles.day__subtitle}>Структура образовательного процесса (в разработке)</p>
        </div>

        <div className={styles.day__timeline}>
          {SCHEDULE.map((item, index) => (
            <div key={index} className={styles.day__item}>
              <div className={styles.day__time}>{item.time}</div>
              <div className={styles.day__content}>
                <h3 className={styles.day__event}>{item.event}</h3>
                <span className={styles.day__type}>{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
