"use client";

import Container from "@/components/shared/other/Container";
import { Button } from "@/components/ui/button";
import { services, spaModels } from "@/utilities/data";
import { Check, MapPin, Star } from "lucide-react";
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
  const filteredServices = services.filter((service) =>
    data.tags.some(
      (tag) => tag.toLowerCase() === service.category.toLowerCase()
    )
  );

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
          <span className="text-[10px] text-stone-400 uppercase">
            Experience
          </span>
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
      <div className="grid lg:grid-cols-3 gap-6 mt-6 items-start overflow-hidden">
        {/* Left */}

        <div className="lg:col-span-2 border border-gray-700 rounded-xl bg-gray-900/50 p-4 md:p-6">
          <div className="">
            <h2 className="text-stone-300 border-b border-gray-700 pb-2 font-semibold">
              Photo Gallery
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
              {data.imageGallery.map((img, index) => (
                <div
                  key={index}
                  className="w-full h-20 md:h-28 cursor-pointer rounded-md overflow-hidden border border-gray-700"
                >
                  <img
                    src={img}
                    alt={`gallery-${index}`}
                    className="w-full h-full object-cover hover:scale-110 duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-stone-300 border-b mt-6 border-gray-700 pb-2 font-semibold">
            About
          </h2>

          <p className="text-sm mt-3 text-stone-400">{data.bio}</p>

          <div className="mt-4 ">
            <p className="text-stone-300 pb-2 font-semibold">Service Provide</p>
            <div className="text-stone-400 text-sm flex gap-2 flex-wrap lg:text-base">
              {data.tags.map((lan, indx) => {
                return (
                  <div
                    className="border bg-gray-800/50 border-gray-700 text-sm px-2 py-1 rounded"
                    key={indx}
                  >
                    {lan}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 ">
            <p className="text-stone-300 pb-2 font-semibold">Languages</p>
            <div className="text-stone-400 text-sm flex space-x-3 flex-wrap lg:text-base">
              {data.languages.map((lan, indx) => {
                return <span key={indx}>{lan}</span>;
              })}
            </div>
          </div>

          <h2 className="text-stone-300 border-b border-gray-700 pb-2 mt-10 font-semibold">
            Review (120)
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
              Services Provide
            </h2>

            <div className="grid grid-cols-1 gap-4 mt-4 md:mt-6">
              {filteredServices.map((s, indx) => {
                return (
                  <div
                    onClick={() => {
                      setService(s.title);
                    }}
                    key={indx}
                    className={`${
                      s.title === service
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
                        <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                          {s.description}
                        </p>
                      </div>

                      {/* Price */}
                      <p className="text-sm font-medium text-[#d6b26a] mt-2">
                        From {s.durations[0].price} AED
                      </p>
                    </div>
                    {/* Selected check */}
                    {service === s.title && (
                      <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-1">
                        <Check size={14} />
                      </div>
                    )}
                  </div>
                );
              })}
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
