import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import Apps from "./pages/apps/Apps";
import Installation from "./pages/installation/Installation";
import NotFound from "./pages/notFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <h2>Home Page</h2>,
      },
      {
        path: "/apps",
        element: <Apps />
      },
      {
        path: "/installapp",
        element: <Installation />
      }
    ],
    errorElement: <NotFound />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
