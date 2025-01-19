// BASE MODULES
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

// CUSTOM MODULES
import recipesReducer from './reducers/recipesReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

// @ts-expect-error Needed
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
