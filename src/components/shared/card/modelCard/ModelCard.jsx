import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Heart,
  MapPin,
  Star,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const ModelCard = ({ model }) => {
  return (
    <div className="w-[300px] sm:w-auto mx-auto sm:mx-0">
      {/* Card Container */}
      <div className="relative rounded-xl overflow-hidden  shadow-xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${model.image})` }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute  inset-0 
            bg-gradient-to-t 
            from-black/90 
            via-black/60 
            to-transparent
          "
        />

        {/* Content Container */}
        <div className="relative z-10 p-6 pb-3 pl-3 flex flex-col h-full">
          {/* Top Badges */}
          <div className="flex justify-between items-start mb-32"></div>

          {/* Profile Info */}
          <div className="flex-1 flex flex-col justify-end">
            {/* Name and Location */}
            <div className="mb-2">
              <h2 className="md:text-lg  font-serif text-white ">
                {model.name}
              </h2>

              <p className="text-stone-300 text-xs flex items-center gap-1">
                <MapPin size={14} /> {model.city}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#a88c3d] flex gap-1 items-center font-semibold">
                <Star fill="#a88c3d" size={16} /> {model.rating.toFixed(1)}
              </span>
              <span className="text-stone-300 text-xs">
                ({model.reviews}) Reviews
              </span>
            </div>

            {/* Experience Details */}
            <p className="text-gray-300 text-xs mb-2">
              {model.yearsOfExperience}y Exp • {model.languages.length}{" "}
              Languages
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {model.tags.slice(0, 2).map((service, i) => (
                <span
                  key={i}
                  className="bg-primary/40 text-amber-300 text-[10px] px-3 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
              {model.tags.length > 2 && (
                <span className="bg-primary/40 text-amber-300 text-[10px] px-3 py-1 rounded-full">
                  +{model.tags.length}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Link className="w-full" href={`/model/${model.slug}`}>
                <Button className="flex-1 w-full rounded-lg " variant="outline">
                  <span>Profile</span> <ArrowUpRight />
                </Button>
              </Link>

              <Button className="rounded-lg py-4" variant="outline" size="sm">
                <Heart />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
