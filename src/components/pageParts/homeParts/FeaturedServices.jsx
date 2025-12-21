import Container from "@/components/shared/other/Container";
import ServiceCard from "@/components/shared/card/serviceCard/ServiceCard";
import { Flower2, Sparkles, Waves } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Featured = () => {
  const featuredServices = [
    {
      id: 1,
      title: "Signature Aromatherapy",
      description:
        "A full-body massage using organic essential oils to harmonize the body, mind, and spirit and spirit.",
      duration: "90 min",
      price: "120",
      category: "Massage",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
      icon: <Flower2 className="w-5 h-5" />,
      tag: "Best Seller",
    },
    {
      id: 2,
      title: "Ocean Breeze Facial",
      description:
        "Deeply hydrating treatment using mineral-rich marine extracts for a naturally glowing.",
      duration: "60 min",
      price: "85",
      category: "Facial",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      icon: <Waves className="w-5 h-5" />,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Zen Stone Therapy",
      description:
        "Smooth volcanic stones are heated and placed on key energy points to melt away deep tension.",
      duration: "75 min",
      price: "145",
      category: "Therapy",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
      icon: <Sparkles className="w-5 h-5" />,
      tag: "Limited",
    },
  ];
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
          <h2 className="md:text-4xl mb-2 sm:text-3xl text-2xl  font-serif text-gray-300  italic">
            Featured Wellness Experiences
          </h2>
          <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Escape the ordinary with our curated selection of holistic
            treatments, designed to restore your inner peace and natural glow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
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
