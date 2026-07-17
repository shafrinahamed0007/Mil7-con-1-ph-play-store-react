import { useContext } from "react";
import { InstallAppsContext } from "../../context/InstalledAppsContext";

const Installation = () => {
  const { installApps, setInstallApps } = useContext(InstallAppsContext);
  console.log(installApps, "Context Data");
  return (
    <div className="container mx-auto my-10 p-5">
      {installApps.map((app, ind) => {
        return (
          <div key={ind} className="flex gap-4 items-center shadow p-4 rounded-md bg-slate-700 mb-5" >
            <img className="w-[150px] rounded-md" src={app?.image} alt={app.title || "Name Not Found"} />
            <h2>{app.title || "Title Not Found"}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Installation;
