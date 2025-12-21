import ModelGrid from "@/components/pageParts/modelParts/ModelGrid";
import PageBanner from "@/components/shared/other/PageBanner";
import React from "react";

const page = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      <PageBanner
        title="Explore Our Model"
        image="https://fimgs.net/himg/o.HeXRUjt0Boe.jpg"
      />
      <ModelGrid />
    </div>
  );
};

export default page;
