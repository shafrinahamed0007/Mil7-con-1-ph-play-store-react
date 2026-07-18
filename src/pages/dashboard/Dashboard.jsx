import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstallAppsContext } from "../../context/InstalledAppsContext";
import useApps from "../../hooks/useApps";

const Dashboard = () => {
  const { installApps } = useContext(InstallAppsContext);
  const { apps} = useApps();
  const uninstallApp = apps.length - installApps.length
  const data = [
    { name: "Installed", value: installApps.length, fill: "#0088fe" },
    { name: "UnInstalled", value: uninstallApp, fill: "#00C49F" },
  ];
  return (
    <div className="container mx-auto border border-slate-300 my-10 shadow p-10">
      <h2 className="font-semibold text-3xl mb-16 text-center text-green-500">
        Installed and uninstalled apps
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "350px",
          maxHeight: "80vh",
          aspectRatio: 1,
          margin: "auto",
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Dashboard;
