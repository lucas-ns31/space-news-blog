import ReactPlayer from 'react-player/youtube';

import styles from './styles.module.scss';

interface PostsProps {
  url: string;
  title: string;
  explanation: string;
  date: string;
  media_type: string;
  copyright: string;
}

export function Posts({
  url,
  title,
  explanation,
  date,
  media_type,
  copyright,
}: PostsProps) {
  return (
    <>
      <section className={styles.post}>
        <div className={styles.contentPost}>
          <div className={styles.descriptionPost}>{title}</div>
          <div className={styles.explanationPost}>{explanation}</div>
          <div className={styles.postFooter}>
            <small className={styles.datePost}>Photo Date: {date}</small>
            {copyright != null ? (
              <small className={styles.copyright}>
                Credit & Copyright: {copyright}
              </small>
            ) : undefined}
          </div>
        </div>
        {media_type === 'image' ? (
          <img src={url} className={styles.imagePosts} alt={title} />
        ) : (
          <ReactPlayer
            className={styles.imagePosts}
            url={url}
            controls={true}
          />
        )}
      </section>
    </>
  );
}
