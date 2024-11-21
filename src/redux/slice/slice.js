import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';
import extraReducers from './extraReducers';
const stationsSlice = createSlice({
  name: 'stations',
  initialState,
  reducers,
  extraReducers,
});

export const actions = stationsSlice.actions;
export default stationsSlice.reducer;
