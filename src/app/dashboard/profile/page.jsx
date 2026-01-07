"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserProfilePage = () => {
  const [user, setUser] = useState({
    name: "Sarah Ahmed",
    email: "sarah@example.com",
    phone: "+971 555 123 456",
    gender: "Female",
    dob: "1999-05-15",
    city: "Dubai",
    area: "Business Bay",
    bio: "Loves wellness, spa therapy & relaxation experiences.",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop",
  });

  return (
    <div>
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium">
          My Profile
        </h1>
        <p className="mt-1 text-sm sm:text-base text-stone-400">
          Manage your personal information & account details.
        </p>
      </div>

      

      {/* Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-8">
        {/* Profile Card */}
      <div className="border border-gray-700 bg-gray-900/50 rounded-xl p-6  flex gap-6 items-center">
        <img
          src={user.avatar}
          className="w-24 h-24 rounded-full object-cover border border-gray-700"
        />

        <div>
          <h2 className="text-xl font-semibold text-white">{user.name}</h2>
          <p className="text-sm text-stone-400">{user.email}</p>
          <p className="text-sm text-stone-400">{user.phone}</p>
        </div>
      </div>

        <div className="lg:col-span-2 border border-gray-700 bg-gray-900/50 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <Label className="mb-1">Full Name</Label>
              <Input
                value={user.name}
                onChange={(e) =>
                  setUser({ ...user, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div>
              <Label className="mb-1">Email</Label>
              <Input
                value={user.email}
                onChange={(e) =>
                  setUser({ ...user, email: e.target.value })
                }
              />
            </div>

            {/* Phone */}
            <div>
              <Label className="mb-1">Phone</Label>
              <Input
                value={user.phone}
                onChange={(e) =>
                  setUser({ ...user, phone: e.target.value })
                }
              />
            </div>

            {/* Gender */}
            <div>
              <Label className="mb-1">Gender</Label>
              <Select
                value={user.gender}
                onValueChange={(v) =>
                  setUser({ ...user, gender: v })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* DOB */}
            <div>
              <Label className="mb-1">Date of Birth</Label>
              <Input
                type="date"
                value={user.dob}
                onChange={(e) =>
                  setUser({ ...user, dob: e.target.value })
                }
              />
            </div>

            {/* CITY SELECT */}
            <div>
              <Label className="mb-1">City</Label>
              <Select
                value={user.city}
                
                onValueChange={(v) =>
                  setUser({ ...user, city: v })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dubai">Dubai</SelectItem>
                  <SelectItem value="Abu Dhabi">Abu Dhabi</SelectItem>
                  <SelectItem value="Sharjah">Sharjah</SelectItem>
                  <SelectItem value="Ajman">Ajman</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* AREA SELECT */}
            <div>
              <Label className="mb-1">Area</Label>
              <Select
                value={user.area}
                onValueChange={(v) =>
                  setUser({ ...user, area: v })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Business Bay">Business Bay</SelectItem>
                  <SelectItem value="Dubai Marina">Dubai Marina</SelectItem>
                  <SelectItem value="Jumeirah">Jumeirah</SelectItem>
                  <SelectItem value="JVC">JVC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-4">
            <Label className="mb-1">About You</Label>
            <Textarea
              value={user.bio}
              onChange={(e) =>
                setUser({ ...user, bio: e.target.value })
              }
              className="min-h-[120px]"
            />
          </div>

          <Button className="mt-6 w-full md:w-auto" variant="secondary">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
