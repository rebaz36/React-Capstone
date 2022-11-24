import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getAssests = createAsyncThunk('crypto/GetAll', async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins/');
  const assetLists = await response.json();
  const { coins } = assetLists;
  return coins;
});
const initialState = [];
const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAssests.fulfilled, (state, action) => action.payload);
  },
});
const { actions, reducer } = cryptoSlice;
export { actions, getAssests };
export default reducer;
