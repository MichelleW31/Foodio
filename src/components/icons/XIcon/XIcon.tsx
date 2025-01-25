// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES
import styles from './XIcon.module.scss';

interface XIconProps {
  color: string;
  closeModal: () => void;
}

const XIcon = ({ color, closeModal }: XIconProps) => {
  return (
    <section className={styles.XIconContainer}>
      <FontAwesomeIcon
        icon={faTimes as IconProp}
        color={color}
        size="xl"
        onClick={() => closeModal()}
      />
    </section>
  );
};

export default XIcon;
