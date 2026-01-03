import Container from "@/components/shared/other/Container";
import ServiceCard from "@/components/shared/card/serviceCard/ServiceCard";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/utilities/data";

const Featured = () => {
  
  return (
    <div>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-4 md:mb-12">
          <div className="flex justify-center items-center gap-2 mb-3 md:mb-6 ">
            <div className="h-[1px] w-8  bg-primary"></div>
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
              FEATURED SERVICES
            </span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className=" mb-2 heading-primary">
            Featured Wellness Experiences
          </h2>
          <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Escape the ordinary with our curated selection of holistic
            treatments, designed to restore your inner peace and natural glow.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.slice(0,4).map((service) => (
            <ServiceCard service={service} key={service.id}></ServiceCard>
          ))}
        </div>

        {/* View All Bottom Section */}
        <div className="mt-4 md:mt-8 flex flex-col  items-center">
          
         <Link href={"/service"}><Button size="lg" variant="outline" className={"bg-transparent text-stone-200 hover:text-white hover:bg-primary"}>Explore Full Menu</Button></Link> 
        </div>
      </Container>
    </div>
  );
};

export default Featured;
