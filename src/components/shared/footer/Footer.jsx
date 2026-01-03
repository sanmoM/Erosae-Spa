import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
} from "lucide-react";
import Container from "../other/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        "About Us",
        "Our Treatments",
        "Special Packages",
        "Spa Etiquette",
        "Gift Cards",
      ],
    },
    {
      title: "Services",
      links: [
        "Massage Therapy",
        "Facial Treatments",
        "Body Wraps",
        "Nail Care",
        "Aromatherapy",
      ],
    },
  ];

  return (
    <footer className=" text-white mt-12 pb-30 pt-20 md:pb-10 border-t border-primary font-sans">
      <Container>
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 ">
          {/* Brand & Socials */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-primary">EROSAE</h2>
              <p className="text-stone-300 leading-relaxed text-sm max-w-sm italic">
                A sanctuary of peace and rejuvenation where ancient healing
                traditions meet modern luxury. Experience the ultimate escape.
              </p>
            </div>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary  group"
                >
                  <Icon size={18} className="text-white transition-colors" />
                </a>
              ))}
            </div>
            <Link href={"/model-register"}>
              <Button
                className={"rounded-full md:text-base px-6 text-sm"}
                variant="secondary"
              >
                Be a Model
              </Button>
            </Link>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-sm uppercase tracking-[0.2em] font-medium text-white">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href="#"
                        className="text-stone-400 hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm uppercase tracking-[0.2em] font-medium text-white">
              Newsletter
            </h4>
            <p className="text-stone-400 text-sm">
              Subscribe to receive exclusive offers and wellness tips.
            </p>
            <form className="relative group max-w-xl w-full">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-[#111] border border-white/40 py-4 px-6 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 aspect-square bg-primary flex items-center justify-center hover:bg-primary/70 cursor-pointer transition-colors duration-300 rounded-sm"
              >
                <ArrowRight size={18} className="text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col pt-6  md:flex-row justify-between border-t border-gray-400 items-center gap-6">
          <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} EROSAE . ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-stone-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
