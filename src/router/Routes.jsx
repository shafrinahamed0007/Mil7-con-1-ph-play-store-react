import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Apps from "../pages/apps/Apps";
import Installation from "../pages/installation/Installation";
import NotFound from "../pages/notFoundPage/NotFoundPage";
import AppsDetails from "../pages/appDetails/AppsDetails";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/apps/:id",
        element: <AppsDetails />
      },
      {
        path: "/installapp",
        element: <Installation />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />
        
      }
    ],
    errorElement: <NotFound />,
  },
]);