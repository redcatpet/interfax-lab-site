import styles from '../../styles/skills.module.scss';
import MainTitle from '../MainTitle/MainTitle';
import SkillsItem from './SkillsItem';

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <MainTitle text='почему именно мы' />
            </div>
            <div className="sub-container">
                <ul className={styles.skills__list}>
                    <SkillsItem
                        title='Интерфакс'
                        text={<>
                            Разработчик самых известных в России сервисов в сегменте B2B, которые широко используются для управления рисками в банках, корпорациях, на российском финансовом рынке.
                            Команды проектов Интерфакса, в число которых входят <strong>RU Data, СПАРК, X-Compliance, СКАН, Маркер,</strong> применяют самые передовые информационные технологии, ведут прикладные исследования в современных областях знаний, ищут возможности извлечения новых знаний из Big Data.
                        </>}
                        iconClass={styles.skills__interfax}
                    />
                    <SkillsItem
                        title='Интерфакс-Лаб'
                        text='На базе Финансового университета при Правительстве Российской Федерации была создана в 2023 г. в рамках сотрудничества Группы Интерфакc и Финуниверситета в сфере образования, научно-технической и научно-методической деятельности.'
                        iconClass={styles.skills__man}
                    />
                    <SkillsItem
                        title='RU Data'
                        text='Пилот работы лаборатории проводится на Проекте RU Data группы Интерфакс.
                        Сервисы RU Data позволяют участникам финансового рынка вести анализ рыночных и кредитных рисков, ценовой статистики, автоматизировать процессы на основе эталонной базы данных по финансовым инструментам и эмитентам.'
                        iconClass={styles.skills__rudata}
                    />
                    <SkillsItem
                        title='Миссия лаборатории'
                        text='Cтать интеллектуальным центром по отработке перспективных идей и повышению практикориентированности учебного процесса.'
                        iconClass={styles.skills__lab}
                    />
                </ul>
            </div>
        </section>
    );
}

export default Skills;