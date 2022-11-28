import React, { useState } from "react";
import { useAppSelector } from "../../../hooks";
import { selectCurrentDate } from "../../../store/currentDate/currentDateSlice";
import { CITIES } from "../../../utils/cities";
import Tab from "../../atoms/Tab";

const CitiesTab: React.FC = () => {
  const [currentCity, setCurrentCity] = useState(CITIES[0]); //TODO: do this from query
  const currentDate = useAppSelector(selectCurrentDate);

  return (
    <nav>
      <ul className="border-solid	border-primary border-b-1 flex">
        {CITIES.map((city) => (
          <li key={`${city.lat}-${city.lon}`}>
            <Tab
              title={city.city}
              onClick={() => setCurrentCity(city)}
              isActive={currentCity === city}
              href={`/city/${city.query}?date=${currentDate}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CitiesTab;
