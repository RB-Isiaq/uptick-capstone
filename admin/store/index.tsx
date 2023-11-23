import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import jobReducer from './JobReducer';
import blogReducer from './BlogReducer';
import adminReducer from './AdminReducer';

const config = {
  key: 'uptick',
  storage,
  version: 1,
};

const reducer = combineReducers({
  jobApplication: jobReducer,
  blogs: blogReducer,
  admin: adminReducer,
});

const presisted = persistReducer(config, reducer);

const store = configureStore({
  reducer: presisted,
});
const persistor = persistStore(store);

export { store, persistor };
