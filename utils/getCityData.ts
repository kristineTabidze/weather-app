import axios from "axios";

export const getCityData = async (city: string) => {
  //   TODO: add description why I'm using for loop
  // const cityData = {
  //   main: {
  //     temp: 6.56,
  //     feels_like: 5.68,
  //     temp_min: 3.48,
  //     temp_max: 8.38,
  //     pressure: 1012,
  //   },
  //   name: "London",
  //   weather: [
  //     { description: "broken clouds", icon: "04n", id: 803, main: "Clouds" },
  //   ],
  //   wind: { speed: 1.54, deg: 290 },
  // };

  const cityData = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
            process.env.API_KEY
          }&date=${new Date().getTime()}&units=metric`
    )
    .then((data) => data.data);

  return {
    city,
    ...cityData,
  };
};
