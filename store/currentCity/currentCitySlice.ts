import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { ICityData } from '../../components/molecules/CityData/types';
import { RootState } from '../store';

export type CurrentCityInfoState = {
  currentCity: {info: ICityData; date: number}[];
};

const initialState: CurrentCityInfoState = 
  {
    currentCity: [],
  }

export const currentCityInfoSlice = createSlice({
  name: 'changeCurrentCity',
  initialState,
  reducers: {
    changeCityInfo: (state, action: PayloadAction<CurrentCityInfoState>) => {
      state.currentCity = action.payload.currentCity;
    },
  },
});
export const {
  changeCityInfo: changeCity
} = currentCityInfoSlice.actions;

export const selectCurrentCity = (state: RootState) => state.currentCity;

export default currentCityInfoSlice.reducer;