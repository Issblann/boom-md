import { configureStore } from '@reduxjs/toolkit';
import stationsSlice from '../redux/slice/slice';
export const store = configureStore({
  reducer: {
    stations: stationsSlice,
  },
});
