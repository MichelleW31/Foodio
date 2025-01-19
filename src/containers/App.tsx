// BASE MODULES
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// CUSTOM MODULES
import styles from './App.module.scss';
import { store, persistor } from '../store/store';

import './App.css';
import Header from '../components/Header/Header';
import { IRecipe } from '../types';
import RecipeStories from './RecipeStories/RecipeStories';

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[] | []>([]);

  // GET RECIPES
  const getRecipes = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_BASE_URL}/random?number=50&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        console.log('response', response.data.recipes);
        setRecipes(response.data.recipes);
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
        <section className={styles.AppContainer}>
          <Header />
          <RecipeStories recipes={recipes} />
        </section>
      </PersistGate>
    </Provider>
  );
};

export default App;
