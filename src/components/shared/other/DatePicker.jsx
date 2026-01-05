"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DatePicker({ onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Get week start (Monday)
  const getWeekStart = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };

  const weekStart = getWeekStart(currentDate);

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(weekStart);
    date.setDate(date.getDate() + i);
    return date;
  });

  const formatDateRange = () => {
    const start = days[0];
    const end = days[6];

    const startMonth = start.toLocaleDateString("en-US", { month: "short" });
    const endMonth = end.toLocaleDateString("en-US", { month: "short" });

    return startMonth === endMonth
      ? `${startMonth} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`
      : `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${start.getFullYear()}`;
  };

  const formatSelectedDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} - ${year}`;
  };

  const isSelected = (date) =>
    selectedDate &&
    date.getDate() === selectedDate.getDate() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getFullYear() === selectedDate.getFullYear();

  const goToPreviousWeek = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() - 7);
    setCurrentDate(d);
  };

  const goToNextWeek = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + 7);
    setCurrentDate(d);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onDateSelect?.(formatSelectedDate(date));
  };

  return (
    <div className="w-full mx-auto p-4 bg-gray-900 rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={goToPreviousWeek} className="p-2 hover:bg-slate-800 rounded-lg">
          <ChevronLeft className="w-6 h-6 text-slate-300" />
        </button>

        <h2 className="lg:text-lg text-base font-semibold text-stone-200">
          {formatDateRange()}
        </h2>

        <button onClick={goToNextWeek} className="p-2 hover:bg-slate-800 rounded-lg">
          <ChevronRight className="w-6 h-6 text-slate-300" />
        </button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-3">
        {days.map((date, index) => {
          const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

          return (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              className={`p-2 rounded-md transition-all flex flex-col items-center justify-center
                ${
                  isSelected(date)
                    ? "border-2 border-primary bg-primary/10 text-white"
                    : "bg-slate-800 border-2 border-gray-700 text-slate-300 hover:bg-slate-700"
                }
              `}
            >
              <span className="text-[10px] sm:text-xs text-stone-400 font-medium">
                {dayName}
              </span>
              <span className="lg:text-xl font-bold sm:text-base text-xs">
                {date.getDate()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
