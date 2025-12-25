"use client";

import ModelCard from "@/components/shared/card/modelCard/ModelCard";
import Container from "@/components/shared/other/Container";
import DateTimePicker from "@/components/shared/other/DateTimePicker";
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
import { services, spaModels, location } from "@/utilities/data";
import {
  ArrowUpRight,
  Calendar,
  Check,
  CreditCard,
  Eye,
  Layout,
  MapPin,
  Settings,
  ShieldCheck,
  Star,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [city, setCity] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [service, setService] = useState("");
  const [model, setModel] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [period, setPeriod] = useState("");
  const [userState, setUserState] = useState("");
  const [address, setAdress] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [residential, setResidential] = useState("");
  const [whatsAppNumber, setwhatsAppNumber] = useState("");
  const [buildingPhoto, setBuildingPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [shopLoaction, setShopLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [amount,setAmount] = useState("");

  const selectedCity = location.find((c) => c.city === city);
  const selectedService = services.find((s) => s.category === service);

  const STEPS = [
    { id: 1, name: "City", icon: MapPin },
    { id: 2, name: "Service Type", icon: Settings },
    { id: 3, name: "Service", icon: Layout },
    { id: 4, name: "Model(s)", icon: User },
    { id: 5, name: "Date", icon: Calendar },
    { id: 6, name: "Address", icon: MapPin },
    { id: 7, name: "Review", icon: Eye },
    { id: 8, name: "Payment", icon: CreditCard },
  ];

  useEffect(() => {
    if (!buildingPhoto) {
      setPhotoPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(buildingPhoto);
    setPhotoPreview(objectUrl);

    // cleanup (important)
    return () => URL.revokeObjectURL(objectUrl);
  }, [buildingPhoto]);

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
                        ? "bg-primary border-stone-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]"
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
          <div className="flex gap-6 flex-col md:flex-row">
            {/* steps  */}
            <div
              className={`flex-1 border ${
                currentStep > 6 && "hidden"
              }  border-gray-700 bg-gray-900/30 md:p-6 p-4 rounded-md`}
            >
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
                  <div className="flex flex-wrap mt-4 md:mt-6 gap-x-2 gap-y-3">
                    {location.map((c, indx) => {
                      return (
                        <div
                          onClick={() => {
                            setCity(c.city);
                            setShopLocation("");
                            setUserState("");
                          }}
                          className={`border-gray-600 ${
                            city === c.city &&
                            "bg-primary text-white border-primary hover:bg-primary"
                          } border hover:bg-gray-900 duration-400 py-2 px-4 cursor-pointer text-sm rounded-full text-stone-400`}
                          key={indx}
                        >
                          {c.city}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

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
                  <div className="flex flex-wrap mt-4 md:mt-6 gap-x-2 gap-y-3">
                    <div
                      onClick={() => setServiceType("In House")}
                      className={`border-gray-600 ${
                        serviceType === "In House" &&
                        "bg-primary text-white border-primary hover:bg-primary"
                      } border hover:bg-gray-900 duration-400 py-2 px-4 cursor-pointer text-sm rounded-full text-stone-400`}
                    >
                      In House
                    </div>
                    <div
                      onClick={() => setServiceType("In Shop")}
                      className={`border-gray-600 ${
                        serviceType === "In Shop" &&
                        "bg-primary text-white border-primary hover:bg-primary"
                      } border hover:bg-gray-900 duration-400 py-2 px-4 cursor-pointer text-sm rounded-full text-stone-400`}
                    >
                      In Shop
                    </div>
                  </div>
                  {serviceType === "In House" && (
                    <div className="mt-4 md:mt-6 rounded-md border md:text-sm border-primary/40 bg-primary/10 p-3 text-xs text-stone-300">
                      <span className="font-bold">Note:</span> Transportation
                      charge for the model has been included (In-House service).
                    </div>
                  )}
                </div>
              )}
              {currentStep === 3 && (
                <div>
                  <div className="">
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                      Select Service
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400">
                      Choose your service category.
                    </p>
                  </div>
                  <div className="flex flex-wrap mt-4 md:mt-6 gap-x-2 gap-y-3">
                    {services.map((s, indx) => {
                      return (
                        <div
                          onClick={() => {
                            setService(s.category)
                            setDuration("");
                            setAmount("")
                          
                          }}
                          className={`border-gray-600 ${
                            service === s.category &&
                            "bg-primary text-white border-primary hover:bg-primary"
                          } border hover:bg-gray-900 duration-400 py-2 px-4 cursor-pointer text-sm rounded-full text-stone-400`}
                          key={indx}
                        >
                          {s.category}
                        </div>
                      );
                    })}
                  </div>

                  {service && (
                    <>
                      <h2 className="text-sm  font-semibold mt-4 md:mt-6 text-stone-400">
                        Select Duration
                      </h2>

                      <div className="flex flex-wrap mt-4  gap-x-2 gap-y-3">
                        {selectedService.durations.map((d, indx) => (
                          <>
                            <div
                              onClick={() => {
                                setDuration(d.time)
                                setAmount(d.price)
                              }}
                              className={`border-gray-600 ${
                                duration === d.time &&
                                "bg-primary text-white border-primary hover:bg-primary"
                              } border hover:bg-gray-900 duration-400 py-2 px-4 cursor-pointer text-sm rounded-full text-stone-400`}
                              key={indx}
                            >
                              {d.time}
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  )}

                  {
                    amount && <p className="text-xs sm:text-sm mt-6 text-stone-400">
                        Amount (AED) : {amount} {" "} {serviceType === "In House"&&"(without transportation charge)"}
                      </p>
                  }
                </div>
              )}

              {currentStep === 4 && (
                <div>
                  <div className="">
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                      Select Model
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400">
                      Choose model.
                    </p>
                  </div>
                  <div className=" mt-4 md:mt-6 overflow-y-scroll max-h-[500px] space-y-4">
                    {spaModels.map((mod, indx) => {
                      return (
                        <div
                          onClick={() => setModel(mod.name)}
                          className={`border-gray-600 ${
                            model === mod.name &&
                            "bg-primary text-white border-primary hover:bg-primary"
                          } border hover:bg-gray-900 duration-400 p-5 cursor-pointer text-sm rounded-md text-stone-400`}
                          key={indx}
                        >
                          <div className="flex items-center gap-5">
                            <div className="relative flex-shrink-0">
                              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/5 group-hover:border-primary/40 transition-colors duration-500">
                                <img
                                  src={mod.image}
                                  alt={mod.name}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                              </div>
                              {mod.verified && (
                                <div className="absolute -bottom-1 -right-1 bg-primary p-1 rounded-full border-4 border-[#141414] group-hover:border-[#1a1a1a] transition-colors shadow-lg">
                                  <ShieldCheck className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start">
                                <h3 className="md:text-lg  font-serif text-white group-hover:text-primary transition-colors truncate pr-2">
                                  {mod.name}
                                </h3>
                                <div
                                  className={`flex items-center gap-1 text-primary bg-primary/10 px-2 py-0.5 rounded-md text-[10px] font-black border border-primary/30 ${
                                    mod.name === model &&
                                    "text-white border-white"
                                  }`}
                                >
                                  <Star
                                    className={`w-2.5 h-2.5 ${
                                      mod.name === model && "fill-white"
                                    } fill-primary`}
                                  />
                                  {mod.rating}
                                </div>
                              </div>

                              <div
                                className={`flex items-center gap-1 text-stone-400 text-[10px] mt-1 font-bold uppercase ${
                                  mod.name === model && "text-white"
                                } tracking-widest`}
                              >
                                <MapPin
                                  className={`w-3 text-primary ${
                                    mod.name === model && "text-white"
                                  }  h-3`}
                                />
                                {mod.city}
                              </div>

                              <div className="flex justify-end">
                                {/* <div className="flex items-baseline gap-1 mt-2">
                                  <span
                                    className={`text-lg ${
                                      mod.name === model && "text-white"
                                    } text-primary font-medium `}
                                  >
                                    {mod.price}
                                  </span>
                                  <span
                                    className={`text-[10px] text-stone-400 ${
                                      mod.name === model && "text-white"
                                    } font-bold`}
                                  >
                                    {mod.currency}
                                  </span>
                                </div> */}

                                <Dialog>
                                  <DialogTrigger asChild>
                                    <button
                                      onClick={(e) => e.stopPropagation()}
                                      className={`flex items-center gap-2 bg-white/5 hover:bg-primary cursor-pointer text-white px-5 py-2.5 rounded-xl transition-all duration-300 text-xs font-bold border border-white/10 hover:border-primary group/btn shadow-xl ${
                                        mod.name === model && "hidden"
                                      }`}
                                    >
                                      Portfolio
                                      <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-all" />
                                    </button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[800px] bg-[#050718] border-stone-500">
                                    <DialogHeader>
                                      <DialogTitle
                                        className={"text-stone-200 text-center"}
                                      >
                                        Profile
                                      </DialogTitle>
                                      <DialogDescription>
                                        Make changes to your profile here. Click
                                        save when you&apos;re done.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4">
                                      <div className="grid gap-3">
                                        <Label htmlFor="name-1">Name</Label>
                                        <Input
                                          id="name-1"
                                          name="name"
                                          defaultValue="Pedro Duarte"
                                        />
                                      </div>
                                      <div className="grid gap-3">
                                        <Label htmlFor="username-1">
                                          Username
                                        </Label>
                                        <Input
                                          id="username-1"
                                          name="username"
                                          defaultValue="@peduarte"
                                        />
                                      </div>
                                    </div>
                                    <DialogFooter>
                                      <DialogClose asChild>
                                        <Button variant="outline">Close</Button>
                                      </DialogClose>
                                      {/* <Button type="submit">
                                          Save changes
                                        </Button> */}
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div>
                  <div className="">
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                      Select Date and Time
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400">
                      Select your service time.
                    </p>
                  </div>
                  <div className=" mt-4 md:mt-6  location-scroll space-y-4">
                    <DateTimePicker
                      date={selectedDate}
                      setDate={setSelectedDate}
                      time={selectedTime}
                      setTime={setSelectedTime}
                      period={period}
                      setPeriod={setPeriod}
                    />
                  </div>
                </div>
              )}

              {currentStep === 6 && (
                <div>
                  {serviceType === "In House" ? (
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
                            value={city}
                            onValueChange={(value) => {
                              setCity(value);
                              setUserState("");
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
                            value={userState}
                            onValueChange={setUserState}
                            disabled={!city}
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
                          value={address}
                          onChange={(e) => setAdress(e.target.value)}
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
                            value={buildingName}
                            onChange={(e) => setBuildingName(e.target.value)}
                          />
                        </div>

                        <div className="flex md:mt-6 w-full lg:w-1/2 lg:mt-0 mt-4 flex-col gap-2">
                          <Label>Residential Type</Label>
                          <Select
                            value={residential}
                            onValueChange={setResidential}
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
                          value={whatsAppNumber}
                          onChange={setwhatsAppNumber}
                        />
                      </div>

                      <div className="grid mt-4 md:mt-6 w-full  items-center gap-2">
                        <Label>Building Photo</Label>
                        <FileUpload
                          title="Building Photo"
                          accept="image/*"
                          file={buildingPhoto}
                          onFileSelect={setBuildingPhoto}
                        />
                      </div>
                    </>
                  ) : (
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
                          value={city}
                          onValueChange={(value) => {
                            setCity(value);
                            setUserState("");
                            setShopLocation("");
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
                        <div className="mt-4 md:mt-6 space-y-3 flex flex-wrap gap-2 text-sm text-stone-300">
                          {selectedCity.shopLocation.map((s, indx) => (
                            <div
                              key={indx}
                              onClick={() => setShopLocation(s)}
                              className={`border-gray-600 ${
                                shopLoaction === s &&
                                "bg-primary text-white border-primary hover:bg-primary"
                              } border hover:bg-gray-900 duration-300 py-2 px-4 cursor-pointer 
      inline-flex items-center gap-1 text-sm rounded-full text-stone-400 w-fit`}
                            >
                              <MapPin className="w-4 h-4" />
                              <span>{s}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* review  */}
            <div className="flex-1 border border-gray-700 bg-gray-900/30 p-4 md:p-6  rounded-md">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                Review
              </h2>

              <div
                className={`flex flex-col ${
                  currentStep === 7 ? "lg:flex-row lg:gap-12" : ""
                }`}
              >
                <div
                  className={`space-y-2 mt-4 md:mt-6 ${
                    currentStep === 7 && "lg:w-1/2"
                  }`}
                >
                  <h2 className="md:text-sm text-xs text-stone-200 font-medium border-b border-primary/60 pb-2">
                    Service Info
                  </h2>
                  <h4 className="text-stone-400 text-sm">
                    Service Type :{" "}
                    <span className="text-stone-300">
                      {serviceType ? serviceType : "_"}
                    </span>
                  </h4>
                  <h4 className="text-stone-400 text-sm">
                    Service :{" "}
                    <span className="text-stone-300">
                      {service ? service : "_"}
                    </span>
                  </h4>
                  <h4 className="text-stone-400 text-sm">
                    Model :{" "}
                    <span className="text-stone-300">
                      {model ? model : "_"}
                    </span>
                  </h4>
                  <h4 className="text-stone-400 text-sm">
                    Date :{" "}
                    <span className="text-stone-300">
                      {selectedDate ? selectedDate.toLocaleDateString() : "_"}
                    </span>
                  </h4>

                  <h4 className="text-stone-400 text-sm">
                    Time :{" "}
                    <span className="text-stone-300">
                      {selectedTime || "_"}
                    </span>
                  </h4>
                  <h4 className="text-stone-400 text-sm">
                    Duration :{" "}
                    <span className="text-stone-300">{duration || "_"}</span>
                  </h4>
                  <h4 className="text-stone-400 text-sm">
                    Amount (AED) :{" "}
                    <span className="text-stone-300">{amount || "_"}</span>
                  </h4>

                  {serviceType === "In Shop" && (
                    <>
                      <h4 className="text-stone-400 text-sm">
                        City :{" "}
                        <span className="text-stone-300">{city || "_"}</span>
                      </h4>
                      <h4 className="text-stone-400 text-sm">
                        Shop Location :{" "}
                        <span className="text-stone-300">
                          {city ? `${city}, ${shopLoaction}` : "_"}
                        </span>
                      </h4>
                    </>
                  )}
                </div>

                {serviceType === "In House" && (
                  <>
                    <div
                      className={`space-y-2 mt-4 ${
                        currentStep === 7 && "lg:w-1/2"
                      } md:mt-6 
                }`}
                    >
                      <h2 className="md:text-sm text-xs text-stone-200 font-medium border-b border-primary/60 pb-2">
                        Personal Info
                      </h2>
                      <h4 className="text-stone-400 text-sm">
                        City :{" "}
                        <span className="text-stone-300">
                          {city ? city : "_"}
                        </span>
                      </h4>
                      <h4 className="text-stone-400  text-sm">
                        Address :{" "}
                        <span className="text-stone-300 break-words whitespace-normal">
                          {city ? `${city}, ${userState}, ${address}` : "_"}
                        </span>
                      </h4>

                      <h4 className="text-stone-400 text-sm">
                        Building Name :{" "}
                        <span className="text-stone-300">
                          {buildingName ? buildingName : "_"}
                        </span>
                      </h4>
                      <h4 className="text-stone-400 text-sm">
                        Residential Type :{" "}
                        <span className="text-stone-300">
                          {residential ? residential : "_"}
                        </span>
                      </h4>

                      <h4 className="text-stone-400 text-sm">
                        WhatsApp Number :{" "}
                        <span className="text-stone-300">
                          {whatsAppNumber ? whatsAppNumber : "_"}
                        </span>
                      </h4>

                      <div className="flex items-center gap-3 text-sm text-stone-400">
                        <span className="font-medium">Building Photo:</span>

                        {photoPreview ? (
                          <img
                            src={photoPreview}
                            className="h-14 w-14 rounded-md object-cover border border-primary/40"
                          />
                        ) : (
                          <span className="text-stone-300">_</span>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 md:mt-12 justify-between justify-between flex gap-4">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
