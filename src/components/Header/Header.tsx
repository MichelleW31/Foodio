// BASE MODULES
import { useNavigate } from 'react-router-dom';

// CUSTOM MODULES
import Heart from '../icons/Heart/Heart';
import styles from './Header.module.scss';
import { Path } from '../../types';

const Header = () => {
  const navigate = useNavigate();

  const goToLikes = () => {
    navigate(Path.LIKES);
  };

  const backToHome = () => {
    navigate(Path.ROOT);
  };

  return (
    <section className={styles.HeaderContainer}>
      <Heart color="#467e8d" goToLikes={goToLikes} />
      <h2 className={styles.HeaderCopy} onClick={() => backToHome()}>
        Foodio
      </h2>
    </section>
  );
};

export default Header;
