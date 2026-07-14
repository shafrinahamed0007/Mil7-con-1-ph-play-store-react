const Stats = () => {
  return (
    <div className="bg-purple-500 lg:h-[40vh] flex  items-center justify-center">
      <div>
        <div>
          <h2 className="text-3xl font-bold text-center text-white">
            Trusted By Millions, Build For You
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[35px] text-white mt-5">
          <div className="mx-auto grid max-w-sm items-center text-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <p>Total Downloads</p>
            <h2 className="text-semibold text-xl">23.M</h2>
            <p>21% More Than Last Month</p>
          </div>
          <div className="mx-auto grid max-w-sm items-center text-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <p>Total Reviews</p>
            <h2 className="text-semibold text-xl">906K</h2>
            <p>46% More Than Last Month</p>
          </div>
          <div className="mx-auto grid max-w-sm items-center text-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <p>Active Apps</p>
            <h2 className="text-semibold text-xl">132+</h2>
            <p>31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
