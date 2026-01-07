import City from "@/components/pageParts/homeParts/City";
import FeaturedSection from "@/components/pageParts/homeParts/Featured";
import Featured from "@/components/pageParts/homeParts/FeaturedServices";
import Models from "@/components/pageParts/homeParts/Models";
import ServiceIconRow from "@/components/pageParts/homeParts/ServiceIcon";
import Servicetype from "@/components/pageParts/homeParts/Servicetype";
import Slider from "@/components/pageParts/homeParts/Slider";
import Testimonial from "@/components/pageParts/homeParts/Testimonial";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20">
      <Slider />
      <ServiceIconRow/>
      <Featured />
      <Servicetype/>
      {/* <FeaturedSection /> */}
      <Models />
      <City/>
      <Testimonial />
    </div>
  );
}
