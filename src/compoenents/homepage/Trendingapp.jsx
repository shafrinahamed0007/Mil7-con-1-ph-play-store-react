// import { use } from "react";

import { useEffect } from "react";

// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const Trendingapp = () => {
  // const apps = use(appsPromise);
  // console.log(apps);

  // const data = useLoaderData();
  // console.log(data,"Data from trending apps section")

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(
        data,
        "Data fetching fron trending apps section in home page",
      );
    };
    fetchData();
  }, []);
  return (
    <div className="text-white">
      {/* Section Header */}
      <div className="mt-5 text-center">
        <h2 className="font-bold text-2xl ">Treding Apps</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          tempore.
        </p>
      </div>
    </div>
  );
};

export default Trendingapp;
