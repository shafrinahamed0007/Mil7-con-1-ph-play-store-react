import { createContext } from "react";

export const InstallAppsContext = createContext();
const InstalledAppsContext = ({ children }) => {
  const data = {
    name: "Shakib",
    age: 27,
  };
  return (
    <InstallAppsContext.Provider value={data}>
      {children}
    </InstallAppsContext.Provider>
  );
};

export default InstalledAppsContext;
