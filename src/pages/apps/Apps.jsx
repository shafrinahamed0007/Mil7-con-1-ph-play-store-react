import { useEffect, useState } from "react";
import AppCard from "../../compoenents/ui/AppCard";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/data.json").then((res) => res.json());

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);
  console.log(apps, loading);
  return (<div className="my-5 md:my-10" >
    {loading ? (<div className="flex justify-center">
          <span className="loading loading-spinner loading-xl text-center"></span>
        </div> ):(
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
                {
                    apps.map(app => <AppCard key={app.id} app={app} />)
                }

            </div>
        ) }
  </div>)
};

export default Apps;
