import DatePicker from "../../components/atoms/DatePicker";
import CitiesTab from "../../components/molecules/CitiesTab";
import CityData from "../../components/molecules/CityData";
import Layout from "../../components/templates/Layout";
import { getCityData } from "../../utils/getCityData";

const City = ({ cityData }: any) => {
  return (
    <Layout
      hasInformationalAlert={false}
      className="justify-start"
      metaData={{ title: "city" }}
    >
      <div>
        <p className="flex justify-center p-8">
          Choose desired city from the list below to see full details
        </p>
      </div>

      <div className="m-8 rounded-lg bg-gray-1">
        <CitiesTab />
        <div className="text-right p-5">
          <DatePicker />
        </div>
        <CityData {...cityData} />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { res } = ctx;
  res.setHeader("Cache-Control", `s-maxage=60, stale-while-revalidate`); 

  const cityData = await getCityData(ctx.query.city);
  return {
    props: {
      cityData,
    },
  };
};

export default City;
