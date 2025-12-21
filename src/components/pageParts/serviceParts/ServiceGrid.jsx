import ServiceCard from "@/components/shared/card/serviceCard/ServiceCard";
import Container from "@/components/shared/other/Container";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Flower2, Hand, Leaf, Sparkles, Sun, Waves } from "lucide-react";
import React from "react";

const ServiceGrid = () => {
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

    {
      id: 4,
      title: "Royal Thai Massage",
      description:
        "Traditional Thai stretching techniques combined with deep pressure to restore.",
      duration: "90 min",
      price: "130",
      category: "Body",
      image:
        "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&q=80&w=800",
      icon: <Hand className="w-5 h-5" />,
      tag: "Popular",
    },
    {
      id: 5,
      title: "Golden Glow Skin Ritual",
      description:
        "A luxurious facial infused with gold particles to brighten skin tone and boost collagen.",
      duration: "70 min",
      price: "110",
      category: "Luxury",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
      icon: <Sun className="w-5 h-5" />,
      tag: "Premium",
    },
    {
      id: 6,
      title: "Ayurvedic Herbal Therapy",
      description:
        "Healing herbal oils and rhythmic massage techniques to detoxify the body and .",
      duration: "80 min",
      price: "140",
      category: "Wellness",
      image:
        "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&q=80&w=800",
      icon: <Leaf className="w-5 h-5" />,
      tag: "Wellness",
    },
  ];

  return (
    <Container>
      <div className="border-b  border-primary/80 pb-2  mb-10">
        <p className=" md:text-sm text-xs text-stone-300">
          show 6 services of 27
        </p>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredServices.map((service) => (
          <ServiceCard service={service} key={service.id}></ServiceCard>
        ))}
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

export default ServiceGrid;
