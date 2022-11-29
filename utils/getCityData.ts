import axios from "axios";

export const getCityData = async (city: string) => {
  const cityData = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        process.env.API_KEY
      }&units=metric`
    )
    .then((data) => data.data);

  return {
    city,
    ...cityData,
  };
};
