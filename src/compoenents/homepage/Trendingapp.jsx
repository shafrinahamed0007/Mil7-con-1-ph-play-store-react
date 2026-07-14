// import { use } from "react";

import { useEffect, useState } from "react";

import AppCard from "../ui/AppCard";
import { Link } from "react-router";

// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const Trendingapp = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  // const apps = use(appsPromise);
  // console.log(apps);

  // const data = useLoaderData();
  // console.log(data,"Data from trending apps section")

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      // console.log(
      //   data,
      //   "Data fetching fron trending apps section in home page",
      // );

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  console.log(loading, "Data Loading");

  // console.log(apps, "Data fetching from trending apps using useStatehooks");
  return (
    <div className="text-white">
      {/* Section Header */}
      <div className="mt-5 text-center">
        <h2 className="font-bold text-2xl ">Treding Apps</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          tempore.
        </p>
        <h2 className="text-2xl font-bold">Total Apps: {apps.length}</h2>
      </div>
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-xl text-center"></span>
        </div>
      ) : (
        <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:container mx-auto ">
          {apps.slice(0, 9).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}

      <div className="flex justify-center">
        <Link to={'/apps'}>
        <button className="btn btn-primary">View All</button></Link>
      </div>
    </div>
  );
};

export default Trendingapp;
