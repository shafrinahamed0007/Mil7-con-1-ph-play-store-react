import { useContext } from "react";
import { InstallAppsContext } from "../../context/InstalledAppsContext";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Installation = () => {
  const { installApps, setInstallApps } = useContext(InstallAppsContext);
  // console.log(installApps, "Context Data");
  const handleUninstall = (app) => {
    const resApps = installApps.filter((iApp) => iApp.id != app.id);
    setInstallApps(resApps);
    toast.warning(`${app.title} is uninstall`);
  };

  return (
    <div className="container mx-auto my-10 p-5">
      {installApps.length === 0 ? (
        <h1 className="font-bold text-green-500 text-4xl text-center my-5 ">No Installed Apps Found!</h1>
      ) : (
        installApps.map((app, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 justify-between shadow p-4 rounded-md bg-slate-700 mb-5"
            >
              <div className="flex gap-4 items-center ">
                <img
                  className="w-[150px] rounded-md"
                  src={app?.image}
                  alt={app.title || "Name Not Found"}
                />
                <h2>{app.title || "Title Not Found"}</h2>
              </div>
              <div className="flex items-center ">
                <button
                  onClick={() => handleUninstall(app)}
                  className="btn btn-ghost text-red-500"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Installation;
