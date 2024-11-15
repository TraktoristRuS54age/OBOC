import styles from './page.module.css';

export default function Page() 
{
  return (
    <div className={styles.container}>
      {/* Личная информация */}
      <section className={styles.section}>
        <h1 className={styles.name}>Шереметьев Павел Андреевич</h1>
        <p className={styles.jobTitle}>инженер-программист</p>
        <p className={styles.contactInfo}>Email: SheremetevPvl@yandex.ru</p>
      </section>

      {/* Навыки */}
      <section className={styles.section}>
        <h2>Навыки</h2>
        <ul className={styles.skillsList}>
          <li>JavaScript, TypeScript</li>
          <li>C++</li>
          <li>React, Next.js</li>
          <li>HTML, CSS</li>
          <li>Git, GitHub</li>
          <li>MySQL, Ne04j, GraphDB</li>
          <li>RDF, RDFS description</li>
        </ul>
      </section>

      {/* Опыт работы */}
      <section className={styles.section}>
        <h2>Опыт работы</h2>
        <div className={styles.job}>
          <h3>Разработчик базы знаний для внутри компании</h3>
          <p className={styles.company}>Moneta.ru</p>
          <p className={styles.dates}>Сентябрь 2024 - Настоящее время</p>
          <ul>
            <li><span className={styles.firstWord}>Стек:</span> Python, ChatGPT API, GraphDB, XWiki, RDFS description</li>
            <li><span className={styles.firstWord}>Задачи:</span> Разработка базы знаний на основе артефактов компании для внутреннего пользования и навигации, используя LLM</li>
          </ul>
        </div>
      </section>

      {/* Образование */}
      <section className={styles.section}>
        <h2>Образование</h2>
        <div className={styles.education}>
          <p>ПГТУ, г Йошкар-Ола</p>
          <p>3 курс бакалавриата. Сентябрь 2022 – Настоящее время</p>
          <p>ФИиВТ, Программная инженерия.</p>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Языки</h2>
        <div className={styles.education}>
          <p>Русский, Английский B1.</p>
        </div>
      </section>
    </div>
  );
}