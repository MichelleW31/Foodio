// BASE MODULES

// CUSTOM MODULES
import styles from './Story.module.scss';

interface StoryProps {
  imgUrl: string;
  title: string;
}

const Story = ({ imgUrl, title }: StoryProps) => {
  return (
    <section className={styles.StoryContainer}>
      <section
        className={styles.StoryImage}
        style={{
          backgroundImage: 'url(' + imgUrl + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      ></section>
      <p className={styles.StoryTitle}>{title}</p>
    </section>
  );
};

export default Story;
