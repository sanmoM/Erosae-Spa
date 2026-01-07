"use client";

import React, { useEffect, useState } from "react";
import Container from "../other/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { CalendarCheck, CalendarClock, X } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IoHomeOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GrRestroomWomen } from "react-icons/gr";
import { LuLayoutTemplate } from "react-icons/lu";

const navLinks = [
  { name: "Home", href: "/", icon: <IoHomeOutline size={20} /> },
  {
    name: "Service",
    href: "/service",
    icon: <FaHandHoldingHeart size={20} />,
  },
  {
    name: "Model",
    href: "/model",
    icon: <GrRestroomWomen size={20} />,
  },
  {
    name: "Booking",
    href: "/booking",
    icon: <CalendarClock size={20} />,
  },
  // {
  //   name: "Booking",
  //   href: "/booking",
  //   icon: <CalendarCheck size={16} />,
  // },
  {
    name: "Blog",
    href: "/blog",
    icon: <LuLayoutTemplate size={20} />,
  },
  {
    name: "Model Panel",
    href: "/model-panel",
    icon: <LuLayoutTemplate size={20} />,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LuLayoutTemplate size={20} />,
  },
];

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={clsx(
          // Always fixed position
          "fixed top-0 left-0 right-0 z-[70] w-full transition-all duration-300",

          // Background based on conditions
          scrolled || !isHome
            ? "bg-[#050718]/80 backdrop-blur-md "
            : "bg-transparent"
        )}
      >
        <Container className="flex items-center justify-between py-6">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            {/* Mobile menu */}
            <button
              onClick={() => setOpen(true)}
              className="text-2xl cursor-pointer text-white lg:hidden"
            >
              <CiMenuFries />
            </button>
            <Link className="flex gap-2 items-center" href={"/"}>
              <h2 className="lg:hidden text-lg font-semibold text-primary">
                EROSAE
              </h2>
            </Link>

            <h2 className="hidden lg:block text-lg font-semibold text-primary">
              EROSAE
            </h2>
          </div>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex  items-center gap-6 text-base text-gray-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "px-3 py-1  transition",
                    pathname === link.href
                      ? "text-primary font-semibold"
                      : "hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="lg:flex gap-3 items-center">
            <Link href={"/login"}>
              <Button className={"rounded-full "} variant="secondary">
                Login
              </Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button
                className={"rounded-full hidden lg:flex "}
                variant="outline"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </Container>
      </header>

      {/* SIDEBAR (md & below) */}
      <div
        className={clsx(
          "fixed inset-0 z-70 bg-gray-900/50 transition-opacity backdrop-blur-[1px] lg:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={clsx(
          "fixed top-0 left-0 z-80 flex h-full w-80 flex-col bg-[#303030] p-3 transition-transform lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="mb-4 flex items-center justify-between border-b border-gray-500 py-4">
          <Link className="flex gap-2 items-center" href={"/"}>
            <h2 className=" text-lg font-semibold text-primary">EROSAE</h2>
          </Link>
          <button onClick={() => setOpen(false)}>
            <X className="cursor-pointer text-white" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-1 flex-col justify-between">
          {/* NAV LINKS */}
          <ul className="space-y-1  text-gray-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "block rounded p-4 py-3",
                    pathname === link.href
                      ? "bg-gray-200 font-semibold text-primary"
                      : "hover:bg-gray-700"
                  )}
                >
                  <div className="flex text-sm items-center gap-2">
                    {link.icon} {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* BOTTOM BUTTON */}
          <div className="py-6">
            <Link href={"/sign-up"}>
              <Button
                size="lg"
                variant="outline"
                className="w-full mb-3 rounded-full"
              >
                Sign Up
              </Button>
            </Link>
            <Link href={"/model-register"}>
              <Button
                size="lg"
                variant="secondary"
                className="w-full rounded-full"
              >
                Be a Model
              </Button>
            </Link>
          </div>
        </div>
      </aside>
      <nav
        className="
  fixed bottom-4 mx-1 rounded-full overflow-hidden left-0 right-0 z-[60]
  bg-[#050718]/90 backdrop-blur-md
  border border-gray-600
  shadow-[0_10px_30px_rgba(0,0,0,0.6)]
  md:hidden
"
      >
        <ul className="grid grid-cols-5 p-1 ">
          {navLinks.slice(0, 5).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "flex flex-col flex-1 rounded-full text-[10px] items-center py-1 gap-1 transition",
                  pathname === link.href
                    ? "bg-primary text-stone-200"
                    : "text-stone-300 hover:text-white"
                )}
              >
                <span className="text-3xl">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
