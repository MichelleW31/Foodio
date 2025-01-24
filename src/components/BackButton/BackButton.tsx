// BASE MODULES
import { useNavigate } from 'react-router-dom';

// CUSTOM MODULES
import styles from './BackButton.module.scss';

interface BackButtonProps {
  copy: string;
  //   path: string;
}

const BackButton = ({ copy }: BackButtonProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className={styles.BackButtonContainer} onClick={() => goBack()}>
      <p className={styles.BackButtonCopy}>{copy}</p>
    </section>
  );
};

export default BackButton;
