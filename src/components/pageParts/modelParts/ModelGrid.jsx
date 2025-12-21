import ModelCard from "@/components/shared/card/modelCard/ModelCard";
import Container from "@/components/shared/other/Container";
import {
    Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";


const ModelGrid = () => {
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
    <Container>
    
        <div className="border-b  border-primary/80 pb-2  mb-10">
          <p className=" md:text-sm text-xs text-stone-300">
            show 6 models of 27
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaModels.map((model, indx) => {
            return <ModelCard key={indx} model={model} />;
          })}
        </div>
  
      <div className="mt-8 ">
        <Pagination className={"md:justify-end"}>
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
    </Container>
  );
};

export default ModelGrid;
