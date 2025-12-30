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
    { name: "Dashboard", href: "/dashboard", icon: Layout },

    {
      name: "My Wallet",
      href: "/dashboard/my-wallet",
      icon: Wallet,
    },
    {
      name: "My Appointments",
      href: "/dashboard/my-appointment",
      icon: Calendar,
    },
    {
      name: "Clients",
      href: "/dashboard/book-history",
      icon: Users,
    },
    
    {
      name: "Schedule",
      href: "/dashboard/payment-history",
      icon: History,
    },
    {
      name: "Message",
      href: "/dashboard/payment-history",
      icon: MessageSquare,
    },
    {
      name: "Feedback",
      href: "/dashboard/payment-history",
      icon: Info,
    },
    { name: "Profile", href: "/dashboard/user-profile", icon: User },
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
              ? "bg-white text-primary font-semibold shadow"
              : "text-white hover:bg-white/20"
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

          <Link className="md:mr-6 mr-3" href={`/dashboard`}>
            <img
              src="/user.png"
              className="h-9 w-9 border bg-white border-white rounded-full"
            />
          </Link>
        </div>

        <div className="p-4 text-stone-200 lg:p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
