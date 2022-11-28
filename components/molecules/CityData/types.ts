export interface ICityData {
  city?: string;
  name?: string;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[]
}
