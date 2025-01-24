// BASE MODULES
import { connect } from 'react-redux';

// CUSTOM MODULES
import { IRecipe, IState } from '../../types';

interface SelectedRecipeProps {
  selectedRecipe: IRecipe;
}

const SelectedRecipe = ({ selectedRecipe }: SelectedRecipeProps) => {
  console.log('selected recipe', selectedRecipe);

  return <section>SelectedRecipe</section>;
};

const mapStateToProps = (state: IState) => {
  return {
    selectedRecipe: state.recipes.recipe,
  };
};

export default connect(mapStateToProps)(SelectedRecipe);
