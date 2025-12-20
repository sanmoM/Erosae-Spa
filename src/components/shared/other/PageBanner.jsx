"use client";

import React from "react";

const PageBanner = ({ 
  title = "Explore Our Services", 
  image = "https://thailand-good.ru/wp-content/uploads/4/a/7/4a7b7ff67195341242d25fefc0bf9143.jpeg",
  gradient = "from-[#050718] via-[#050718]/70 to-transparent",

}) => {
  return (
    <div className={`relative h-[20vh] md:h-[30vh] flex items-center justify-center`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`}></div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h2 className="heading-primary ">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PageBanner;