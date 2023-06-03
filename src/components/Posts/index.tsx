import styles from './posts.module.scss';

interface PostsProps {
  url: string;
  title: string;
  explanation: string;
  date: string;
  media_type: string;
}

export function Posts({
  url,
  title,
  explanation,
  date,
  media_type,
}: PostsProps) {
  return (
    <>
      <section className={styles.post}>
        <div className={styles.contentPost}>
          <div className={styles.descriptionPost}>{title}</div>
          <div className={styles.explanationPost}>{explanation}</div>
          <small className={styles.datePost}>Photo Date: {date}</small>
        </div>
        <img src={url} alt={title} className={styles.imagePosts} />
      </section>
    </>
  );
}
