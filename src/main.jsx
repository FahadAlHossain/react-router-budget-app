import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DashBoard, {
  dashboardAction,
  dashboardLoader,
} from "./components/DashBoard/DashBoard";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Main, { mainLoader } from "./components/Main/Main";
import { logoutAction } from "./utilities/logout";
import { ToastContainer } from "react-toastify";
import Expenses, {
  expensesAction,
  expensesLoader,
} from "./components/Expenses/Expenses";
import Budget, { budgetAction, budgetLoader } from "./components/Budget/Budget";
import { deleteBudget } from "./utilities/deleteBudget";

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
        action: expensesAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/budget/:id",
        element: <Budget />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <ErrorPage />,
        children: [
         {
           path: "delete",
           action: deleteBudget,
         }
        ]
      },
      {
        path: "/logout",
        action: logoutAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  </StrictMode>
);
