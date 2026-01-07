import Container from "@/components/shared/other/Container";
import { serviceTypes } from "@/utilities/data";
import { Check } from "lucide-react";
import React from "react";

const Servicetype = () => {
  return (
    <Container>
      <div className="max-w-3xl mx-auto text-center mb-4 md:mb-12 ">
        <div className="flex justify-center items-center gap-2 mb-3 md:mb-6 ">
          <div className="h-[1px] w-8  bg-primary"></div>
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
            Our Service Types
          </span>
          <div className="h-[1px] w-8 bg-primary"></div>
        </div>
        <h2 className="mb-2 heading-primary">Relax Your Way</h2>
        <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Enjoy our premium spa services at your home or visit our partner
          wellness centers the choice is yours.
        </p>
      </div>

      <div className="space-y-8 md:space-y-12">
        {serviceTypes.map((type, indx) => (
          <div
            key={indx}
            className={`
        group
        flex gap-6  flex-col md:flex-row
        ${indx === 1 ? "md:flex-row-reverse" : ""}
        
        transition duration-300
        overflow-hidden s
      `}
          >
            {/* IMAGE SIDE */}
            <div className="flex-1 max-h-[350px] relative">
              <img
                className="rounded-xl w-full  h-full object-cover aspect-video md:aspect-auto"
                src={type.image}
                alt={type.title}
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              
            </div>

            {/* CONTENT SIDE */}
            <div className="flex-1 p-5 md:p-7">
              <h3 className="lg:text-xl md:text-base font-semibold text-white mb-2 flex items-center gap-2">
                {type.title} 
              </h3>

              <p className="text-stone-400 text-sm md:text-base leading-relaxed">
                {type.description} Visit one of our luxurious spa locations for a complete wellness immersion
              </p>

              {/* FEATURES */}
              <ul className="flex flex-col items-start gap-2 mt-4">
                {type.features.map((feature, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-xs md:text-sm text-stone-200 "
                  >
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </span>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Servicetype;
