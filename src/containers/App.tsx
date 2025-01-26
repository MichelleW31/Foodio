// BASE MODULES
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// CUSTOM MODULES
import styles from './App.module.scss';
import { store, persistor } from '../store/store';
import './App.css';
import Header from '../components/Header/Header';
import { IRecipe } from '../types';
import RecipeStories from './RecipeStories/RecipeStories';
import AppRoutes from './Routes';

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[] | []>([]);

  // GET RECIPES
  const getRecipes = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_BASE_URL}/random?number=25&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        const recipes = response.data.recipes;

        const mappedRecipes = recipes.map((recipe: IRecipe) => {
          return {
            title: recipe.title,
            readyInMinutes: recipe.readyInMinutes,
            sourceUrl: recipe.sourceUrl,
            servings: recipe.servings,
            image: recipe.image,
            liked: false,
          };
        });

        setRecipes(mappedRecipes);
      })
      .catch((error) => {
        throw new Error(`Get recipes error, ${error}`);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <section className={styles.AppContainer}>
            <Header />
            <RecipeStories recipes={recipes} />
            <AppRoutes recipes={recipes} getRecipes={getRecipes} />
          </section>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
