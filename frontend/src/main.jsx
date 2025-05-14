import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { Provider } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { appStore } from "./app/store";
import { Toaster } from "./components/ui/sonner";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Authenticate from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import AllCourses from "./pages/student/AllCourses";
import MyLearning from "./pages/student/MyLearning";
import ProfilePage from "./pages/student/ProfilePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
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
      {
        path: "/all-courses",
        element: <AllCourses />,
      },
      {
        path: "/my-learnings",
        element: <MyLearning />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
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
