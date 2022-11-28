import { Row } from "antd";
import React from "react";

import { useRouter } from "next/router";
import { useAppSelector } from "../../../hooks";
import { selectCurrentCity } from "../../../store/currentCity/currentCitySlice";
import CityCard from "../../atoms/CityCard";
import { ICityData } from "./types";

const CityData: React.FC<ICityData> = (props) => {
  const { currentCity } = useAppSelector(selectCurrentCity);
  const router = useRouter();
  return (
    <div className="p-5 bg-gray1">
      <Row gutter={16}>
        {currentCity.length &&
        currentCity[0].info.name?.toLocaleLowerCase() === router.query.city ? (
          currentCity.map((city, i) => (
            <CityCard city={city.info} key={i} date={city.date} />
          ))
        ) : (
          <CityCard city={props} />
        )}
      </Row>
    </div>
  );
};

export default CityData;
