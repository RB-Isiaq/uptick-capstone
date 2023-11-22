import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import jobReducer from './JobReducer';
import blogReducer from './BlogReducer';

const config = {
  key: 'uptick',
  storage,
  version: 1,
};

const reducer = combineReducers({
  jobApplication: jobReducer,
  blog: blogReducer,
});

const presisted = persistReducer(config, reducer);

const store = configureStore({
  reducer: presisted,
});
const persistor = persistStore(store);

export { store, persistor };
