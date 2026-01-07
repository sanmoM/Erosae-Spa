import Container from "@/components/shared/other/Container";
import { CandlestickChart, Droplets, Flower2, Footprints, Package, Sparkles, UserRound } from "lucide-react";


const categories = [
  { title: "Body & Soul", icon: Flower2 },
  { title: "Oil Therapy", icon: Droplets },
  { title: "Day Spa", icon: UserRound },
  { title: "Sauna", icon: UserRound },
  { title: "Facials", icon: Sparkles },
  { title: "Massage", icon: Footprints },
  { title: "Wellness", icon: CandlestickChart },
  { title: "Spa Packages", icon: Package },
];

export default function ServiceIconRow() {
  return (
    <Container>
      <div className="md:grid hidden  sm:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-10 items-center justify-center">
        {categories.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center group cursor-pointer select-none"
            >
              {/* Icon */}
              <Icon
                className="w-10 h-10 text-gray-400 group-hover:text-primary transition-all duration-300"
                strokeWidth={1.3}
              />

              {/* Label */}
              <p className="mt-2 text-[11px] md:text-sm tracking-wider uppercase text-stone-400 group-hover:text-primary transition">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
