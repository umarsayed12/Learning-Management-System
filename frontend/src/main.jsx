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
import ProfilePage from "./pages/ProfilePage";
import AuthLayout from "./components/AuthLayout";
import { useLoadUserQuery } from "./slices/api/authApi";
import LoadingScreen from "./components/LoadingScreen";
import MainPage from "./pages/instructor/MainPage";
import Dashboard from "./pages/instructor/Dashboard";
import Courses from "./pages/instructor/Courses";
import AddCourse from "./pages/instructor/Courses/AddCourse";
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
          <AuthLayout authentication={false}>
            <Authenticate />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Authenticate />
          </AuthLayout>
        ),
      },
      {
        path: "/all-courses",
        element: <AllCourses />,
      },
      {
        path: "/my-learnings",
        element: (
          <AuthLayout authentication={true}>
            <MyLearning />
          </AuthLayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthLayout authentication={true}>
            <ProfilePage />
          </AuthLayout>
        ),
      },

      //Instructor Routes
      {
        path: "admin",
        element: <MainPage />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "courses",
            element: <Courses />,
          },
          {
            path: "add-course",
            element: <AddCourse />,
          },
        ],
      },
    ],
  },
]);

const Loading = ({ children }) => {
  const { isLoading } = useLoadUserQuery();
  return isLoading ? <LoadingScreen /> : <>{children}</>;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <Loading>
        <RouterProvider router={router} />
        <Toaster />
      </Loading>
    </Provider>
  </StrictMode>
);
