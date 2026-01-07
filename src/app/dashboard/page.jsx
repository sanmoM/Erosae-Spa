import { CalendarCheck, Wallet, BookmarkCheck, Heart, Clock } from "lucide-react";
import React from "react";

const UserDashboardPage = () => {
  const dashboardStats = [
    {
      id: 1,
      title: "Total Bookings",
      value: 22,
      icon: CalendarCheck,
      bg: "bg-indigo-500/10",
      iconColor: "text-indigo-500",
    },
    {
      id: 2,
      title: "Upcoming",
      value: 4,
      icon: Clock,
      bg: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      id: 3,
      title: "Completed",
      value: 18,
      icon: BookmarkCheck,
      bg: "bg-yellow-500/10",
      iconColor: "text-yellow-500",
    },
    {
      id: 4,
      title: "Wallet Balance",
      value: "AED 820",
      icon: Wallet,
      bg: "bg-pink-500/10",
      iconColor: "text-pink-500",
    },
  ];

  const upcomingBookings = [
    {
      id: 1,
      model: "Aisha Khan",
      service: "Body Massage",
      date: "12 Jan 2026",
      time: "8:30 PM",
      location: "Home Service",
      status: "Confirmed",
    },
    {
      id: 2,
      model: "Leon",
      service: "Therapy Session",
      date: "16 Jan 2026",
      time: "6:00 PM",
      location: "Spa Center",
      status: "Pending",
    },
  ];

  return (
    <div>
      <div className="md:mb-8 mb-6">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium">
          Welcome Back, <span className="text-primary">John</span>
        </h1>
        <p className="mt-1 text-sm sm:text-base text-stone-400">
          Manage your bookings and account overview.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {dashboardStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.id}
              className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-800/50 p-3 md:p-5"
            >
              <div
                className={`flex items-center justify-center md:w-16 w-12 h-12 md:h-16 rounded-lg ${stat.bg}`}
              >
                <Icon className={`md:w-8 w-6 h-6 md:h-8 ${stat.iconColor}`} />
              </div>

              <div className="flex flex-col text-right">
                <h2 className="md:text-2xl text-xl font-semibold text-white">
                  {stat.value}
                </h2>
                <p className="text-sm text-gray-400">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-8 md:mt-12 lg:mt-16">
        {/* BOOKINGS TABLE */}
        <div className="lg:col-span-3">
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium">
            Upcoming Bookings
          </h2>

          <div className="overflow-x-auto mt-4 w-full">
            <table className="min-w-[700px] w-full text-sm rounded-xl shadow">
              <thead className="bg-gray-800 text-stone-300 border-b border-gray-400">
                <tr className="text-xs sm:text-sm lg:text-base">
                  <th className="px-6 py-4 font-semibold ">#</th>
                  <th className="px-6 py-4 font-semibold">Model</th>
                  <th className="px-6 py-4 font-semibold">Service</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Time</th>
                  <th className="px-6 py-4 font-semibold">Type</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>

              <tbody>
                {upcomingBookings.map((row, index) => (
                  <tr
                    key={row.id}
                    className="bg-gray-800/50 border-b border-b-gray-700 hover:bg-gray-800 text-stone-400 transition"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.model}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.location}</td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                          ${
                            row.status === "Confirmed"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-1">
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium">
            Quick Information
          </h2>

          <div className="grid grid-cols-1 mt-4 gap-4">
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-stone-300 font-semibold mb-2">
                Wishlist Saved
              </p>
              <p className="text-xl lg:text-2xl font-bold text-primary">12</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-stone-300 font-semibold mb-2">
                Total Spent
              </p>
              <p className="text-xl lg:text-2xl font-bold text-primary">AED 4,200</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-stone-300 font-semibold mb-2">
                Last Login
              </p>
              <p className="text-base text-gray-400">Yesterday at 11:45 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
