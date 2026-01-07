"use client";

import { useState } from "react";
import {
  Heart,
  MapPin,
  Star,
  Briefcase,
  Clock,
  MessageSquare,
  Crown,
  Camera,
  Edit2,
  Save,
  X,
  Pen,
  House,
  Store,
  Plus,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import blog from "@/images/blog/blog1.jpg";

export default function ModelProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    age: 28,
    phone: "+1 (555) 123-4567",
    bio: "Professional spa therapist specializing in holistic wellness and relaxation treatments.Professional spa therapist specializing in holistic wellness and relaxation treatments.Professional spa therapist specializing in holistic wellness and relaxation treatments.",
    location: "New York, USA",
    isVerified: true,
    isVIP: true,
    rating: 4.8,
    reviews: 127,
  });

  const [tempData, setTempData] = useState(profileData);


  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg  md:text-xl lg:text-2xl font-medium">
          My Profile
        </h2>
        <Button variant="secondary" className="  flex items-center gap-2">
          <Pen />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="relative mb-4">
              <div className="w-full h-44 bg-[#232a33]  brounded-lg flex items-center justify-center ">
                <div className="h-30 w-30 rounded-xl">
                  <Image
                    src={blog}
                    alt="avater"
                    className="w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-lg  md:text-xl lg:text-2xl font-medium">
                {profileData.name}
              </h2>
            </div>

            <p className="text-[#9ca3af] text-sm mb-4">
              {profileData.age} years old
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex text-sm items-center gap-2 text-[#9ca3af]">
                <MapPin className="w-4 h-4 text-primary" />
                {profileData.location}
              </div>
              <div className="flex items-center gap-2 text-[#9ca3af]">
                <Phone className="w-4 h-4 text-primary" />
                {profileData.phone}
              </div>
              <div className="flex items-center gap-2 text-[#9ca3af]">
                <FaWhatsapp className="w-4 h-4 text-primary" />
                {profileData.phone}
              </div>

              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold">{profileData.rating}</span>
                <span className="text-[#9ca3af]">
                  ({profileData.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Bio */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio Section */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="lg:text-lg font-semibold mb-4">About Me</h3>
            <p className="text-[#9ca3af] text-sm lg:text-base">
              {profileData.bio}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className=" flex-1 ">
              <h3 className="lg:text-lg text-base font-semibold mb-4 text-stone-200">
                Total Service Provided
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                {/* In House */}
                <div className="flex items-center bg-gray-800/50 gap-2 md:gap-4 p-4 border border-gray-700 rounded-lg ">
                  <div className="lg:p-3 p-1 rounded-lg bg-primary/20 text-primary">
                    <House size={28} />
                  </div>

                  <div>
                    <p className="md:text-2xl font-semibold ">128</p>
                    <p className="text-xs uppercase tracking-wide text-stone-400">
                      In House
                    </p>
                  </div>
                </div>

                {/* In Shop */}
                <div className="flex items-center gap-2 md:gap-4 p-4 border border-gray-700 rounded-lg bg-gray-800/50 ">
                  <div className="lg:p-3 p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Store size={28} />
                  </div>

                  <div>
                    <p className="md:text-2xl font-semibold ">342</p>
                    <p className="text-xs uppercase tracking-wide text-stone-400">
                      In Shop
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1  ">
              <div className="flex justify-between items-end">
                <h3 className="lg:text-lg text-base font-semibold  text-stone-200">
                  My Services
                </h3>
                <Button variant="outline">
                  <Plus /> Add Service
                </Button>
              </div>
              <div className="mt-4">
                <div className="bg-gray-800/50 flex items-center justify-between p-4 rounded-md border-gray-700 border">
                  <p className="text-sm lg:text-base">Facial Treatment</p>
                  <div className="p-2 rounded-md bg-red-400">
                    <Trash />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Section */}
      <div className="mb-8">
        <h3 className="lg:text-lg text-base font-semibold mb-4 text-stone-200">
          Availability
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              day: "Monday",
              status: "Available",
            },
            {
              day: "Monday",
              status: "Busy",
            },
            {
              day: "Monday",
              status: "Available",
            },
            {
              day: "Monday",
              status: "Available",
            },
            {
              day: "Monday",
              status: "Busy",
            },
            {
              day: "Monday",
              status: "Available",
            },
            {
              day: "Monday",
              status: "Available",
            },
          ].map((day) => (
            <div
              key={day.day}
              className="bg- rounded-lg p-4 flex items-start justify-between bg-gray-800/50 border border-gray-700"
            >
              <div>
                <p className="font-semibold text-sm lg:text-base text-[#e0e6ed] mb-2">
                  {day.day}
                </p>
                {day.status === "Available" && (
                  <p className="text-sm text-[#9ca3af]">9:00 AM - 9:00 PM</p>
                )}
              </div>

              <p
                className={`text-xs px-2 py-1 rounded-full ${
                  day.status === "Available" ? "bg-green-700" : "bg-red-700"
                } `}
              >
                {day.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-[#232a33] rounded-lg p-4 border border-[#3a424d] flex items-center gap-4">
      <div className="text-[#8b6f63]">{icon}</div>
      <div>
        <p className="text-[#9ca3af] text-sm">{label}</p>
        <p className="text-xl font-bold text-[#e0e6ed]">{value}</p>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="bg-[#232a33] rounded-lg p-4 border border-[#3a424d] hover:border-[#8b6f63] transition">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-[#e0e6ed]">{service.name}</h4>
        <span className="bg-[#8b6f63] bg-opacity-20 text-[#8b6f63] text-xs px-2 py-1 rounded">
          {service.type}
        </span>
      </div>
      <p className="text-lg font-bold text-[#8b6f63]">{service.price}</p>
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-[#232a33] rounded-lg p-5 border border-[#3a424d]">
      <div className="flex justify-between items-start mb-2">
        <p className="font-semibold text-[#e0e6ed]">{review.name}</p>
        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          ))}
        </div>
      </div>
      <p className="text-[#9ca3af]">{review.text}</p>
    </div>
  );
}

import { Phone } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { da } from "date-fns/locale/da";
