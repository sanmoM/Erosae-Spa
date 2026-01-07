import Container from "@/components/shared/other/Container";
import { location } from "@/utilities/data";
import { MapPin, Store } from "lucide-react";
import Link from "next/link";
import React from "react";

const City = () => {
  return (
    <Container>
      <div className="max-w-3xl mx-auto text-center mb-4 md:mb-12 ">
        <div className="flex justify-center items-center gap-2 mb-3 md:mb-6 ">
          <div className="h-[1px] w-8  bg-primary"></div>
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
            Global Presence
          </span>
          <div className="h-[1px] w-8 bg-primary"></div>
        </div>
        <h2 className="mb-2 heading-primary">Cities We Serve</h2>
        <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Experience luxury wellness in your city with our network of certified
          professionals.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {location.map((c, indx) => {
          return (
            <Link
              href={"/booking"}
              className={`relative overflow-hidden  rounded-md cursor-pointer text-sm border border-gray-600/50 hover:border-primary text-stone-400 group transition duration-300 origin-bottom  hover:-translate-y-2 hover:shadow-lg`}
              key={indx}
            >
              <img
                src={c.image.src}
                alt={c.city}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              <div className="absolute bottom-0 text-stone-200 w-full h-full p-2 bg-gradient-to-t from-black/80 to-black/0 flex items-end rounded-b-md">
                <div>
                    <div className="flex mb-2 items-center gap-1">
                  <MapPin size={16} />
                  <h3 className=" md:text-lg">{c.city}</h3>
                </div>
             <div className="flex items-center gap-1">
                 <Store size={14}/>
                 <p className="text-xs text-stone-400">12 shops</p>
             </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default City;
