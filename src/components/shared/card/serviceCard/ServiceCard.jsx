import { Button } from "@/components/ui/button";
import { ChevronRight, Timer } from "lucide-react";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
   
    <div
      key={service.id}
      className="group relative bg-[#303030] rounded-xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)]"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
        <div className="absolute top-6 left-6 flex gap-2">
          <div className="bg-primary text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">
            {service.tag}
          </div>
        </div>
      </div>

      <div className="md:px-6 px-4 pb-4 md:pb-8 -mt-16 relative z-10">
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-2 rounded-md inline-flex text-primary ">
            {service.icon}
          </div>
          <div>
            <span className="text-stone-300 text-xs uppercase tracking-widest font-bold">
               {service.category}
            </span>
          </div>
        </div>

        <h3 className="md:text-2xl font-serif text-white mb-3 tracking-tight">
          {service.title}
        </h3>
        <p className="text-stone-400 text-sm leading-relaxed mb-6 font-light">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone-300 text-xs font-medium bg-stone-900/50 px-3 py-1.5 rounded-full border border-white/5">
            <Timer className="w-3 h-3 text-primary" />
            {service.durations[0].time}
          </div>
          <div className="flex gap-2 items-end">
             <span className="text-xl font-medium text-primary tracking-tighter">{service.durations[0].price}</span>
             <span className="text-base font-medium text-stone-300">AED</span>
          </div>
        </div>
        {/* Action Button */}
        
        <Button variant="secondary" className={"rounded-full hover:gap-4 active:scale-95 mt-4 py-6 w-full"}>Secure Your Session <ChevronRight className="w-4 h-4" /></Button> 
      </div>
    </div>
  );
};

export default ServiceCard;
