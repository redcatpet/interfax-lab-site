import styles from '../../../styles/socialListFooter.module.scss';

const SocialList = ({ marginBottom }: { marginBottom?: number }) => (
    <ul className={styles.social__list} style={{ marginBottom }}>
        <li className={styles.social__list__item}>
            <a href="http://www.fa.ru/Pages/Home.aspx" className={styles.social__list__item__link}>
                <span className={styles.social__list__item__link__text}>ФинУниверситет</span>
                <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__fu}`}>
                    <img className={styles.social__list__item__link__img} src="/img/funiv.svg" alt="Финансовый Университет" />
                </span>
            </a>
        </li>
        <li className={styles.social__list__item}>
            <a href="https://vk.com/interfaxru" className={styles.social__list__item__link}>
                <span className={styles.social__list__item__link__text}>ВКонтакте</span>
                <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__vk}`}>
                    <img className={styles.social__list__item__link__img} src="/img/vk.svg" alt="ВКонтакте" />
                </span>
            </a>
        </li>
        <li className={styles.social__list__item}>
            <a href="https://t.me/interfaxonline" className={styles.social__list__item__link}>
                <span className={styles.social__list__item__link__text}>Telegram</span>
                <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__tg}`}>
                    <img className={styles.social__list__item__link__img} src="/img/Telegram.svg" alt="Telegram" />
                </span>
            </a>
        </li>
    </ul>
);

export default SocialList;