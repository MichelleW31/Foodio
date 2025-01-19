// BASE MODULES
import { useEffect } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// CUSTOM MODULES
import styles from './App.module.scss';
import { store, persistor } from '../store/store';

import './App.css';
import Header from '../components/Header/Header';

function App() {
  const getRecipes = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_BASE_URL}/random?number=50&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        console.log('response', response.data.recipes);
      })
      .catch((error) => {
        console.log('error', error);
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
        </section>
      </PersistGate>
    </Provider>
  );
}

export default App;
