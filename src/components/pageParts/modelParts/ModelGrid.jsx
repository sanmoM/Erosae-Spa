"use client";

import ModelCard from "@/components/shared/card/modelCard/ModelCard";
import Container from "@/components/shared/other/Container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { spaCategories, spaModels, location } from "@/utilities/data";
import { Filter, X } from "lucide-react";
import React, { useState } from "react";

const ModelGrid = () => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <>
      <Container>
        {/* header */}
        <div className="border-b border-primary/80 pb-2 mb-10">
          <div className="flex items-end justify-between">
            <div
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden cursor-pointer flex gap-1"
            >
              <Filter className="text-primary" />
              <span className="text-stone-300">Filter</span>
            </div>
            <p className="hidden lg:flex text-xs text-stone-300">
              show 6 models of 27
            </p>
            <Select>
            <SelectTrigger className="w-[150px] md:w-[200px] text-xs md:text-sm border-primary">
              <SelectValue className={"text-stone-300"} placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="experience">Years of Experience</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>

          
        </div>

        <div className="grid lg:grid-cols-7 gap-6 items-start">
          {/* DESKTOP FILTER */}
          <div className="col-span-2 h-[85vh] hidden lg:flex sticky top-24 bg-gray-900 rounded-md">
            <div className="flex p-5 flex-col w-full justify-between">
              <div className="space-y-6">
                {/* Services */}
                <div>
                  <h4 className="text-stone-200 pb-1 border-b border-gray-500 text-lg">
                    Services
                  </h4>
                  <div className="mt-4 space-y-2">
                    {spaCategories.map((cat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Checkbox id={cat.value} />
                        <Label
                          htmlFor={cat.value}
                          className="text-stone-400 text-[13px]"
                        >
                          {cat.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location (ONLY SCROLL AREA) */}
                <div>
                  <h4 className="text-stone-200 pb-1 border-b border-gray-500 text-lg">
                    Location
                  </h4>

                  <div className="mt-4 space-y-2 location-scroll pr-1">
                    {location.map((city, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Checkbox id={city.city} />
                        <Label
                          htmlFor={city.city}
                          className="text-stone-400 text-[13px]"
                        >
                          {city.city}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6" variant="secondary">
                Apply
              </Button>
            </div>
          </div>

          {/* MODELS */}
          <div className="col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {spaModels.map((model, i) => (
                <ModelCard key={i} model={model} />
              ))}
            </div>

            <div className="mt-8">
              <Pagination className="md:justify-end">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </Container>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50  h-full z-70 transition-opacity lg:hidden ${
          mobileFilterOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileFilterOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 z-80 transform transition-transform duration-300 lg:hidden ${
          mobileFilterOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col h-full justify-between">
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-500 pb-3">
              <h2 className="text-lg text-stone-300">Filter</h2>
              <X
                className="text-primary cursor-pointer"
                onClick={() => setMobileFilterOpen(false)}
              />
            </div>

            {/* Services */}
            <div>
              <h4 className="text-stone-100 pb-1 border-b border-gray-500">
                Services
              </h4>
              <div className="mt-4 space-y-2">
                {spaCategories.map((cat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Checkbox id={cat.value} />
                    <Label
                      htmlFor={cat.value}
                      className="text-stone-400 text-xs"
                    >
                      {cat.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Location (scroll on hover) */}
            <div>
              <h4 className="text-stone-100 pb-1 border-b border-gray-500">
                Location
              </h4>
              <div className="mt-4 space-y-2 location-scroll pr-1">
                {location.map((city, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Checkbox id={city.city} />
                    <Label
                      htmlFor={city.city}
                      className="text-stone-400 text-xs"
                    >
                      {city.city}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button className="w-full mt-6" variant="secondary">
            Apply
          </Button>
        </div>
      </div>
    </>
  );
};

export default ModelGrid;
