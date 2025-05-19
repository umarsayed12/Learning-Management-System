import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
import { IconBook, IconDashboard } from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
// import { TestbotWindow } from "./TestbotWindow";

export function SideNavbar() {
  const links = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: <IconDashboard className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Courses",
      href: "/admin/courses",
      icon: <IconBook className="h-5 w-5 shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "md:mx-auto pt-16 px-2 z-[100] flex w-[" +
          (open ? "100%" : "7%") +
          "] flex-1 flex-col items-start fixed md:items-center overflow-hidden md:flex-row",
        "h-full"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="fixed justify-between z-100 pt-[18%] md:pt-4 bg-gray-200 gap-10 border-r-2 md:h-[80%]">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Umar Khursheed",
                href: "/profile",
                icon: (
                  <img
                    src="https://umar-khursheed.netlify.app/images/Umar-2.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-7 w-6 font-bold shrink-0 flex justify-center items-center rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm text-white bg-custom-blue dark:bg-custom-yellow">
        L
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black"
      >
        Lumora
      </motion.span>
    </a>
  );
};
