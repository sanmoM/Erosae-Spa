import Image from "next/image";
import featured from "@/images/featured.png";
import Container from "@/components/shared/other/Container";
import { Button } from "@/components/ui/button";

const FeaturedSection = () => {
  return (
    <section className=" text-white">
      <Container className="flex flex-col-reverse md:flex-row gap-12 items-center">
        {/* Left Side: Image with Decorative Frame */}
        <div className="flex-1 group">
          <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
            <Image
              src={featured}
              alt="Luxury Spa Treatment"
              className="object-cover h-full w-full rounded-md"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-4 flex-1">
          <div className="space-y-3 ">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-6 ">
              <div className="h-[1px] w-8  bg-primary"></div>
              <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
                THE ART OF RELAXATION
              </span>
              <div className="h-[1px] w-8 bg-primary"></div>
            </div>

            <h2 className=" mb-2 text-center md:text-left heading-primary ">
              Rejuvenate Your
            </h2>
            <h2 className=" mb-2 text-center md:text-left heading-primary">
              Mind, Body & Soul
            </h2>
          </div>

          <p className="text-stone-400 md:text-left text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Experience a sanctuary of peace where ancient healing traditions
            meet modern luxury. Our signature stone therapy is designed to
            release tension and restore your natural inner balance.
          </p>

          <ul className="space-y-3 md:block flex flex-col items-center md:justify-start text-sm text-stone-500">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
              Organic Essential Oil Aromatherapy
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
              Heated Volcanic Stone Massage
            </li>
          </ul>

          <div className="flex md:block justify-center items-center">
            <Button
              variant="outline"
              className={
                "bg-transparent text-stone-200 hover:text-white hover:bg-primary"
              }
              size="lg"
            >
              Explore More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSection;
