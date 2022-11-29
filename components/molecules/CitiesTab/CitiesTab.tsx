import { useRouter } from "next/router";
import React, { useState } from "react";
import { CITIES } from "../../../utils/cities";
import Tab from "../../atoms/Tab";

const CitiesTab: React.FC = () => {
  const router = useRouter();
  const [currentCity, setCurrentCity] = useState(
    CITIES.find((city) => city.query === router.query.city)
  );

  return (
    <nav className="bg-white-0">
      <ul className="border-solid	border-primary border-b-1 flex">
        {CITIES.map((city) => (
          <li key={`${city.lat}-${city.lon}`}>
            <Tab
              title={city.city}
              onClick={() => setCurrentCity(city)}
              isActive={currentCity === city}
              href={`/city/${city.query}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CitiesTab;
