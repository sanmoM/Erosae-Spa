import { appointmentData, scheduleData, statusColors } from "@/utilities/data";
import { CalendarCheck, Star, Users, Wallet } from "lucide-react";
import React from "react";

const page = () => {
  const dashboardStats = [
    {
      id: 1,
      title: "Total Appointments",
      value: 128,
      icon: CalendarCheck,
      bg: "bg-indigo-500/10",
      iconColor: "text-indigo-500",
    },
    {
      id: 2,
      title: "Total Clients",
      value: 76,
      icon: Users,
      bg: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      id: 3,
      title: "Ratings",
      value: "4.8",
      icon: Star,
      bg: "bg-yellow-500/10",
      iconColor: "text-yellow-500",
    },
    {
      id: 4,
      title: "Wallet Balance",
      value: "AED 2,450",
      icon: Wallet,
      bg: "bg-pink-500/10",
      iconColor: "text-pink-500",
    },
  ];

  const availability = [
    { day: "Monday", status: "Available" },
    { day: "Tuesday", status: "Available" },
    { day: "Wednesday", status: "Available" },
    { day: "Thursday", status: "Available" },
    { day: "Friday", status: "Busy" },
    { day: "Saturday", status: "Available" },
    { day: "Sunday", status: "Busy" },
  ];

  return (
    <div>
      <div className="md:mb-8 mb-6">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium">
          Welcome Back, <span className="text-primary ">Sarah</span>
        </h1>
        <p className="mt-1 text-sm sm:text-base text-stone-400">
          Welcome to EROSAE!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {dashboardStats.slice(0,5).map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.id}
              className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-800/50 p-3 md:p-5"
            >
              {/* LEFT ICON (2/3 width visually) */}
              <div
                className={`flex items-center justify-center md:w-16 w-12 h-12 md:h-16 rounded-lg ${stat.bg}`}
              >
                <Icon className={`md:w-8 w-6 h-6 md:h-8 ${stat.iconColor}`} />
              </div>

              {/* RIGHT CONTENT */}
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

        <div className="lg:col-span-3">
          <h2 className="text-lg  md:text-xl lg:text-2xl font-medium">
            Today's Appointments
          </h2>
          <div className=" overflow-x-auto mt-4 w-full">
            <table className="min-w-[700px] w-full text-sm text-left text-gray-700  rounded-xl shadow">
              <thead className="bg-gray-800 text-stone-300 border-b border-gray-400">
                <tr className="text-xs sm:text-sm lg:text-base">
                  <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                    #
                  </th>
                  <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                    Client Name
                  </th>
                  <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                    Service Type
                  </th>
                  <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                    Service
                  </th>
                  {/* <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                    Date
                  </th>
                  <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                    Time
                  </th>
                  <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                    Duration
                  </th>*/}
                  <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                    Location
                  </th> 
                  <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {appointmentData.map((row, indx) => (
                  <tr
                    key={row.id}
                    className="bg-gray-800/50 border-b border-b-gray-700 hover:bg-gray-800 text-stone-400 transition text-xs sm:text-sm lg:text-base"
                  >
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {indx + 1}
                    </td>
                    <td className="px-6 py-4  lg:py-6 whitespace-nowrap">
                      {row.clientName}
                    </td>
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {row.serviceType}
                    </td>
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {row.service}
                    </td>
                    {/* <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {row.time}
                    </td>
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {row.duration}
                    </td> */}
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {row.location}
                    </td>
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
            ${
              row.status === "Upcoming"
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-green-500/20 text-green-400"
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
        <div className="lg:col-span-1">
            <h2 className="text-lg  md:text-xl lg:text-2xl font-medium">
            Availability
          </h2>
          {/* <div className="grid grid-cols-2  mt-4 gap-2">
            {availability.map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-3 flex items-center justify-between text-center border
          ${
            item.status === "Available"
              ? "bg-green-500/10 border-green-500/30"
              : "bg-red-500/10 border-red-500/30"
          }`}
              >
                <p className="text-xs font-medium text-stone-300">{item.day}</p>

                <span
                  className={`mt-2 inline-block px-3 py-1 text-[10px] font-semibold rounded-full
            ${
              item.status === "Available"
                ? "text-green-400 bg-green-500/20"
                : "text-red-400 bg-red-500/20"
            }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div> */}

          <div className="grid grid-cols-1 mt-4 gap-4">
          {[
            {
              day: "Monday",
              status: "Available",
            },
            {
              day: "Monday",
              status: "Busy",
            },
            {
              day: "Monday",
              status: "Available",
            },
            {
              day: "Monday",
              status: "Available",
            },
            {
              day: "Monday",
              status: "Busy",
            },
            {
              day: "Monday",
              status: "Available",
            },
            {
              day: "Monday",
              status: "Available",
            },
          ].map((day) => (
            <div
              key={day.day}
              className="bg- rounded-lg p-3 flex items-start justify-between bg-gray-800/50 border border-gray-700"
            >
              <div>
                <p className="font-semibold text-sm  text-[#e0e6ed] mb-2">
                  {day.day}
                </p>
                {day.status === "Available" && (
                  <p className="text-xs text-[#9ca3af]">9:00 AM - 9:00 PM</p>
                )}
              </div>

              <p
                className={`text-xs px-2 py-1 rounded-full ${
                  day.status === "Available" ? "bg-green-700" : "bg-red-700"
                } `}
              >
                {day.status}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;
