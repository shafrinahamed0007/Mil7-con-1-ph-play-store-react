import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { useState } from "react";

const AppsDetails = () => {
  const { id } = useParams();
  console.log("Params ID: ", id);
  const { apps, loading } = useApps();
  console.log(apps, loading);

  const expectedApp = apps.find((app) => app.id == id);
  console.log(expectedApp, "Expected ID");

  const [installApps, setInstallApps] = useState([]);
  const handleInstallApp = () => {
    setInstallApps([...installApps, expectedApp]);
  };

  console.log("Install Apps: ", installApps)

  return loading ? (
    <div className="flex justify-center">
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  ) : (
    <div className="container mx-auto my-5">
      <div className="card bg-base-100 bg-slate-900 shadow-sm py-5">
        <figure>
          <img
            className="w-[110px] rounded-xl"
            src={expectedApp?.image}
            alt={expectedApp?.title || "Title Not Found"}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-center">
            {expectedApp?.title || "Title Not Found"}
          </h2>
          <p>{expectedApp?.description || "Description Not Found"}</p>

          <div className="flex justify-between">
            <div>
              Developed By:{" "}
              {expectedApp?.companyName || "Company Name Not Found"}
            </div>
            <div>Size: {expectedApp?.size || "Size Not Found"} MB</div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 text-green-500">
              <MdOutlineFileDownload className="mt-1" />{" "}
              {expectedApp?.downloads || "0"}
            </div>
            <div className="flex gap-2 text-yellow-500">
              <FaStar className="mt-1" /> {expectedApp?.ratingAvg || "0"}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <btn
            onClick={handleInstallApp}
            className="btn bg-purple-500 text-white"
          >
            Install Now
          </btn>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
