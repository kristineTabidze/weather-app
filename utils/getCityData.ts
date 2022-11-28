import axios from "axios";

export const getCityData = async (city: string, date: number) => {
  let cityData = [];
//   TODO: add description why I'm using for loop
  for (let i = 0; i < 5; i++) {
    cityData.push(
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
            process.env.API_KEY
          }&date=${date - i}`
        )
        .then((data) => data.data)
    );
  }

  return {
    city,
    ...cityData,
  };
};
