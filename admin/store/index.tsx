import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import jobApplication from './JobReducer';
import blogReducer from './BlogReducer';

const config = {
  key: 'uptick',
  storage,
  version: 1,
};

const reducer = combineReducers({ jobApplication, blogReducer });

const presisted = persistReducer(config, reducer);

export const store = configureStore({
  reducer: presisted,
});

export default store;
