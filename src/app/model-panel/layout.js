"use client";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  CirclePoundSterling,
  ClipboardClock,
  History,
  Info,
  Layout,
  MessageSquare,
  PanelLeft,
  User,
  Users,
  Wallet,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const links = [
    { name: "Dashboard", href: "/model-panel", icon: Layout },

    {
      name: "My Wallet",
      href: "/model-panel/my-wallet",
      icon: Wallet,
    },
    {
      name: "Appointments",
      href: "/model-panel/appointment-schedule",
      icon: ClipboardClock,
    },
    { name: "Profile", href: "/model-panel/profile", icon: User },
    {
      name: "Review",
      href: "/model-panel/review",
      icon: Info,
    },
    {
      name: "Message",
      href: "/model-panel/message",
      icon: MessageSquare,
    },
  ];

  // --- NavLink Component ---
  const NavLink = ({ link }) => {
    const Icon = link.icon;
    const isActive = link.href !== "#" && pathname === link.href;

    return (
      <Link
        href={link.href}
        className={`flex items-center text-sm  p-3 mx-2 my-1 rounded-md transition
          ${
            isActive
              ? "bg-primary/30 text-white font-semibold shadow"
              : "text-white hover:bg-white/10"
          }`}
      >
        <Icon className="w-5 h-5 mr-3" />
        {link.name}
      </Link>
    );
  };
  return (
    <div className="flex h-screen bg-[#050718] w-full overflow-hidden">
      {/* SIDEBAR */}
      <>
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <aside
          className={`bg-gray-800 text-white fixed lg:static top-0 left-0 h-full z-50
          transition-all duration-300
          ${isSidebarOpen ? "w-72" : "w-0 lg:w-0"}
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
        >
          {isSidebarOpen && (
            <div className="flex flex-col h-full">
              {/* Sidebar Top */}
              <div className="p-4 flex items-center justify-between border-b border-white/20">
                <div className="flex gap-2 py-2 items-center">
                  <Link className="flex gap-2 items-center" href={"/"}>
                    <h2 className="hidden lg:block text-lg font-semibold text-primary">
                      EROSAE
                    </h2>
                  </Link>
                </div>
                <button
                  className="lg:hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-grow overflow-y-auto py-3">
                {links.map((link) => (
                  <NavLink key={link.name} link={link} />
                ))}
              </nav>

              {/* Logout Button */}
              <Button size={"lg"} className="mx-3 mb-4" variant="secondary">
                Log Out
              </Button>
            </div>
          )}
        </aside>
      </>
<nav
        className="
  fixed bottom-4 mx-1 rounded-full overflow-hidden left-0 right-0 z-[60]
  bg-[#050718]/90 backdrop-blur-md
  border border-gray-600
  shadow-[0_10px_30px_rgba(0,0,0,0.6)]
  md:hidden
"
      >
        <ul className="grid grid-cols-4 p-1 ">
          {links.slice(0, 4).map((link) => {
      const Icons = link.icon
      return(
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  `flex flex-col flex-1 rounded-full text-[10px] items-center py-1 gap-1 transition"
                  ${pathname === link.href
                    ? "bg-primary text-stone-200"
                    : "text-stone-300 hover:text-white"}`
                }
              >
                <span ><Icons size={20}/></span>
                <span>{link.name}</span>
              </Link>
            </li>
          )})}
        </ul>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto bg-gray-900/50 transition-all duration-300">
        {/* Top Bar */}
        <div className="bg-gray-800 backdrop-blur sticky top-0 z-30 flex justify-between pr-2 py-3 sm:py-5 text-white shadow-md">
          <button
            className="p-2 cursor-pointer hover:text-gray-100"
            onClick={() => {
              if (window.innerWidth < 1024) {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              } else {
                setIsSidebarOpen(!isSidebarOpen);
              }
            }}
          >
            <div className="flex items-center gap-2">
              <PanelLeft />
            </div>
          </button>

          <Link className="md:mr-6 mr-3" href={`/model-panel`}>
            <img
              src="/user.png"
              className="h-9 w-9 border bg-white border-white rounded-full"
            />
          </Link>
        </div>

        <div className="p-4 pb-30 md:pb-4 text-stone-200 lg:p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
