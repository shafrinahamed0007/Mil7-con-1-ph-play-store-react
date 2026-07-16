import { useContext } from "react";
import { InstallAppsContext } from "../../context/InstalledAppsContext";

const Installation = () => {
  const contextData = useContext(InstallAppsContext);
  console.log(contextData, "Context Data");
  return <div>Installation Page</div>;
};

export default Installation;
