import { appointmentData } from "@/utilities/data";
import { CalendarArrowUp, CalendarCheck, Check } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="md:mb-8 mb-6">
        <h2 className="text-lg  md:text-xl lg:text-2xl font-medium">
          My Appointments & Schedule
        </h2>
        <p className="mt-1 text-sm sm:text-base text-stone-400">
          Manage appointments and view your daily schedule.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-8 md:mt-12 lg:mt-16">
        <div className="lg:col-span-3">
          <h2 className="text-lg  md:text-xl lg:text-2xl font-medium">
            All Appointments
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
                  <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                    Date
                  </th>
                  {/* <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                          Time
                        </th>
                        <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                          Duration
                        </th> */}
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
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {row.clientName}
                    </td>
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {row.serviceType}
                    </td>
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {row.service}
                    </td>
                    <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                      {row.date}
                    </td>
                    {/* <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
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
          <h2 className="text-lg mb-4 md:text-xl lg:text-2xl font-medium">
            Upcoming Schedule
          </h2>
          <div className="space-y-3 lg:max-h-[600px] overflow-y-auto">
            {appointmentData.filter(a => a.status === "Upcoming")
              .map((apt) => (
                <div
                  key={apt.id}
                  className="bg-gray-800/50 border-gray-700 border rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-semibold text-sm">
                        {apt.time}
                      </p>
                      <p className="text-xs text-stone-400 mt-1">
                        {apt.duration}
                      </p>
                    </div>
                    <span
                      className={`px-2 flex bg-primary/50  items-center gap-1  py-1 rounded text-xs  `}
                    >{apt.date}
                      {apt.status === "Completed" ? (
                        <CalendarCheck />
                      ) : (
                        <CalendarArrowUp className="" size={18} />
                      )}
                    </span>
                  </div>
                  <p className="font-medium text-stone-400 text-sm truncate">
                    {apt.clientName}
                  </p>
                  <p className="text-xs text-stone-400 truncate">
                    {apt.service}
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
