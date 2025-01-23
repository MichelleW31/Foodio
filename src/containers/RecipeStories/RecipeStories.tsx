// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';
import shuffleRecipe from '../../utilities/shuffleRecipe';
import Story from '../../components/Story/Story';
import styles from './RecipeStories.module.scss';
import { useEffect, useState } from 'react';

interface RecipeStoriesProps {
  recipes: IRecipe[];
}

const RecipeStories = ({ recipes }: RecipeStoriesProps) => {
  const [recipeArray, setRecipeArray] = useState<IRecipe[]>(recipes);

  useEffect(() => {
    const shuffledArray = shuffleRecipe(recipes);

    setRecipeArray(shuffledArray);
  }, [recipes]);

  const storyView = recipeArray?.map((recipe) => {
    return <Story recipe={recipe} key={recipe.title} />;
  });

  return <section className={styles.TopicFeedContainer}>{storyView}</section>;
};

export default RecipeStories;
