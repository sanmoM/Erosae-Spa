import ModelCard from "@/components/shared/card/modelCard/ModelCard";
import Container from "@/components/shared/other/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const Models = () => {
  const spaModels = [
    {
      id: 1,
      name: "Elena Rodriguez",
      city: "Dubai",
      rating: 4.9,
      reviews: 128,
      price: "500",
      currency: "AED",
      tags: ["Deep Tissue", "Holistic"],
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      verified: true,
    },
    {
      id: 2,
      name: "Aisha Khan",
      city: "Abu Dhabi",
      rating: 4.8,
      reviews: 94,
      price: "450",
      currency: "AED",
      tags: ["Relaxation", "Swedish"],
      image:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      verified: true,
    },
    {
      id: 3,
      name: "Sophia Al-Maktoum",
      city: "Dubai",
      rating: 5.0,
      reviews: 215,
      price: "650",
      currency: "AED",
      tags: ["Aromatherapy", "Zen"],
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&q=80&w=400",
      verified: true,
    },
    {
      id: 4,
      name: "Natalie Brooks",
      city: "Sharjah",
      rating: 4.7,
      reviews: 88,
      price: "420",
      currency: "AED",
      tags: ["Hot Stone", "Balance"],
      image:
        "https://images.unsplash.com/photo-1621784563330-caee0b138a00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      verified: true,
    },
    {
      id: 5,
      name: "Layla Hassan",
      city: "Dubai",
      rating: 4.9,
      reviews: 176,
      price: "580",
      currency: "AED",
      tags: ["Thai Massage", "Flexibility"],
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400",
      verified: true,
    },
    {
      id: 6,
      name: "Isabella Moore",
      city: "Ajman",
      rating: 4.8,
      reviews: 132,
      price: "480",
      currency: "AED",
      tags: ["Reflexology", "Wellness"],
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
      verified: true,
    },
  ];

  return (
    <div>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-4 md:mb-12 ">
          <div className="flex justify-center items-center gap-2 mb-3 md:mb-6 ">
            <div className="h-[1px] w-8  bg-primary"></div>
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
              EXPLORE OUR MODEL
            </span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="md:text-4xl mb-2 sm:text-3xl text-2xl  font-serif text-gray-300  italic">
            The Artisans
          </h2>
          <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Connecting you with elite wellness professionals for a tailored
            experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaModels.map((model, indx) => {
            return <ModelCard key={indx} model={model} />;
          })}
        </div>
         {/* View All Bottom Section */}
        <div className="mt-4 md:mt-8 flex flex-col  items-center">
          
          <Button size="lg" variant="outline" className={"bg-transparent text-stone-200 hover:text-white hover:bg-primary"}>Explore All Models</Button>
        </div>
      </Container>
    </div>
  );
};

export default Models;
