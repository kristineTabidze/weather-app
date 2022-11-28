import { Card, Col } from 'antd';
import moment from 'moment';
import React from 'react'
import { ICityCard } from './types';

const CityCard: React.FC<ICityCard> = ({city, date}) => {
    return (
      <Col span={8}>
        <Card title={city.city || city.name} bordered={false}>
          {date && (
            <div>
              <b>Day:</b> {moment(date).format("DD/MM/YYYY")}
            </div>
          )}
          <div>
            <b>Feels like:</b> {city.main.feels_like}
          </div>
          <div>
            <b>temp:</b> {city.main.temp}
          </div>
          <div>
            <b>wind:</b> {city.wind.deg} speed:{city.wind.speed}
          </div>
          <div>
            <b>Humidity:</b> {city.main.humidity}
          </div>
        </Card>
      </Col>
    );
}

export default CityCard;