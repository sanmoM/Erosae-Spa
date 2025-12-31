"use client";

import Container from "@/components/shared/other/Container";
import { Button } from "@/components/ui/button";
import { spaModels } from "@/utilities/data";
import { MapPin, Star } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const ModelProfile = () => {
  const params = useParams();
  const { slug } = params;
  const [service, setService] = useState("");

  const data = spaModels.find((s) => s.slug === slug);

  if (!data) return null;

  const testimonials = [
    {
      id: 1,
      name: "Selena Gomez",
      role: "Actress & Model",
      rating: 4,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Albert",
      role: "Actress & Model",
      rating: 4,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    },
  ];

  return (
    <Container className="mt-20 overflow-x-hidden">
      {/* Header */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <img
          src="https://fimgs.net/himg/o.HeXRUjt0Boe.jpg"
          alt="Cover"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4 md:p-6">
          <div className="flex items-center gap-4">
            <img
              src={data.image}
              alt={data.name}
              className="w-20 h-20 rounded-full border-2 border-white object-cover"
            />

            <div className="text-white space-y-1">
              <h2 className="text-xl md:text-2xl font-bold">{data.name}</h2>
              <p className="flex items-center gap-1 text-xs md:text-sm opacity-80">
                <MapPin size={14} /> {data.city} • {data.age} Years Old
              </p>
              <span className="inline-block bg-emerald-500 text-xs px-2 py-1 rounded-full">
                Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 mt-4 rounded-xl bg-gray-900/50">
        <div className="py-4 text-center">
          <p className="text-lg font-bold text-stone-300">
            {data.yearsOfExperience}y
          </p>
          <span className="text-[10px] text-stone-400 uppercase">Experience</span>
        </div>

        <div className="py-4 text-center">
          <p className="text-lg font-bold text-stone-300">100%</p>
          <span className="text-[10px] text-stone-400 uppercase">Response</span>
        </div>

        <div className="py-4 text-center">
          <p className="flex justify-center items-center gap-1 text-lg font-bold text-primary">
            <Star size={16} fill="currentColor" /> {data.rating}
          </p>
          <span className="text-[10px] text-stone-400 uppercase">
            {data.reviews} Reviews
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-6 mt-6 overflow-hidden">
        {/* Left */}
        <div className="lg:col-span-2 border border-gray-700 rounded-xl bg-gray-900/50 p-4 md:p-6">
          <h2 className="text-stone-300 border-b border-gray-700 pb-2 font-semibold">
            About
          </h2>

          <p className="text-sm mt-3 text-stone-400">{data.bio}</p>

          <h2 className="text-stone-300 border-b border-gray-700 pb-2 mt-10 font-semibold">
            Review
          </h2>

          {/* Swiper FIX */}
          <div className="w-full max-w-full overflow-hidden mt-4">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={16}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop
              speed={500}
              className="w-full"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id} className="!w-full">
                  <div className="relative bg-gray-800/50 rounded-xl p-4 md:p-6 w-full">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={
                            i < t.rating
                              ? "text-primary fill-primary"
                              : "text-primary/30"
                          }
                        />
                      ))}
                    </div>

                    <p className="text-sm text-stone-400 mb-4">{t.text}</p>

                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-white text-sm">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right */}
        <div className="border border-gray-700 rounded-xl bg-gray-900/50 p-4 md:p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-stone-300 border-b border-gray-700 pb-2 font-semibold">
              Services
            </h2>

            <div className="flex flex-wrap gap-2 mt-3">
              {data.tags.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setService(s)}
                  className={`px-4 py-2 text-sm rounded-full border transition
                    ${
                      service === s
                        ? "bg-primary text-white border-primary"
                        : "border-gray-600 text-stone-400 hover:bg-gray-800"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <Button variant="outline" size="lg" className="w-full mt-8">
            Book Now
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ModelProfile;
