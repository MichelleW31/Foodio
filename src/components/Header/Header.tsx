// BASE MODULES

// CUSTOM MODULES
import Heart from '../icons/Heart/Heart';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <section className={styles.HeaderContainer}>
      <Heart color="#467e8d" />
      <h2 className={styles.HeaderCopy}>Foodio</h2>
    </section>
  );
};

export default Header;
