// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES
import styles from './Heart.module.scss';

interface HeartProps {
  color: string;
  setUpLikes?: () => void;
  goToLikes?: () => void;
}

const Heart = ({ color, setUpLikes, goToLikes }: HeartProps) => {
  return (
    <section className={styles.HeartContainer}>
      <FontAwesomeIcon
        icon={faHeart as IconProp}
        color={color}
        size="lg"
        onClick={() => {
          if (setUpLikes) {
            setUpLikes();
          } else if (goToLikes) {
            goToLikes();
          }
        }}
      />
    </section>
  );
};

export default Heart;
