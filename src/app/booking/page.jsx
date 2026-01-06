"use client";

import Container from "@/components/shared/other/Container";
import { DatePicker } from "@/components/shared/other/DatePicker";
import FileUpload from "@/components/shared/other/FileUpload";
import PageBanner from "@/components/shared/other/PageBanner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phoneInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  services,
  spaModels,
  location,
  serviceTypes,
  timeSlots,
} from "@/utilities/data";
import {
  ArrowUpRight,
  Calendar,
  Check,
  Clock,
  CreditCard,
  DollarSign,
  Eye,
  Layout,
  MapPin,
  Settings,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const defaultBookingData = {
    city: "",
    serviceType: "",
    date: null,
    time: "",
    serviceName: "",
    category: "",
    duration: "",
    amount: "",
    model: "",
    shopLocation: "",

    area: "",
    address: "",
    buildingName: "",
    residential: "",
    whatsAppNumber: "",
    buildingPhoto: "",
  };

  const [booking, setBooking] = useState(defaultBookingData);

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedCity = location.find((c) => c.city === booking.city);
  const selectedService = services.find((s) => s.title === booking.serviceName);

  const STEPS = [
    { id: 1, name: "City", icon: MapPin },
    { id: 2, name: "Service Type", icon: Settings },
    { id: 3, name: "Date", icon: Calendar },
    { id: 4, name: "Service", icon: Layout },
    { id: 5, name: "Model(s)", icon: User },
    { id: 6, name: "Address", icon: MapPin },
    { id: 7, name: "Review", icon: Eye },
    { id: 8, name: "Payment", icon: CreditCard },
  ];

  return (
    <div className="space-y-12 md:space-y-20">
      <PageBanner
        title="Booking a Spa Service"
        image="https://avatars.mds.yandex.net/get-altay/11203687/2a0000019160c40e29eb2f98a530f3479ee1/XXL_height"
      />
      <Container>
        <div className="border-b border-primary/60">
          <h2 className="heading-primary mb-2">Booking Flow Prototype</h2>
          <p className="text-stone-400 pb-1 text-sm md:text-base leading-relaxed max-w-2xl ">
            Interactive preview of the 8-step booking journey. In real
            implementation, each step will talk to the backend, apply rules, and
            update wallets.
          </p>
        </div>

        <div>
          <div className="  rounded-2xl my-6 md:my-16  shadow-2xl">
            <div className="relative flex justify-between items-start">
              {/* Background Line */}
              <div className="absolute top-5 left-0 w-full h-[2px] bg-zinc-600" />

              {/* Active Progress Line */}
              <div
                className="absolute top-5 left-0 h-[2px] bg-emerald-500 transition-all duration-500 ease-out"
                style={{
                  width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`,
                }}
              />

              {STEPS.map((step) => {
                const isCompleted = currentStep > step.id;
                const isActive = currentStep === step.id;

                return (
                  <div
                    key={step.id}
                    className="relative z-10 flex flex-col items-center group cursor-pointer"
                    onClick={() => setCurrentStep(step.id)}
                  >
                    <div
                      className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2
                    ${
                      isCompleted
                        ? "bg-emerald-500 border-emerald-500"
                        : isActive
                        ? "bg-primary border-stone-500 text-white"
                        : "bg-[#12121a] border-zinc-600 text-stone-400"
                    }
                  `}
                    >
                      {isCompleted ? (
                        <Check size={18} className="text-white" />
                      ) : (
                        <span className="text-sm font-bold">{step.id}</span>
                      )}
                    </div>
                    <span
                      className={`
                    mt-3 text-[10px] uppercase tracking-widest font-bold text-center max-w-[70px]  hidden md:block
                    ${isActive ? "text-primary/70" : "text-stone-400"}
                  `}
                    >
                      {step.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`grid items-start lg:grid-cols-3 gap-6  ${
              currentStep > 7 ? "hidden" : ""
            }`}
          >
            {/* steps  */}
            <div
              className={`lg:col-span-2 border ${
                currentStep > 6 && "hidden"
              }  border-gray-700 bg-gray-900/50 md:p-6 p-4 rounded-md`}
            >
              {/* city */}
              {currentStep === 1 && (
                <div>
                  <div className="">
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                      Select Your City
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400">
                      Select the city where you wants the service.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 mt-4 md:mt-6 gap-x-2 gap-y-3">
                    {location.map((c, indx) => {
                      return (
                        <div
                          onClick={() => {
                            setBooking((prev) => ({
                              ...prev,
                              city: c.city,
                              area: "",
                            }));
                            setCurrentStep(currentStep + 1);
                          }}
                          className={`relative overflow-hidden rounded-md cursor-pointer text-sm border border-gray-600/50 text-stone-400
          ${
            booking.city === c.city
              ? "border-2 border-primary"
              : "hover:border-primary duration-300"
          }
          group`}
                          key={indx}
                        >
                          <img
                            src={c.image.src}
                            alt={c.city}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          />

                          {/* Selected check */}
                          {booking.city === c.city && (
                            <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-1">
                              <Check size={14} />
                            </div>
                          )}

                          <div className="absolute bottom-0 text-stone-200 w-full h-full p-2 bg-gradient-to-t from-black/80 to-black/0 flex items-end rounded-b-md">
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <h3 className=" md:text-base">{c.city}</h3>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* service type  */}
              {currentStep === 2 && (
                <div>
                  <div className="">
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                      Select Service Type
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400">
                      You can take service In House or In Shop.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-6">
                    {serviceTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <div
                          key={type.id}
                          onClick={() => {
                            setBooking((prev) => ({
                              ...prev,
                              serviceType: type.title,
                            }));
                            setCurrentStep(currentStep + 1);
                          }}
                          className={`relative cursor-pointer rounded-xl p-5 transition-all 
        ${
          booking.serviceType === type.title
            ? "border-2 border-primary bg-primary/10"
            : "border border-white/10 bg-gray-900 hover:border-primary/40"
        }`}
                        >
                          {/* Selected check */}
                          {booking.serviceType === type.title && (
                            <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-1">
                              <Check size={14} />
                            </div>
                          )}

                          {/* Icon */}
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                            <Icon size={26} />
                          </div>

                          {/* Title */}
                          <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                            {type.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                            {type.description}
                          </p>

                          {/* Features */}
                          <ul className="space-y-2">
                            {type.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 text-xs md:text-sm text-stone-300"
                              >
                                <Check className="w-4 h-4 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* date */}
              {currentStep === 3 && (
                <div>
                  <div className="">
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                      Select Date and Time
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400">
                      Select your service time.
                    </p>
                  </div>
                  <div className=" mt-4 md:mt-6">
                    <DatePicker
                      selectedDate={booking.date}
                      onDateSelect={(date) => {
                        setBooking((prev) => ({
                          ...prev,
                          date: date,
                          time: "",
                        }));
                      }}
                    />
                  </div>
                  {booking.date && (
                    <div className="mt-6">
                      <h2 className="lg:text-lg text-base font-semibold text-stone-200">
                        Available Times
                      </h2>

                      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 mt-4">
                        {timeSlots.map(({ time, status }) => {
                          const isSelected = booking.time === time;
                          const isDisabled = status === "notAvailable";

                          return (
                            <button
                              key={time}
                              disabled={isDisabled}
                              onClick={() => {
                                setCurrentStep(currentStep + 1);
                                setBooking((prev) => ({
                                  ...prev,
                                  time,
                                }));
                              }}
                              className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all
              ${
                isDisabled
                  ? "bg-gray-800 text-gray-500 line-through cursor-not-allowed"
                  : isSelected
                  ? "bg-primary text-white text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }
            `}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* service  */}
              {currentStep === 4 && (
                <div>
                  <div className="">
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                      Select Service
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400">
                      Choose your service category.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4 md:mt-6">
                    {services.map((s, indx) => {
                      return (
                        <div
                          onClick={() => {
                            setBooking((prev) => ({
                              ...prev,
                              serviceName: s.title,
                              category: s.category,
                              duration: "",
                              amount: "",
                            }));
                          }}
                          key={indx}
                          className={`${
                            s.title === booking.serviceName
                              ? "border-2 border-primary relative bg-primary/10"
                              : "border-white/10 bg-gray-800/50  hover:border-primary/50"
                          } flex gap-4 p-4 rounded-md cursor-pointer border   transition`}
                        >
                          {/* Image */}
                          <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                            <img
                              src={s.image}
                              alt="Swedish Massage"
                              className="object-cover w-full h-full"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex flex-col justify-between flex-1">
                            <div>
                              {/* Rating & Category */}
                              <div className="flex items-center gap-2 text-xs text-stone-400 mb-1">
                                <span>•</span>
                                <span>{s.category}</span>
                              </div>

                              {/* Title */}
                              <h3 className=" font-medium text-sm text-stone-200">
                                {s.title}
                              </h3>

                              {/* Description */}
                              <p className="lg:text-sm text-xs text-stone-400 mt-1 line-clamp-2">
                                {s.description}
                              </p>
                            </div>

                            {/* Price */}
                            <p className="text-sm font-medium text-[#d6b26a] mt-2">
                              From {s.durations[0].price} AED
                            </p>
                          </div>
                          {/* Selected check */}
                          {booking.serviceName === s.title && (
                            <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-1">
                              <Check size={14} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {booking.serviceName && (
                    <>
                      <h2 className="text-sm  font-semibold mt-4 md:mt-6 text-stone-400">
                        Select Duration
                      </h2>

                      <div className="grid md:grid-cols-4 grid-cols-3  mt-4  gap-x-2 gap-y-3">
                        {selectedService.durations.map((d, indx) => (
                          <>
                            <div
                              onClick={() => {
                                setBooking((prev) => ({
                                  ...prev,
                                  duration: d.time,
                                  amount: d.price,
                                }));
                                setCurrentStep(currentStep + 1);
                              }}
                              className={`${
                                booking.duration === d.time
                                  ? "bg-primary   text-white border-primary hover:bg-primary"
                                  : "border-gray-600  "
                              }  hover:bg-gray-900 border hover:border-primary/80 duration-400 p-4 cursor-pointer text-sm rounded-md text-stone-400`}
                              key={indx}
                            >
                              <h2 className="md:text-lg text-center text-stone-300 lg:text-xl font-semibold">
                                {" "}
                                {d.time}
                              </h2>
                              <h4 className="text-center">{d.price} AED</h4>
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* model  */}
              {currentStep === 5 && (
                <div>
                  <div className=" flex items-center justify-between">
                    <div>
                      <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                        Select Model
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-400">
                        Choose model.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select>
                        <SelectTrigger className="max-w-[150px]  text-xs md:text-sm border-primary">
                          <SelectValue
                            className={"text-stone-300"}
                            placeholder="Sort by"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="age">Age</SelectItem>
                            <SelectItem value="experience">
                              Experience
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 md:mt-6 overflow-y-scroll max-h-[500px] gap-4">
                    {spaModels.map((mod, indx) => {
                      return (
                        <div
                          onClick={() => {
                            setBooking((prev) => ({
                              ...prev,
                              model: mod.name,
                            }));
                            setCurrentStep(currentStep + 1);
                          }}
                          className={`
                           border   p-4 relative  cursor-pointer text-sm rounded-md text-stone-400 ${
                             mod.name === booking.model
                               ? "bg-primary/10 border-primary border-2"
                               : "border-gray-600 bg-gray-800/50 hover:border-primary/50 hover:bg-gray-800 duration-400"
                           }`}
                          key={indx}
                        >
                          <div className="flex  gap-5">
                            <div className=" flex-shrink-0">
                              <div className="w-18 h-18 rounded-md overflow-hidden duration-500">
                                <img
                                  src={mod.image}
                                  alt={mod.name}
                                  loading="lazy"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1 text-xs">
                                <Star className={`w-2.5 h-2.5 fill-primary`} />
                                {mod.rating}
                              </div>

                              <h3 className=" font-medium text-sm text-stone-200">
                                {mod.name}
                              </h3>

                              <div
                                className={`flex items-center gap-1 text-stone-400 text-[10px] mt-1 font-bold uppercase tracking-widest`}
                              >
                                <MapPin className={`w-3 text-primary   h-3`} />
                                {mod.city}
                              </div>

                              <div className="flex mt-1 mb-2 gap-1">
                                {mod.tags.slice(0, 2).map((ser, indx) => {
                                  return (
                                    <span
                                      className="text-xs border rounded-full px-1 py-0.5 border-gray-700 bg-gray-800"
                                      key={indx}
                                    >
                                      {ser}
                                    </span>
                                  );
                                })}
                                {mod.tags.length > 2 && (
                                  <span className="text-xs border rounded-full px-1 py-0.5 border-gray-700 bg-gray-800">
                                    +{mod.tags.length - 2}
                                  </span>
                                )}
                              </div>

                              <div className="flex gap-2  justify-end">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                      }}
                                      className={`flex items-center gap-2 bg-white/5 hover:bg-primary cursor-pointer text-white px-4 py-2.5 rounded-xl transition-all duration-300 text-xs font-bold  hover:border-primary group/btn shadow-xl `}
                                    >
                                      Portfolio
                                      <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-all" />
                                    </button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[800px] bg-[#050718] border-stone-500 max-h-[90dvh] overflow-hidden">
                                    <DialogHeader>
                                      <DialogTitle
                                        className={"text-stone-400 text-center"}
                                      >
                                        {mod.name} Profile
                                      </DialogTitle>
                                      <DialogDescription></DialogDescription>
                                    </DialogHeader>

                                    <div className="overflow-y-auto max-h-[60dvh] md:max-h-none">
                                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                        <div className="md:col-span-1">
                                          <div className="h-[180px]">
                                            <img
                                              src={
                                                mod.image || "/placeholder.svg"
                                              }
                                              alt={`${mod.name}`}
                                              className="w-full h-full rounded-xl object-cover"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-span-2">
                                          
                                            <h2 className="text-stone-300 text-lg md:text-xl font-semibold">
                                              {mod.name}
                                            </h2>
                                            <span className="bg-emerald-500 text-[10px]  rounded-full px-2 py-1 text-white">
                                              Available
                                            </span>
                                          
                                          <div
                                            className={`flex items-center gap-1 mt-2 text-stone-400 text-xs  font-bold uppercase tracking-widest`}
                                          >
                                            <MapPin
                                              className={`w-3 text-primary ${
                                                mod.name === booking.model &&
                                                "text-stone-400"
                                              }  h-5 w-5`}
                                            />
                                            {mod.city}
                                          </div>
                                          <div className="mt-4 flex gap-2 flex-wrap">
                                            {mod.tags.map((t, indx) => {
                                              return (
                                                <span
                                                  className="text-stone-300 text-xs rounded-full px-2 py-1 border border-gray-600"
                                                  key={indx}
                                                >
                                                  {t}
                                                </span>
                                              );
                                            })}
                                          </div>
                                          <div className="text-stone-300 flex gap-8 mt-4 grid-cols-3 ">
                                            <div className="">
                                              <h2 className="font-semibold text-lg md:text-xl ">
                                                {mod.age}
                                              </h2>
                                              <p className="md:text-sm text-xs text-stone-400 font-semibold">
                                                Age
                                              </p>
                                            </div>

                                            <div className="">
                                              <h2 className="font-semibold text-lg md:text-xl ">
                                                {mod.yearsOfExperience} +
                                              </h2>
                                              <p className="md:text-sm text-xs text-stone-400 font-semibold">
                                                Experience
                                              </p>
                                            </div>
                                            <div className="">
                                              <div className="flex items-center gap-2">
                                                <Star
                                                  className={`w-5 h-5  fill-primary`}
                                                />{" "}
                                                <h2 className="font-semibold text-lg md:text-xl ">
                                                  {mod.rating}{" "}
                                                  <span className="text-xs">
                                                    (120 reviews)
                                                  </span>
                                                </h2>
                                              </div>
                                              <p className="md:text-sm text-xs text-stone-400 font-semibold">
                                                Rating
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="mt-4 ">
                                        <p className="text-stone-300 font-semibold text-sm  border-b pb-2 border-gray-600">
                                          About
                                        </p>
                                        <p className="text-stone-400 mt-3 text-sm lg:text-base">
                                          {mod.bio}
                                        </p>
                                      </div>

                                      <div className="mt-4 ">
                                        <p className="text-stone-300 font-semibold text-sm  border-b pb-2 border-gray-600">
                                          Languages
                                        </p>
                                        <div className="text-stone-400 mt-3 text-sm flex space-x-3 flex-wrap lg:text-base">
                                          {mod.languages.map((lan, indx) => {
                                            return (
                                              <span key={indx}>{lan}</span>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>

                                    <DialogFooter>
                                      <DialogClose asChild>
                                        <Button
                                          onClick={(e) => e.stopPropagation()}
                                          variant="outline"
                                        >
                                          Close
                                        </Button>
                                      </DialogClose>
                                      <DialogClose asChild>
                                        <Button
                                          variant="secondary"
                                          type="submit"
                                        >
                                          Select
                                        </Button>
                                      </DialogClose>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </div>
                          {/* Selected check */}
                          {booking.model === mod.name && (
                            <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-1">
                              <Check size={14} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* address  */}
              {currentStep === 6 && (
                <div>
                  {booking.serviceType === "Home Service" && (
                    <>
                      <div className="">
                        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                          Enter Your Address Details
                        </h2>
                        <p className="text-xs sm:text-sm text-stone-400">
                          Your city, state
                        </p>
                      </div>
                      <div className="grid  mt-4 md:mt-6 md:grid-cols-2 gap-4">
                        {/* CITY */}
                        <div className="flex flex-col gap-2">
                          <Label>Select City</Label>
                          <Select
                            value={booking.city}
                            onValueChange={(value) => {
                              setBooking((prev) => ({
                                ...prev,
                                city: value,
                                area: "",
                              }));
                            }}
                          >
                            <SelectTrigger className="w-full  border-stone-400 py-5 outline-primary text-stone-300 text-sm ">
                              <SelectValue
                                className={"text-stone-300"}
                                placeholder="City"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {location.map((c) => (
                                  <SelectItem key={c.city} value={c.city}>
                                    {c.city}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* STATE */}
                        <div className="flex flex-col gap-2">
                          <Label>Select Area</Label>
                          <Select
                            value={booking.area}
                            onValueChange={(value) => {
                              setBooking((prev) => ({
                                ...prev,
                                area: value,
                              }));
                            }}
                            disabled={!booking.city}
                          >
                            <SelectTrigger className="w-full py-5 border-stone-400  text-stone-300 text-sm">
                              <SelectValue
                                className={"text-stone-400"}
                                placeholder="Select city first"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {selectedCity?.states.map((s) => (
                                  <SelectItem key={s} value={s}>
                                    {s}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid w-full mt-4 md:mt-6  items-center gap-2">
                        <Label htmlFor="address">Address Details</Label>
                        <Input
                          type="text"
                          id="address"
                          placeholder="Your Address Details Street"
                          name="address"
                          value={booking.address}
                          onChange={(e) =>
                            setBooking((prev) => ({
                              ...prev,
                              address: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="flex flex-col lg:flex-row mt-4 lg:gap-4 lg:mt-6">
                        <div className="grid w-full lg:w-1/2 items-center gap-2">
                          <Label htmlFor="buldingName">Building Name</Label>
                          <Input
                            type="text"
                            id="buldingName"
                            placeholder="Your Address Details Street"
                            name="building"
                            value={booking.buildingName}
                            onChange={(e) =>
                              setBooking((prev) => ({
                                ...prev,
                                buildingName: e.target.value,
                              }))
                            }
                          />
                        </div>

                        <div className="flex md:mt-6 w-full lg:w-1/2 lg:mt-0 mt-4 flex-col gap-2">
                          <Label>Residential Type</Label>
                          <Select
                            value={booking.residential}
                            onValueChange={(value) => {
                              setBooking((prev) => ({
                                ...prev,
                                residential: value,
                              }));
                            }}
                          >
                            <SelectTrigger className="w-full py-5 border-stone-400  text-stone-300 text-sm">
                              <SelectValue
                                className={"text-stone-400"}
                                placeholder="Select Residential"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {["Hotel", "Appartment", "Villa", "Other"].map(
                                  (r, indx) => {
                                    return (
                                      <SelectItem value={r} key={indx}>
                                        {r}
                                      </SelectItem>
                                    );
                                  }
                                )}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid w-full mt-4 md:mt-6  items-center  gap-2">
                        <Label>WhatsApp Number *</Label>
                        <PhoneInput
                          defaultCountry="AE"
                          international
                          countryCallingCodeEditable={false}
                          value={booking.whatsAppNumber}
                          onChange={(value) => {
                            setBooking((prev) => ({
                              ...prev,
                              whatsAppNumber: value,
                            }));
                          }}
                        />
                      </div>

                      <div className="grid mt-4 md:mt-6 w-full  items-center gap-2">
                        <Label>Building Photo</Label>
                        <FileUpload
                          title="Building Photo"
                          accept="image/*"
                          file={booking.buildingPhoto}
                          onFileSelect={(value) => {
                            setBooking((prev) => ({
                              ...prev,
                              buildingPhoto: value,
                            }));
                          }}
                        />
                      </div>
                    </>
                  )}

                  {booking.serviceType === "In-Shop Experience" && (
                    <>
                      <div className="">
                        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                          Our Shop Address
                        </h2>
                        <p className="text-xs sm:text-sm text-stone-400">
                          Choose your city and get our shop location.
                        </p>
                      </div>
                      {/* CITY */}
                      <div className="mt-4 md:mt-6 md:w-1/2 ">
                        <Label className={"mb-2"}>Select City</Label>
                        <Select
                          value={booking.city}
                          onValueChange={(value) => {
                            setBooking((prev) => ({
                              ...prev,
                              city: value,
                            }));
                          }}
                        >
                          <SelectTrigger className="w-full  border-stone-400 py-5 outline-primary text-stone-300 text-sm ">
                            <SelectValue
                              className={"text-stone-300"}
                              placeholder="City"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {location.map((c) => (
                                <SelectItem key={c.city} value={c.city}>
                                  {c.city}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>

                      {selectedCity && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:mt-6 gap-4  text-sm text-stone-300">
                          {selectedCity.shopLocation.map((s, indx) => (
                            <div
                              key={indx}
                              onClick={() => {
                                setBooking((prev) => ({
                                  ...prev,
                                  shopLocation: s,
                                }));
                              }}
                              className={`border-gray-600 ${
                                booking.shopLocation === s &&
                                "bg-primary text-white border-primary hover:bg-primary"
                              } border hover:bg-gray-900 w-full hover:border-primary/50 duration-300 py-2 px-4 cursor-pointer 
      inline-flex items-center gap-1 text-sm rounded-md text-stone-400 w-fit`}
                            >
                              <div className="flex items-center gap-2 md:gap-3">
                                <div>
                                  <MapPin size={30} />
                                </div>
                                <div>
                                  <h2 className="font-medium text-base md:text-lg">
                                    Shop Name
                                  </h2>

                                  <span>{s}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {booking.serviceType === "" && (
                    <div className="py-8 flex items-center flex-col">
                      <p className="text-stone-400 text-sm lg:text-base text-center">
                        select service type first.
                      </p>

                      <div>
                        <Button
                          className={"mt-4"}
                          onClick={() => setCurrentStep(2)}
                          variant="outline"
                        >
                          service type
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* payment  */}
              <div className="mt-6 md:mt-12 justify-end flex gap-4">
                <Button
                  disabled={currentStep === 1}
                  onClick={() => setCurrentStep(currentStep - 1)}
                  variant="outline"
                >
                  Previous
                </Button>
                <Button
                  disabled={currentStep === 8}
                  onClick={() => setCurrentStep(currentStep + 1)}
                  variant="secondary"
                >
                  Next
                </Button>
              </div>
            </div>

            {/* review  */}
            {currentStep !== 7 && (
              <div className="lg:col-span-1 border border-gray-700 bg-gray-900/50 p-4 md:p-6 rounded-md">
                <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                  Booking Summary
                </h2>

                <div className="space-y-4 mt-4 md:mt-6">
                  {/* City */}
                  {booking.city && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-stone-400">
                        <MapPin size={16} /> City
                      </span>
                      <span className="text-stone-300 font-medium">
                        {booking.city}
                      </span>
                    </div>
                  )}

                  {/* Service Type */}
                  {booking.serviceType && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-stone-400">
                        <Settings size={16} /> Service Type
                      </span>
                      <span className="text-stone-300 font-medium">
                        {booking.serviceType}
                      </span>
                    </div>
                  )}

                  {/* date */}
                  {booking.date && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-stone-400">
                        <Calendar size={16} /> Date
                      </span>
                      <span className="text-stone-300 font-medium">
                        {formatDate(booking.date)}
                      </span>
                    </div>
                  )}

                  {/* Service Name */}
                  {booking.serviceName && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-stone-400">
                        <Layout size={16} /> Service
                      </span>
                      <span className="text-stone-300 font-medium">
                        {booking.serviceName}
                      </span>
                    </div>
                  )}

                  {/* Duration  */}
                  {booking.duration && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-stone-400">
                        <Clock size={16} /> Duration
                      </span>
                      <span className="text-stone-300 font-medium">
                        {booking.duration}
                      </span>
                    </div>
                  )}

                  {/*Amount */}
                  {booking.amount && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-stone-400">
                        <DollarSign size={16} /> Amout
                      </span>
                      <span className="text-stone-300 font-medium">
                        {booking.amount} AED
                      </span>
                    </div>
                  )}

                  {/* Model */}
                  {booking.model && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-stone-400">
                        <User size={16} /> Model
                      </span>
                      <span className="text-stone-300 font-medium">
                        {booking.model}
                      </span>
                    </div>
                  )}
                </div>

                <div className="my-6 border-t flex items-center justify-between border-gray-600">
                  <h2 className="text-sm   font-semibold text-stone-300">
                    Estimated Total (AED)
                  </h2>
                  <span className="text-primary text-lg font-semibold">
                    {booking.amount} AED
                  </span>
                </div>
              </div>
            )}
          </div>

          {currentStep === 7 && (
            <div className="">
              <h2 className="lg:text-xl sm:text-lg text-base font-semibold text-stone-200 mb-6">
                Review Your Booking
              </h2>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* LEFT CARD — SERVICE DETAILS */}
                <div className="border border-gray-700 bg-gray-900/60 rounded-2xl p-4 md:p-6 space-y-4">
                  <h3 className="text-sm sm:text-base font-semibold text-stone-300 mb-2">
                    Service Details
                  </h3>

                  <div className="space-y-3 text-sm text-stone-300">
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-stone-400">
                        <MapPin size={16} /> City
                      </span>
                      {booking.city}
                    </div>

                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-stone-400">
                        <Settings size={16} /> Service Type
                      </span>
                      {booking.serviceType}
                    </div>

                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-stone-400">
                        <Calendar size={16} /> Date
                      </span>
                      {formatDate(booking.date)}
                    </div>

                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-stone-400">
                        <Clock size={16} /> Time
                      </span>
                      {booking.time}
                    </div>

                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-stone-400">
                        <Layout size={16} /> Service
                      </span>
                      {booking.serviceName}
                    </div>

                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-stone-400">
                        <User size={16} /> Model
                      </span>
                      {booking.model}
                    </div>

                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-stone-400">
                        <Clock size={16} /> Duration
                      </span>
                      {booking.duration}
                    </div>
                  </div>

                  {/* HIGHLIGHT AMOUNT */}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400 text-sm">
                        Total Amount
                      </span>

                      <span className="lg:text-2xl sm:text-xl text-lg font-bold text-primary">
                        {booking.amount} AED
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT CARD — HOME / SHOP CONDITIONAL */}
                <div className="border border-gray-700 bg-gray-900/60 rounded-2xl p-6 space-y-4">
                  {booking.serviceType === "Home Service" && (
                    <>
                      <h3 className="text-sm sm:text-base  font-semibold text-stone-300 mb-2">
                        Address Details
                      </h3>

                      <div className="space-y-3 text-sm text-stone-300">
                        <div className="flex justify-between">
                          <span className="text-stone-400">Area</span>
                          {booking.area}
                        </div>

                        <div className="flex justify-between">
                          <span className="text-stone-400">Address</span>
                          {booking.address}
                        </div>

                        <div className="flex justify-between">
                          <span className="text-stone-400">Building</span>
                          {booking.buildingName}
                        </div>

                        <div className="flex justify-between">
                          <span className="text-stone-400">
                            Residential Type
                          </span>
                          {booking.residential}
                        </div>

                        <div className="flex justify-between">
                          <span className="text-stone-400">WhatsApp</span>
                          {booking.whatsAppNumber}
                        </div>

                        {booking.buildingPhoto && (
                          <div>
                            <p className="text-stone-400 mb-2">
                              Building Photo
                            </p>
                            <img
                              src={URL.createObjectURL(booking.buildingPhoto)}
                              className="rounded-md w-32 border border-gray-700"
                            />
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {booking.serviceType === "In-Shop Experience" && (
                    <>
                      <h3 className="text-lg font-semibold text-stone-300 mb-2">
                        Shop Location
                      </h3>

                      <div className="space-y-3 text-sm text-stone-300">
                        <div className="flex justify-between">
                          <span className="text-stone-400">City</span>
                          {booking.city}
                        </div>

                        <div className="flex justify-between">
                          <span className="text-stone-400">Shop Address</span>
                          {booking.shopLocation}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setCurrentStep(6)}>
                  Previous
                </Button>

                <Button variant="secondary" onClick={() => setCurrentStep(8)}>
                  Proceed To Payment
                </Button>
              </div>
            </div>
          )}

          <div className={`${currentStep === 8 ? "flex" : "hidden"}`}>
            <h2 className="text-2xl text-stone-200">Payment </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
