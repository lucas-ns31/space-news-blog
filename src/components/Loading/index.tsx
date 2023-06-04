import styles from './styles.module.scss';

export function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <img src="/images/fire.gif" className={styles.fire} alt="" />
        <img src="/images/rocket.svg" className={styles.rocket} alt="" />
      </div>
    </div>
  );
}
