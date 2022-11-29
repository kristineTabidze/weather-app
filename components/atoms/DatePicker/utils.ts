import axios from "axios";
import dayjs from "dayjs";
import { ICityData } from "../../molecules/CityData/types";

const getWeather = async (city: string, date: Date) => {
  const appid = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
  // I'm fetching data from client side also because, there wasn't a free api, which would give historical data to fetch it with getserversideprops
  // To fetch data for five days from serverside, it would need time(approximately 5s), so dinammic routes were delayed
  // That's why I decided to get current weather data from server side and historical data from client side 
  const time = date.getTime();
  const data = axios
    .get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        appid,
        date: time,
        units: "metric",
      },
    })
    .then(({ data }) => ({ info: data as ICityData, date: time }));

  return data;
};

const NUMBER_OF_PREVIOUS_FORECASTS = 5;

export const getLastFiveDaysForecast = async (city: string, date: string) => {
  const lastFiveDaysDates = Array.from(
    { length: NUMBER_OF_PREVIOUS_FORECASTS },
    (_, i) => dayjs(date).subtract(i, "day").toDate()
  );

  const lastFiveDaysForecast = await Promise.all(
    lastFiveDaysDates.map((date) => getWeather(city, date))
  );

  return lastFiveDaysForecast;
};