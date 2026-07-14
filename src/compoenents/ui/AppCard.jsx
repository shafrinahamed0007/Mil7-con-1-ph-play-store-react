import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const AppCard = ({ app }) => {
  return (
    <div className="card bg-base-100 bg-slate-900 shadow-sm py-5">
      <figure>
        <img
          className="w-[110px] rounded-xl"
          src={app?.image}
          alt={app?.title || "Title Not Found"}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-center">{app?.title || "Title Not Found"}</h2>
        <div className="flex justify-between">
          <div className="flex gap-2 text-green-500">
            <MdOutlineFileDownload className="mt-1" /> {app?.downloads || "0"}
          </div>
          <div className="flex gap-2 text-yellow-500">
            <FaStar className="mt-1" /> {app?.ratingAvg || "0"}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AppCard;
