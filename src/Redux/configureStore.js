import { configureStore } from '@reduxjs/toolkit';
// import cryptoReducer from './cryptoSlice';
// import detailReducer from './detailsSlice';

const store = configureStore({
  reducer: {
    cryptos: 'cryptoReducer',
    detail: 'detailReducer',
  },
});

export default store;
