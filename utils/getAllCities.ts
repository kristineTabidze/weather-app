import { CITIES } from './cities'

export function getAllCities() {
  return CITIES.map((city) => {
    return {
      params: {
        city: city.query
      },
    };
  });
}