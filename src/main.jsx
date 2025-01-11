import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DashBoard, { dashboardAction, dashboardLoader } from "./components/DashBoard/DashBoard";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Main, { mainLoader } from "./components/Main/Main";
import { logoutAction } from "./utilities/logout";
import { ToastContainer } from 'react-toastify';
import Expenses, { expensesLoader } from "./components/Expenses/Expenses";


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
        action: dashboardAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
        loader: expensesLoader,
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
    <ToastContainer/>
  </StrictMode>
);
