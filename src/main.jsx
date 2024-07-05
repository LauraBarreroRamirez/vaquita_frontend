import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";
import Groups from "./views/groups/Groups.jsx";
import Friends from "./views/Friends.jsx";
import Expenses from "./views/Expenses.jsx";
import GroupDetail from "./views/groups/GroupDetail.jsx";
import { LoginPage } from "./views/login.jsx";
import { GroupsProvider } from "./utils/GroupsContext.jsx";
import Registration from "./views/Registration.jsx";

const router = createBrowserRouter([
  {
    path: "/inicio",
    element: <App />,
  },
  {
    path: "/groups",
    element: <Groups />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/expenses",
    element: <Expenses />,
  },
  {
    path: "/group/:id",
    element: <GroupDetail />,
  },
  {
    path: "/registro",
    element: <Registration />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GroupsProvider>
      <RouterProvider router={router} />
    </GroupsProvider>
  </React.StrictMode>
);
