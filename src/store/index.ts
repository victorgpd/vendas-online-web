import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import categoriesReducer from './reducers/categoryReducer';
import globalReducer from './reducers/globalReducer';

export const store = configureStore({
  reducer: {
    globalReducer,
    productReducer,
    categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
