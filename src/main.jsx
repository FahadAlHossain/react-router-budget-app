import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DashBoard, { dashboardLoader } from "./components/DashBoard/DashBoard";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Main, { mainLoader } from "./components/Main/Main";
import { logoutAction } from "./utilities/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashBoard />,
        loader: dashboardLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/logout",
        action: logoutAction,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
