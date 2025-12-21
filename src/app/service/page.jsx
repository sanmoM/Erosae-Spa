import ServiceGrid from "@/components/pageParts/serviceParts/ServiceGrid";
import ServiceCard from "@/components/shared/card/serviceCard/ServiceCard";
import PageBanner from "@/components/shared/other/PageBanner";
import React from "react";

const page = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      <PageBanner />
      <ServiceGrid/>
    </div>
  );
};

export default page;
