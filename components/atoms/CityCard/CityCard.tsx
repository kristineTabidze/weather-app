import { Card, Col } from "antd";
import moment from "moment";
import React from "react";
import { ICityCard } from "./types";

const getIconSrc = (code: string) =>
  `http://openweathermap.org/img/w/${code}.png`;

const CardTitleComponent = ({ temp, code }: { temp: number; code: string }) => {
  return (
    <div className="flex items-center">
      <h2>{temp} °C</h2>
      <img src={getIconSrc(code)} alt="icon" />
    </div>
  );
};

const CityCard: React.FC<ICityCard> = ({ city, date }) => {
  return (
    <Col span={8} className="p-2">
      <Card
        title={
          <CardTitleComponent
            temp={city.main.temp}
            code={city.weather[0].icon}
          />
        }
        bordered={false}
      >
        {date && (
          <div>
            <b>Day:</b> {moment(date).format("DD/MM/YYYY")}
          </div>
        )}
        <div>
          <b>Feels like:</b> {city.main.feels_like} °C
        </div>
        <div>
          <b>wind:</b> {city.wind.deg} speed:{city.wind.speed} km/h
        </div>
        <div>
          <b>Humidity:</b> {city.main.humidity} °C
        </div>
      </Card>
    </Col>
  );
};

export default CityCard;
