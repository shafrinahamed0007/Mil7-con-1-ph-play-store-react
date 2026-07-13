const appsPromise = fetch("/data.json").then((res) => res.json());

const Trendingapp = async () => {
  const apps = await appsPromise;
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
