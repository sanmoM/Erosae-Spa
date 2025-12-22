import { ArrowUpRight, MapPin, ShieldCheck, Star } from "lucide-react";
import React from "react";

const ModelCard = ({model}) => {
  return (
    <div
      className="group relative bg-[#303030] rounded-lg border border-white/5 p-5 transition-all duration-500 hover:bg-[#1a1a1a] hover:border-primary/40"
    >
      <div className="flex items-center gap-5">
        <div className="relative flex-shrink-0">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/5 group-hover:border-primary/40 transition-colors duration-500">
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          {model.verified && (
            <div className="absolute -bottom-1 -right-1 bg-primary p-1 rounded-full border-4 border-[#141414] group-hover:border-[#1a1a1a] transition-colors shadow-lg">
              <ShieldCheck className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h3 className="md:text-lg  font-serif text-white group-hover:text-primary transition-colors truncate pr-2">
              {model.name}
            </h3>
            <div className="flex items-center gap-1 text-primary bg-primary/10 px-2 py-0.5 rounded-md text-[10px] font-black border border-primary/30">
              <Star className="w-2.5 h-2.5 fill-primary" />
              {model.rating}
            </div>
          </div>
          <div className="flex items-center gap-1 text-stone-400 text-[10px] mt-1 font-bold uppercase tracking-widest">
            <MapPin className="w-3 text-primary h-3" />
            {model.city}
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {model.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] bg-stone-800 text-stone-400 px-2 py-0.5 rounded-md border border-white/5 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-primary/30 flex items-center justify-between">
        <div>
          <span className="text-[9px] text-stone-500 uppercase font-black tracking-widest block mb-0.5">
            Session rate
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-lg text-primary font-medium ">
              {model.price}
            </span>
            <span className="text-[10px] text-stone-400 font-bold">
              {model.currency}
            </span>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-white/5 hover:bg-primary cursor-pointer text-white px-5 py-2.5 rounded-xl transition-all duration-300 text-xs font-bold border border-white/10 hover:border-primary group/btn shadow-xl">
          Portfolio
          <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-all" />
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
