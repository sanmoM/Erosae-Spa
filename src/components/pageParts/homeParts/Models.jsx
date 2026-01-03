import ModelCard from "@/components/shared/card/modelCard/ModelCard";
import Container from "@/components/shared/other/Container";
import { Button } from "@/components/ui/button";
import { spaModels } from "@/utilities/data";
import Link from "next/link";
import React from "react";

const Models = () => {
  

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
          <h2 className="mb-2 heading-primary">
            The Artisans
          </h2>
          <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Connecting you with elite wellness professionals for a tailored
            experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {spaModels.slice(0,6).map((model, indx) => {
            return <ModelCard key={indx} model={model} />;
          })}
        </div>
         {/* View All Bottom Section */}
        <div className="mt-4 md:mt-8 flex flex-col  items-center">
          
          <Link href={"/model"}><Button size="lg" variant="outline" className={"bg-transparent text-stone-200 hover:text-white hover:bg-primary"}>Explore All Models</Button></Link>
        </div>
      </Container>
    </div>
  );
};

export default Models;
