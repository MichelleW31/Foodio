// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';
import Story from '../../components/Recipe/Story';
import styles from './RecipeStories.module.scss';

interface RecipeStoriesProps {
  recipes: IRecipe[];
}

const RecipeStories = ({ recipes }: RecipeStoriesProps) => {
  const storyView = recipes?.map((recipe) => {
    return <Story imgUrl={recipe.image} title={recipe.title} />;
  });

  return <section className={styles.TopicFeedContainer}>{storyView}</section>;
};

export default RecipeStories;
