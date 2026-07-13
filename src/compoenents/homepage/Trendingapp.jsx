const Trendingapp = () => {
  return (
    <div className="bg-purple-500 h-[40vh] flex  items-center justify-center">
      <div>
        <div>
          <h2 className="text-3xl font-bold text-center text-white">
            Trusted By Millions, Build For You
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[35px] text-white mt-5">
          <div className="text-center">
            <p>Total Downloads</p>
            <h2 className="text-semibold text-xl">23.M</h2>
            <p>21% More Than Last Month</p>
          </div>
          <div className="text-center">
            <p>Total Reviews</p>
            <h2 className="text-semibold text-xl">906K</h2>
            <p>46% More Than Last Month</p>
          </div>
          <div className="text-center">
            <p>Active Apps</p>
            <h2 className="text-semibold text-xl">132+</h2>
            <p>31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendingapp;
