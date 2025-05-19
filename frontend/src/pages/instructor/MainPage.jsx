import { Outlet } from "react-router-dom";
import { SideNavbar } from "./Sidebar";
import Footer from "@/components/Footer";
export default function MainPage() {
  return (
    <div className="w-full flex h-full dark:text-white">
      <SideNavbar />
      <Outlet />
    </div>
  );
}
