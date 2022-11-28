import { useRouter } from "next/router";
import DatePicker from "../../components/atoms/DatePicker";
import CitiesTab from "../../components/molecules/CitiesTab";
import CityData from "../../components/molecules/CityData";
import Layout from "../../components/templates/Layout";
import { getCityData } from "../../utils/getCityData";

const City = ({ cityData }: any) => {
  const router = useRouter();
  const { city } = router.query;
  return (
    <Layout
      hasInformationalAlert={false}
      className="justify-start"
      metaData={{ title: "city" }}
    >
      <CitiesTab />
      <DatePicker />
      <CityData {...cityData} />
    </Layout>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const cityData = await getCityData(ctx.query.city);
  return {
    props: {
      cityData,
    },
  };
};

export default City;
