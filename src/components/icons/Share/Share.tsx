// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES
import styles from './Share.module.scss';

interface ShareProps {
  color: string;
  shareRecipe?: () => void;
}

const Share = ({ color, shareRecipe }: ShareProps) => {
  return (
    <section className={styles.ShareContainer}>
      <FontAwesomeIcon
        icon={faShare as IconProp}
        color={color}
        size="lg"
        onClick={() => {
          if (shareRecipe) {
            shareRecipe();
          }
        }}
      />
    </section>
  );
};

export default Share;
