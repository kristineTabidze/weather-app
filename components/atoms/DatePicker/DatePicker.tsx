import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeCity } from "../../../store/currentCity/currentCitySlice";
import Modal from "../Modal";
import { getLastFiveDaysForecast } from "./utils";

const CustomDatePicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = useCallback(
    async (_: dayjs.Dayjs | null, dateStr: string) => {
      try {
        const lastFiveDaysForecast = await getLastFiveDaysForecast(
          router.query.city as string,
          dateStr
        );
        dispatch(changeCity({ currentCity: lastFiveDaysForecast }));
      } catch (error) {
        setErrorMsg("Couldn't fetch data for this date");
        setIsModalOpen(true);
      }
    },
    [router]
  );

  return (
    <>
      <DatePicker
        onChange={onChange}
        picker="date"
        defaultValue={dayjs(new Date())}
      />
      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        <div className="text-error">{errorMsg}</div>
      </Modal>
    </>
  );
};

export default CustomDatePicker;
