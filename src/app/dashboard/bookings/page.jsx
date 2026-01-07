"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarCheck, Clock, CheckCircle, XCircle, Star } from "lucide-react";

const MyBookings = () => {
  // demo bookings
  const bookingsData = [
    {
      id: 1,
      model: "Aisha Khan",
      service: "Full Body Massage",
      date: "12 Jan 2026",
      time: "8:30 PM",
      duration: "90 minutes",
      amount: "350 AED",
      status: "Completed",
    },
    {
      id: 2,
      model: "Leon",
      service: "Therapy Session",
      date: "15 Jan 2026",
      time: "6:00 PM",
      duration: "60 minutes",
      amount: "280 AED",
      status: "Upcoming",
    },
    {
      id: 3,
      model: "Sophia",
      service: "Relaxing Massage",
      date: "03 Jan 2026",
      time: "10:30 PM",
      duration: "45 minutes",
      amount: "200 AED",
      status: "Cancelled",
    },
  ];

  const [filterStatus, setFilterStatus] = useState("All");
  const [openReview, setOpenReview] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewMsg, setReviewMsg] = useState("");

  const filteredBookings =
    filterStatus === "All"
      ? bookingsData
      : bookingsData.filter((b) => b.status === filterStatus);

  const stats = [
    { title: "Total Bookings", value: 22, icon: CalendarCheck, color: "text-indigo-400" },
    { title: "Upcoming", value: 4, icon: Clock, color: "text-emerald-400" },
    { title: "Completed", value: 16, icon: CheckCircle, color: "text-yellow-400" },
    { title: "Cancelled", value: 2, icon: XCircle, color: "text-red-400" },
  ];

  return (
    <div>
      <div className="md:mb-8 mb-6">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium">
          My Bookings
        </h1>
        <p className="mt-1 text-sm sm:text-base text-stone-400">
          Track your booking history and leave reviews.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-800/50 p-4"
            >
              <div>
                <p className="text-stone-400 text-sm">{s.title}</p>
                <h2 className="text-2xl font-semibold text-white mt-1">{s.value}</h2>
              </div>
              <Icon className={`w-10 h-10 ${s.color}`} />
            </div>
          );
        })}
      </div>

      {/* Filter + table */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg md:text-xl font-semibold">Booking History</h2>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Upcoming">Upcoming</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full text-sm rounded-xl">
            <thead className="bg-gray-800 text-stone-300 border-b border-gray-700">
              <tr>
                <th className="px-6 py-3 text-left">Model</th>
                <th className="px-6 py-3">Service</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Time</th>
                <th className="px-6 py-3">Duration</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredBookings.map((b, i) => (
                <tr
                  key={i}
                  className="bg-gray-800/40 border-b border-gray-700 text-stone-300"
                >
                  <td className="px-6 py-3 whitespace-nowrap">{b.model}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{b.service}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{b.date}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{b.time}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{b.duration}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{b.amount}</td>

                  <td className="px-6 py-3 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        b.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : b.status === "Upcoming"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>

                  <td className="px-6 py-3">
                    {b.status === "Completed" && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setSelectedBooking(b);
                          setOpenReview(true);
                        }}
                      >
                        Review
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Modal */}
      <Dialog open={openReview} onOpenChange={setOpenReview}>
        <DialogContent className="bg-gray-900 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">
              Review {selectedBooking?.model}
            </DialogTitle>
          </DialogHeader>

          {/* Star rating */}
          <div className="flex gap-1 my-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`w-6 h-6 cursor-pointer ${
                  rating >= s ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
                }`}
                onClick={() => setRating(s)}
              />
            ))}
          </div>

          {/* Textarea */}
          <Textarea
            placeholder="Write your experience..."
            value={reviewMsg}
            onChange={(e) => setReviewMsg(e.target.value)}
            className="min-h-[120px]"
          />

          <Button
            variant="secondary"
            className="w-full mt-3"
            onClick={() => {
              console.log({
                booking: selectedBooking,
                rating,
                reviewMsg,
              });

              setOpenReview(false);
              setRating(0);
              setReviewMsg("");
            }}
          >
            Submit Review
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyBookings;
