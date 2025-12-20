

import FeaturedSection from "@/components/pageParts/homeParts/Featured";
import Featured from "@/components/pageParts/homeParts/FeaturedServices";
import Models from "@/components/pageParts/homeParts/Models";
import Slider from "@/components/pageParts/homeParts/Slider";
import Testimonial from "@/components/pageParts/homeParts/Testimonial";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Container from "@/components/shared/other/Container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="space-y-12 md:space-y-20">
        <Slider />
        <Featured />
        <FeaturedSection />
        <Models />
        <Testimonial/>
        <Footer/>
      </div>
    </div>
  );
}
