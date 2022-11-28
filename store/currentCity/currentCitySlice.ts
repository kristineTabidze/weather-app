import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CityState = {
  city: string;
  lat: number;
  lon: number;
};

const initialState: CityState = {
  city: 'New York',
  lat: 40.7128,
  lon: -74.006,
};

export const currentCitySlice = createSlice({
  name: 'changeCurrentCity',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityState>) => {
      state.city = action.payload.city;
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
  },
});
export const {
  changeCity
} = currentCitySlice.actions;

export const selectCurrentCity = (state: RootState) => state.currentCity;

export default currentCitySlice.reducer;