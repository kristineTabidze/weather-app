import { Typography } from "antd";

const HomePage = () => {
  return (
    <div>
      <Typography.Title level={2}>The Coding Challenge</Typography.Title>

      <Typography.Paragraph>
        Please build Weather App:
      </Typography.Paragraph>

     

      {/* <Typography.Paragraph className="pt-16">
        Please save all the data into a JSON file downloaded once the
        registration is submitted.
      </Typography.Paragraph> */}
    </div>
  );
};

export default HomePage;
