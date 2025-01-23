// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';
import ExLink from '../icons/ExLink/ExLink';
import LikeShare from '../LikeShare/LikeShare';
import styles from './Recipe.module.scss';

interface RecipeProps {
  recipe: IRecipe;
}

const Recipe = ({ recipe }: RecipeProps) => {
  return (
    <section className={styles.RecipeContainer}>
      <section className={styles.InfoContainer}>
        <p className={styles.Title}>{recipe.title}</p>
        <p className={styles.ReadyInCopy}>
          <span className={styles.Label}>Cook Time:</span>{' '}
          {recipe.readyInMinutes} minutes
        </p>
        <p className={styles.ServingsCopy}>
          <span className={styles.Label}>Servings:</span> {recipe.servings}
        </p>
      </section>

      <section className={styles.ImageContainer}>
        <img className={styles.Image} src={recipe.image} />
      </section>

      <LikeShare recipe={recipe} />

      <section className={styles.UrlSection}>
        <ExLink />

        <a className={styles.UrlCopy} href={recipe.sourceUrl} target="_blank">
          Check out recipe at Foodista.com
        </a>
      </section>
    </section>
  );
};

export default Recipe;
