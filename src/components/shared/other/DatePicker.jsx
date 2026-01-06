"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DatePicker({ selectedDate, onDateSelect }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentStartDate, setCurrentStartDate] = useState(today);

  // Generate 7 days from currentStartDate
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentStartDate);
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

  const isSelected = (date) =>
    selectedDate &&
    date.toDateString() === selectedDate.toDateString();

  const isPastDate = (date) => date < today;

  const goToPreviousWeek = () => {
    const prev = new Date(currentStartDate);
    prev.setDate(prev.getDate() - 7);

    // Don't allow going before today
    if (prev < today) return;

    setCurrentStartDate(prev);
  };

  const goToNextWeek = () => {
    const next = new Date(currentStartDate);
    next.setDate(next.getDate() + 7);
    setCurrentStartDate(next);
  };

  const handleDateClick = (date) => {
    if (isPastDate(date)) return;
    onDateSelect?.(date); // Pass Date object directly
  };

  return (
    <div className="w-full mx-auto p-4 bg-gray-900 rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPreviousWeek}
          className="p-2 hover:bg-slate-800 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
          disabled={currentStartDate <= today}
        >
          <ChevronLeft className="w-6 h-6 text-slate-300" />
        </button>

        <h2 className="lg:text-lg text-base font-semibold text-stone-200">
          {formatDateRange()}
        </h2>

        <button
          onClick={goToNextWeek}
          className="p-2 hover:bg-slate-800 rounded-lg cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-slate-300" />
        </button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-3">
        {days.map((date, index) => {
          const dayName = date.toLocaleDateString("en-US", {
            weekday: "short",
          });

          const disabled = isPastDate(date);

          return (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              disabled={disabled}
              className={`p-2 rounded-md cursor-pointer transition-all flex flex-col items-center justify-center
                ${
                  disabled
                    ? "bg-slate-900 border border-gray-800 text-gray-500 cursor-not-allowed"
                    : isSelected(date)
                    ? "border-2 border-primary bg-primary/10 text-white"
                    : "bg-slate-800 border-2 border-gray-700 text-slate-300 hover:bg-slate-700"
                }
              `}
            >
              <span className="text-[10px] sm:text-xs font-medium">
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