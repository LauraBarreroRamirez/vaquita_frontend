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
import AuthProvider from "./utils/providers/auth/AuthProvider.jsx";
import AuthGuard from "./guards/AuthGuard.jsx";

const router = createBrowserRouter([
  {
    path: "/inicio",
    element: (
      <AuthGuard>
        <App />
      </AuthGuard>
    ),
  },
  {
    path: "/groups",
    element: (
      <AuthGuard>
        <GroupsProvider>
          <Groups />
        </GroupsProvider>
      </AuthGuard>
    ),
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <LoginPage />
      </AuthGuard>
    ),
  },
  {
    path: "/friends",
    element: (
      <AuthGuard>
        <Friends />
      </AuthGuard>
    ),
  },
  {
    path: "/expenses",
    element: (
      <AuthGuard>
        <Expenses />
      </AuthGuard>
    ),
  },
  {
    path: "/group/:id",
    element: (
      <AuthGuard>
        <GroupDetail />
      </AuthGuard>
    ),
  },
  {
    path: "/registro",
    element: (
      <AuthGuard>
        <Registration />
      </AuthGuard>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
