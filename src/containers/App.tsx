// BASE MODULES
// import { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// CUSTOM MODULES
import styles from './App.module.scss';
import { store, persistor } from '../store/store';

import './App.css';
import Header from '../components/Header/Header';

function App() {
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
