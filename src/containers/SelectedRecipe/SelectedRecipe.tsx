// BASE MODULES
import { connect } from 'react-redux';

// CUSTOM MODULES
import { IRecipe, IState, Path } from '../../types';
import Recipe from '../../components/Recipe/Recipe';
import BackButton from '../../components/BackButton/BackButton';
import styles from './SelectedRecipe.module.scss';

interface SelectedRecipeProps {
  selectedRecipe: IRecipe;
}

const SelectedRecipe = ({ selectedRecipe }: SelectedRecipeProps) => {
  return (
    <section className={styles.SelectedRecipeContainer}>
      <BackButton copy="Back to Recipes" path={Path.ROOT} />

      <section className={styles.RecipeSectionContainer}>
        <Recipe recipe={selectedRecipe} />
      </section>
    </section>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    selectedRecipe: state.recipes.recipe,
  };
};

export default connect(mapStateToProps)(SelectedRecipe);
