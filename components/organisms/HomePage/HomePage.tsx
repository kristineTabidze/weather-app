import { Typography } from "antd";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center text-center grow">
      <Typography.Title level={2}>
        Weather App Coding Challenge
      </Typography.Title>
      <Typography.Paragraph>
        To Navigate through the app, please use the links in the header
      </Typography.Paragraph>
      <Typography.Paragraph>
        Choose City button and you will be redirect to the main page, where you can select the city, date and see the weather data
      </Typography.Paragraph>
    </div>
  );
};

export default HomePage;
