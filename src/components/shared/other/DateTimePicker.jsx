"use client";

import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRef, useState } from "react";

const DateTimePicker = ({ date, setDate, time, setTime }) => {
  const [open, setOpen] = useState(false);
  const timeRef = useRef(null);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* DATE */}
      <div className="flex flex-col w-full gap-3">
        <Label>Date</Label>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="justify-between font-normal py-5"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                setDate(d);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* TIME Input */}

      <div className="flex flex-col w-full gap-3">
        <Label>Time</Label>

        <Input
          ref={timeRef}
          type="time"
          value={time}
          onFocus={() => timeRef.current?.showPicker?.()}
          onClick={() => timeRef.current?.showPicker?.()}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
