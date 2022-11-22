import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getDetail = createAsyncThunk('crypto/Detail', async (id) => {
  const response = await fetch(
    `https://api.coinstats.app/public/v1/coins/${id}`,
  );
  const detail = await response.json();
  const { coin } = detail;
  return coin;
});
const initialState = [];
const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetail.fulfilled, (state, action) => action.payload);
  },
});
const { actions, reducer } = detailSlice;
export { actions, getDetail };
export default reducer;
