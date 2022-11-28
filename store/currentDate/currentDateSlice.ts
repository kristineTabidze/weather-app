import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../store';

export type DateState = {
  date: number;
};

const initialState: DateState = {
  date: new Date().getTime(),
};

export const currentDateSlice = createSlice({
  name: 'changeCurrentDate',
  initialState,
  reducers: {
    changeDate: (state, action: PayloadAction<DateState>) => {
      state.date = action.payload.date;
    },
  },
});
export const {
  changeDate
} = currentDateSlice.actions;

export const selectCurrentDate = (state: RootState) => state.currentDate.date;

export default currentDateSlice.reducer;