import styles from './styles.module.scss';

export function Background() {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.background}></div>
    </>
  );
}
