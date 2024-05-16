/* eslint-disable @next/next/no-img-element */
import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';
import SocialList from './SocialList';
import styles from '../../styles/about.module.scss';
import { useMediaQuery } from '../../hooks/index';

const About = () => {
    const isMobile1080 = useMediaQuery(1080);

    return (
        <section className={styles.about } id='about'>
            <div className="container">
                <MainTitle text='О нас' />
            </div>
            <div className={`sub-container ${styles.about__sub_container}`}>
                <img className={styles.about__img} src="/img/about.png" alt="avatar" />
                <div className={styles.about__inner}>
                    <h3 className={styles.about__title}>
                        Интерфакс-Лаб
                        <span className={styles.about__title__border}>
                            <span className={styles.about__title__border__arrow}>
                                <ArrowSvg />
                            </span>
                            <span className={styles.about__title__border__line} />
                        </span>
                    </h3>
                    <div className={styles.about__text}>
                        <p>
                            Интерфакс-Лаб на базе Финансового университета при Правительстве Российской Федерации была создана в 2023 г. в рамках сотрудничества Группы Интерфакc и Финуниверситета в сфере образования, научно-технической и научно-методической деятельности.
                        </p>
                        <p>
                            Мы строим математические и финансовые модели по оценке рисков, анализируем данные c финансового рынка.
                        </p>
                    </div>
                    {!isMobile1080 && <SocialList />}
                </div>
            </div>
            <div className="sub-container">
                {isMobile1080 && <SocialList />}
            </div>
        </section>
    );
}

export default About;