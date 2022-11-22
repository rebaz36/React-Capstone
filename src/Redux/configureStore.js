import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice';
import detailReducer from './detailSlice';

const store = configureStore({
  reducer: {
    cryptos: cryptoReducer,
    detail: detailReducer,
  },
});

export default store;
