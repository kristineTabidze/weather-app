import type { NextPage } from "next";
import HomePage from "../components/organisms/HomePage";
import Layout from "../components/templates/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      hasInformationalAlert={false}
      hasFooter={true}
      hasHeader={true}
      className="justify-start"
      metaData={{ title: "homepage" }}
    >
      <HomePage />
    </Layout>
  );
};

export default Home;
