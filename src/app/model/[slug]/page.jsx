"use client";

import Container from "@/components/shared/other/Container";
import { Button } from "@/components/ui/button";
import { spaModels } from "@/utilities/data";
import { CheckCircle, MapPin, Quote, Star } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


const ModelProfile = () => {
  const params = useParams();
  const { slug } = params;
  const [service, setService] = useState("");

  const data = spaModels.find((s) => s.slug === slug);
  console.log(data);

  const testimonials = [
    {
      id: 1,
      name: "Selena Gomez",
      role: "Acters & Model",
      rating: 4,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Albert",
      role: "Acters & Model",
      rating: 4,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Selena Gomez",
      role: "Acters & Model",
      rating: 4,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Sarah Albert",
      role: "Acters & Model",
      rating: 4,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    },
  ];

  return (
    <Container className={"mt-20"}>
      <div className="relative h-64  w-full overflow-hidden">
        <img
          src={"https://fimgs.net/himg/o.HeXRUjt0Boe.jpg"}
          alt="Workspace"
          className="w-full h-full object-cover"
        />
        {/* Bottom to Top Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3 md:p-6">
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-20 h-20 rounded-full border-2 border-white object-cover shadow-2xl"
                />
              </div>
              <div className="text-white space-y-1">
                <h2 className="md:text-2xl text-xl font-bold tracking-tight">
                  {data.name}
                </h2>
                <p className="flex items-center gap-1 text-xs md:text-sm opacity-80">
                  <MapPin size={14} /> {data.city} • {data.age} Years Old
                </p>
                <span className="bg-emerald-500 text-xs  rounded-full px-2 py-1 text-white">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Stats Grid */}
      <div className="grid grid-cols-3 mt-4 rounded-xl gap-px ">
        <div className="b py-5 flex flex-col items-center">
          <span className="font-bold text-stone-300 text-lg">
            {data.yearsOfExperience}y
          </span>
          <span className="text-[10px] text-stone-400 uppercase font-semibold tracking-widest">
            Experience
          </span>
        </div>
        <div className=" py-5 flex flex-col items-center">
          <span className="font-bold text-stone-300 text-lg">100%</span>
          <span className="text-[10px] text-stone-400 uppercase font-semibold tracking-widest">
            Response
          </span>
        </div>
        <div className="py-5 flex flex-col items-center ">
          <span className="font-bold text-primary flex items-center gap-1 text-lg">
            <Star size={16} fill="currentColor" /> {data.rating}
          </span>

          <span className="text-[10px] text-stone-400 uppercase font-semibold tracking-widest">
            {data.reviews} Reviews
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-4 lg:mt-6">
        <div className="lg:col-span-2 border  border-gray-700 rounded-xl bg-gray-900/50 p-3 md:p-6">
          <h2 className="text-stone-300 border-b border-gray-700 pb-1 font-semibold">
            About
          </h2>
          <p className="text-sm md:text-sm mt-2 text-stone-400">{data.bio}</p>

          <h2 className="text-stone-300 border-b border-gray-700 pb-1 mt-12 border-gray-700 pb-1 font-semibold">
            Review
          </h2>

          <div className="space-y-4 mt-3">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={500}
              breakpoints={{
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    key={testimonial.id}
                    className="bg-gray-800/50 rounded-2xl p-3 md:p-6 relative h-full"
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < testimonial.rating
                              ? "fill-primary text-primary"
                              : "fill-primary/10 text-primary/50"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 text-primary/20">
                      <svg
                        className="w-16 h-16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Testimonial Text */}

                    <p className="text-stone-400 text-sm leading-relaxed  mb-4">
                      {testimonial.text}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary p-1">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-serif md:text-base text-sm mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* {testimonials.map((testimonial) => (
            
              <div key={testimonial.id} className="bg-gray-800/50 rounded-2xl p-3 md:p-6 relative h-full">
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < testimonial.rating
                          ? "fill-primary text-primary"
                          : "fill-primary/10 text-primary/50"
                      }`}
                    />
                  ))}
                </div>

               
                <div className="absolute top-8 right-8 text-primary/20">
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                

                <p className="text-stone-400 text-sm leading-relaxed  mb-4">
                  {testimonial.text}
                </p>

                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary p-1">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-serif md:text-base text-sm mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
           
          ))} */}
          </div>
        </div>
        <div className="lg:col-span-1 border flex flex-col justify-between border-gray-700 rounded-xl bg-gray-900/50 p-3 md:p-6">
          <div>
            <h2 className="text-stone-300 border-b border-gray-700 pb-1 font-semibold">
              Services
            </h2>
            <div className="flex flex-wrap mt-2 gap-x-2 gap-y-3">
              {data.tags.map((s, indx) => {
                return (
                  <div
                    onClick={() => {
                      setService(s);
                    }}
                    className={`border-gray-600 ${
                      service === s &&
                      "bg-primary text-white border-primary hover:bg-primary"
                    } border hover:bg-gray-900 duration-400 py-2 px-4 cursor-pointer text-sm rounded-full text-stone-400`}
                    key={indx}
                  >
                    {s}
                  </div>
                );
              })}
            </div>
          </div>
          <Button variant="outline" size="lg" className={"w-full mt-10"}>
            Book Now
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ModelProfile;
