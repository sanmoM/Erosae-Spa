"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Container from "@/components/shared/other/Container";

const Testimonial = () => {
  const swiperRef = useRef(null);

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
      name: "Michael Chen",
      role: "Acters & Model",
      rating: 5,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
  ];
  return (
    <section className="">
      <Container className="">
        {/* Header */}
        <div className="md:flex items-start justify-between mb-4 md:mb-12">
          <div>
            <div className="flex md:justify-start justify-center items-center gap-2 mb-3 md:mb-6 ">
              <div className="h-[1px] w-8  bg-primary"></div>
              <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
                OUR TESTIMONIALS
              </span>
              <div className="h-[1px] w-8 bg-primary"></div>
            </div>

            <h2 className="md:text-4xl mb-2 sm:text-3xl text-2xl md:text-left text-center font-serif text-gray-300  italic">
              Peoples Talk About Us
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center gap-4 mt-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-14 h-14 cursor-pointer rounded-full border-2 border-primary bg-transparent  hover:bg-primary text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-14 h-14 rounded-full cursor-pointer border-2 border-primary bg-transparent  hover:bg-primary text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
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
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-[#252525] rounded-2xl p-6 md:p-8 relative h-full">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
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

                <p className="text-stone-400 text-sm md:text-base leading-relaxed  mb-8">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary p-1">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-serif md:text-xl text-lg mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-14 h-14 rounded-full border-2 border-primary bg-transparent text-white hover:bg-primary transition-all duration-300 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-14 h-14 rounded-full border-2 border-primary bg-transparent text-white hover:bg-primary transition-all duration-300 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
