import { DatePicker } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  changeCity
} from "../../../store/currentCity/currentCitySlice";
import {
  changeDate,
  selectCurrentDate
} from "../../../store/currentDate/currentDateSlice";

function getPreviousDay(date = new Date(), i: number) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - i);

  return previous;
}

const CustomDatePicker: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const router = useRouter();

  const onChange = useCallback(
    async (_: any, dateStr: string) => {
      router.query.date = currentDate + "";
      router.push(router);
      dispatch(changeDate({ date: new Date(dateStr).getTime() }));
      const cityData = [];
      for (let i = 0; i < 5; i++) {
        const date = getPreviousDay(new Date(dateStr), i);
        const time = date.getTime();
        const curCity = await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${
              router.query.city
            }&appid=${"145ede488f953e51d872e1320abb42f5"}&date=${time}&units=metric`
          )
          .then((data) => {
            return { info: data.data, date: time };
          });
        cityData.push(curCity);
      }
      dispatch(changeCity({ currentCity: cityData }));
    },
    [router, currentDate]
  );

  return (
    <DatePicker onChange={onChange} picker="date" value={dayjs(currentDate)} />
  );
};

export default CustomDatePicker;
