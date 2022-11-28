import {
    Action,
    configureStore, ThunkAction
} from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";
import currentCityReducer from './currentCity/currentCitySlice';
import currentDateReducer from './currentDate/currentDateSlice';


const store = () =>
  configureStore({
    reducer: {
      currentCity: currentCityReducer,
      currentDate: currentDateReducer,
    },
    devTools: true,
  });

type Store = ReturnType<typeof store>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;

export const wrapper = createWrapper(store);
