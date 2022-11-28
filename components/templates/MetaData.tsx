import Head from "next/head";
import { MetaDataProps } from "./types";

const MetaData = ({
  title = "Code Challenge",
  description = "Created for weather app code challenge",
  indexable = true,
}: MetaDataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="robots"
        content={indexable ? "index, follow" : "noindex,nofollow"}
      />
    </Head>
  );
};

export default MetaData;
