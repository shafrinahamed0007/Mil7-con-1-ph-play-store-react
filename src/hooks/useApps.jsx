import { useEffect, useState } from "react";

const useApps = () => {
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
  return { apps, loading };
};

export default useApps;
