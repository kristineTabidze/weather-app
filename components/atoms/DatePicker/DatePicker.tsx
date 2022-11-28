import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeDate, selectCurrentDate } from '../../../store/currentDate/currentDateSlice';


const CustomDatePicker: React.FC = ({}) => {
    const dispatch = useAppDispatch();
    const currentDate = useAppSelector(selectCurrentDate);
    const router = useRouter();
    
    const onChange = useCallback(
      (_, dateStr: string) => {
        router.query.date = currentDate;
        router.push(router);
        dispatch(changeDate({ date: new Date(dateStr).getTime() }));
      },
      [router, currentDate]
    );

    return (
      <DatePicker
        onChange={onChange}
        picker="date"
        value={dayjs(currentDate)}
      />
    );
}

export default CustomDatePicker