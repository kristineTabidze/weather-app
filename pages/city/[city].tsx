import { useRouter } from "next/router";
import path from "path";
import DatePicker from "../../components/atoms/DatePicker";
import CitiesTab from "../../components/molecules/CitiesTab";
import { getAllCities } from "../../utils/getAllCities";
import { getCityData } from "../../utils/getCityData";

const City = ({ citiesData }: any) => {
  const router = useRouter();
  const { city } = router.query;
  console.log({ citiesData });

  return <div><CitiesTab /><DatePicker /></div>;
};

export const getServerSideProps = async (ctx: any) => {
  const citiesData = await getCityData(ctx.query.city, ctx.query.date);
  return {
    props: {
      citiesData,
    },
  };
};

export default City;
