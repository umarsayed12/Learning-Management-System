import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { Provider } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { appStore } from "./app/store";
import { Toaster } from "./components/ui/sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authenticate from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <HomePage />,
      // },
      {
        path: "/login",
        element: (
          <Authenticate />
          // <AuthLayout authentication={false}>
          //   <Login />
          // </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <Authenticate />
          // <AuthLayout authentication={false}>
          //   <Signup />
          // </AuthLayout>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </StrictMode>
);
