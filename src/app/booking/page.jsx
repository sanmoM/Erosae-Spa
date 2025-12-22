"use client";

import ModelCard from "@/components/shared/card/modelCard/ModelCard";
import Container from "@/components/shared/other/Container";
import PageBanner from "@/components/shared/other/PageBanner";
import { Button } from "@/components/ui/button";
import { services, spaModels, uaeCities } from "@/utilities/data";
import {
  Calendar,
  Check,
  CreditCard,
  Eye,
  Layout,
  MapPin,
  Settings,
  User,
} from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [city, setCity] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [service, setService] = useState("");
  const [model, setModel] = useState("");
  const [data, setDate] = useState("");
  const [address, setAdress] = useState("");

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
            <div className="flex-1 border  border-gray-700 bg-gray-900/30 md:p-6 p-4 rounded-md">
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
                    {uaeCities.map((c, indx) => {
                      return (
                        <div
                          onClick={() => setCity(c.name)}
                          className={`border-gray-600 ${
                            city === c.name &&
                            "bg-primary text-white border-primary hover:bg-primary"
                          } border hover:bg-gray-900 duration-400 py-2 px-4 cursor-pointer text-sm rounded-full text-stone-400`}
                          key={indx}
                        >
                          {c.name}
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
                          onClick={() => setService(s.category)}
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
                  <div className=" md:mt-6  space-y-4">
                    {spaModels.map((mod, indx) => {
                      return (
                        <div
                          onClick={() => setModel(mod.name)}
                          className={`border-gray-600 ${
                            model === mod.name &&
                            "bg-primary text-white border-primary hover:bg-primary"
                          } border hover:bg-gray-900 duration-400 py-2 px-4 cursor-pointer text-sm rounded-full text-stone-400`}
                          key={indx}
                        >
                          {mod.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* review  */}
            <div className="flex-1 border border-gray-700 bg-gray-900/30 p-4 md:p-6  rounded-md">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-300">
                Review
              </h2>
              <div className="space-y-2 mt-4 md:mt-6">
                <h4 className="text-stone-400 text-sm">
                  City :{" "}
                  <span className="text-stone-300">{city ? city : "_"}</span>
                </h4>
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
                  <span className="text-stone-300">{model ? model : "_"}</span>
                </h4>
                <h4 className="text-stone-400 text-sm">
                  Date :{" "}
                  <span className="text-stone-300">{data ? data : "_"}</span>
                </h4>
                <h4 className="text-stone-400 text-sm">
                  Address :{" "}
                  <span className="text-stone-300">
                    {address ? address : "_"}
                  </span>
                </h4>
                <h4 className="text-stone-400 text-sm">
                  Current Step :{" "}
                  <span className="text-stone-300">{currentStep}/8</span>
                </h4>
              </div>
              <div className="mt-4 md:mt-6 flex gap-4">
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
