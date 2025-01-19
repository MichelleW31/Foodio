// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';
import Story from '../../components/Story/Story';
import styles from './RecipeStories.module.scss';

interface RecipeStoriesProps {
  recipes: IRecipe[];
}

const RecipeStories = ({ recipes }: RecipeStoriesProps) => {
  const storyView = recipes?.map((recipe) => {
    return <Story recipe={recipe} key={recipe.title} />;
  });

  return <section className={styles.TopicFeedContainer}>{storyView}</section>;
};

export default RecipeStories;
