"use client";

import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import slider1 from "@/images/banner/slider1.png";
import slider2 from "@/images/banner/slider2.png";
import slider3 from "@/images/banner/slider3.png";
import CountUp from "react-countup";
import React from "react";
import Link from "next/link";

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  const slides = [
    {
      id: 1,
      title: "Relax. Rejuvenate. Renew.",
      subtitle:
        "Step into a world of tranquility where expert therapists, soothing environments, and personalized wellness treatments come together to restore your body, calm your mind, and refresh your spirit.",
      image: slider1,
      primaryButton: "Book Appointment",
      secondaryButton: "Explore Services",
    },
    {
      id: 2,
      title: "Luxury Spa Experiences",
      subtitle:
        "Indulge in premium spa therapies designed to relieve stress, improve circulation, and promote deep relaxation using natural products and time-honored techniques.",
      image: slider2,
      primaryButton: "View Treatments",
      secondaryButton: "Meet Our Specialists",
    },
    {
      id: 3,
      title: "Wellness That Comes",
      subtitle:
        "Enjoy professional spa services at home or in-studio, delivered by certified specialists who ensure comfort, hygiene, and exceptional care tailored to your lifestyle.",
      image: slider3,
      primaryButton: "Book at Home",
      secondaryButton: "Visit Our Spa",
    },
  ];

  return (
    <div className="relative w-full  h-[100vh] md:h-[80vh] lg:h-[100vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        loop
        observer={true}
        observeParents={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiperInstance}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative   h-full w-full">
              {/* Background Image */}
              <div
                className="absolute  inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image.src})` }}
              >
                <div className="absolute inset-0 bg-black/60" />
              </div>

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto flex items-center justify-start px-4">
                <div className="text-center md:text-left max-w-[1000px]">
                  {/* Title */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 animate-fade-in-up">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base font-light sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 animate-fade-in-up animation-delay-200">
                    {slide.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-start gap-4 animate-fade-in-up animation-delay-400">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-full rounded-full sm:w-auto text-base sm:text-lg px-8 py-6"
                    >
                      Start Booking Now
                    </Button>
                    <Link href={"/model"}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto rounded-full text-base sm:text-lg px-8 py-6  text-white hover:bg-primary bg-transparent"
                      >
                        Browse Model
                      </Button>
                    </Link>
                  </div>

                  {/* CountUp Stats */}
                  <div className="flex mt-12 justify-center md:justify-start  text-primary lg:gap-10 gap-6 max-w-4xl ">
                    <div className="">
                      <h3 className="sm:text-3xl text-xl font-semibold ">
                        <CountUp start={0} end={300} duration={2.5} />+
                      </h3>
                      <p className="mt-1 text-sm  text-white/80">Models</p>
                    </div>
                    <div className="">
                      <h3 className="sm:text-3xl text-xl font-semibold ">
                        <CountUp start={0} end={1200} duration={2.5} />+
                      </h3>
                      <p className="mt-1 text-sm  text-white/80">Reviews</p>
                    </div>

                    <div>
                      <h3 className="sm:text-3xl text-xl font-semibold ">
                        <CountUp
                          start={0}
                          end={27}
                          duration={2.5}
                          separator=","
                        />{" "}
                        K+
                      </h3>
                      <p className="mt-1 text-sm  text-white/80">
                        Wallet Volume (AED)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        {" "}
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          {" "}
          <div className="w-1 h-2 bg-white/70 rounded-full" />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Slider;
