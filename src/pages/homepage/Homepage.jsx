import { useLoaderData } from "react-router";
import Banner from "../../compoenents/homepage/Banner";
import Stats from "../../compoenents/homepage/Stats";
import Trendingapp from "../../compoenents/homepage/Trendingapp";

const Homepage = () => {
  const data = useLoaderData();
  console.log(data, "Data From Home page");
  return (
    <>
      <Banner />
      <Stats />
      <Trendingapp />
    </>
  );
};

export default Homepage;
