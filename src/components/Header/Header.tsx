// BASE MODULES

// CUSTOM MODULES
import Heart from '../icons/Heart/Heart';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <section className={styles.HeaderContainer}>
      <Heart />
      <h2 className={styles.HeaderCopy}>Foodio</h2>
      {/* <i className={MyStyles.fa_paper_plane}></i> */}
    </section>
  );
};

export default Header;
