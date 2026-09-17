import styles from './Day.module.scss';

const SCHEDULE = [
  { time: '08:30', event: 'Первый урок', type: 'Учеба' },
  { time: '10:20', event: 'Большая перемена', type: 'Отдых' },
  { time: '12:00', event: 'Обед', type: 'Питание' },
  { time: '14:00', event: 'Дополнительные занятия', type: 'Развитие' },
  { time: '16:00', event: 'Внеурочная деятельность', type: 'Творчество' },
];

export function Day() {
  return (
    <section id="day" className={styles.day} aria-label="Один день в школе">
      <div className={styles.day__inner}>
        <div className={styles.day__header}>
          <h2 className={styles.day__title}>ОДИН ДЕНЬ В ШКОЛЕ</h2>
          <p className={styles.day__subtitle}>Расписание и жизнь (демонстрационные данные)</p>
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
