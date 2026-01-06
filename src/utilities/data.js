const { Leaf, Sun, Hand, Sparkles, Waves, Flower2, Home, Store } = require("lucide-react");
import blog1 from "@/images/blog/blog1.jpg";
import blog2 from "@/images/blog/blog2.jpg";
import blog3 from "@/images/blog/blog3.jpg";
import blog4 from "@/images/blog/blog4.jpg";
import blog5 from "@/images/blog/blog5.jpg";
import blog6 from "@/images/blog/blog6.jpg";

import location1 from "@/images/location/location1.jpg"
import location2 from "@/images/location/location2.jpg"
import location3 from "@/images/location/location3.jpg"
import location4 from "@/images/location/location4.jpg"
import location5 from "@/images/location/location5.jpg"


export const services = [
  {
    id: 1,
    title: "Signature Aromatherapy",
    description:
      "A full-body massage using organic essential oils to harmonize the body, mind, and spirit.",
    category: "Massage",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    icon: <Flower2 className="w-5 h-5" />,
    tag: "Best Seller",
    durations: [
      { time: "60 min", price: 90 },
      { time: "90 min", price: 120 },
      { time: "120 min", price: 150 },
    ],
  },
  {
    id: 2,
    title: "Ocean Breeze Facial",
    description:
      "Deeply hydrating treatment using mineral-rich marine extracts for a naturally glowing skin.",
    category: "Facial",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    icon: <Waves className="w-5 h-5" />,
    tag: "Trending",
    durations: [
      { time: "45 min", price: 65 },
      { time: "60 min", price: 85 },
      { time: "90 min", price: 115 },
    ],
  },
  {
    id: 3,
    title: "Zen Stone Therapy",
    description:
      "Smooth volcanic stones are heated and placed on key energy points to melt away deep tension.",
    category: "Therapy",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    icon: <Sparkles className="w-5 h-5" />,
    tag: "Limited",
    durations: [
      { time: "60 min", price: 110 },
      { time: "75 min", price: 145 },
      { time: "90 min", price: 170 },
    ],
  },
  {
    id: 4,
    title: "Royal Thai Massage",
    description:
      "Traditional Thai stretching techniques combined with deep pressure to restore energy balance.",
    category: "Body",
    image:
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&q=80&w=800",
    icon: <Hand className="w-5 h-5" />,
    tag: "Popular",
    durations: [
      { time: "60 min", price: 100 },
      { time: "90 min", price: 130 },
      { time: "120 min", price: 165 },
    ],
  },
  {
    id: 5,
    title: "Golden Glow Skin Ritual",
    description:
      "A luxurious facial infused with gold particles to brighten skin tone and boost collagen.",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    icon: <Sun className="w-5 h-5" />,
    tag: "Premium",
    durations: [
      { time: "50 min", price: 90 },
      { time: "70 min", price: 110 },
      { time: "90 min", price: 140 },
    ],
  },
  {
    id: 6,
    title: "Ayurvedic Herbal Therapy",
    description:
      "Healing herbal oils and rhythmic massage techniques to detoxify the body.",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&q=80&w=800",
    icon: <Leaf className="w-5 h-5" />,
    tag: "Wellness",
    durations: [
      { time: "60 min", price: 115 },
      { time: "80 min", price: 140 },
      { time: "100 min", price: 170 },
    ],
  },
];

export const spaModels = [
  {
    id: 1,
    slug: "leon",
    name: "Leon",
    age: 29,
    city: "Dhaka",
    rating: 5,
    reviews: 200,
    price: "600",
    currency: "BDT",
    yearsOfExperience: 6,
    tags: ["Massage", "Therapy", "Body"],
    languages: ["English", "Bengali"],
    bio: "Leon is a highly skilled therapist specializing in deep tissue and holistic massage techniques.\nHe focuses on relieving muscle tension and restoring body balance.\nClients appreciate his calm approach and professional care.",
    image: "https://i.ibb.co/MDYR9GTh/leon.png",
    imageGallery: [
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f",
      "https://yandex-images.clstorage.net/example-spa-1.jpg",
    ],
    verified: true,
  },
  {
    id: 2,
    slug: "elena-rodriguez",
    name: "Elena Rodriguez",
    age: 31,
    city: "Dubai",
    rating: 4.9,
    reviews: 128,
    price: "500",
    currency: "AED",
    yearsOfExperience: 7,
    tags: ["Luxury", "Facial", "Massage"],
    languages: ["English", "Spanish"],
    bio: "Elena combines modern massage therapy with holistic healing methods.\nShe is known for her precise techniques and soothing energy.\nHer sessions are designed to relax both body and mind.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop",
    imageGallery: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
      "https://cdn.freepik.com/example/spa-room.jpg",
    ],
    verified: true,
  },
  {
    id: 3,
    slug: "aisha-khan",
    name: "Aisha Khan",
    age: 28,
    city: "Abu Dhabi",
    rating: 4.8,
    reviews: 94,
    price: "450",
    currency: "AED",
    yearsOfExperience: 5,
    tags: ["Wellness", "Facial", "Massage"],
    languages: ["English", "Arabic", "Urdu"],
    bio: "Aisha specializes in relaxation and Swedish massage therapies.\nShe believes in gentle techniques that calm the nervous system.\nPerfect for stress relief and full-body relaxation.",
    image:
      "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop",
    imageGallery: [
      "https://images.unsplash.com/photo-1552693673-1bf958298935",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
      "https://yandex-images.clstorage.net/example-spa-2.jpg",
    ],
    verified: true,
  },
  {
    id: 4,
    slug: "sophia-al-maktoum",
    name: "Sophia Al-Maktoum",
    age: 34,
    city: "Dubai",
    rating: 5.0,
    reviews: 215,
    price: "650",
    currency: "AED",
    yearsOfExperience: 10,
    tags: ["Luxury", "Wellness", "Therapy", "Massage"],
    languages: ["English", "Arabic"],
    bio: "Sophia is a senior therapist with deep expertise in aromatherapy and Zen practices.\nHer treatments promote inner peace and deep relaxation.\nShe is trusted by high-profile clients across Dubai.",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    imageGallery: [
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
      "https://cdn.freepik.com/example/aroma-spa.jpg",
    ],
    verified: true,
  },
  {
    id: 5,
    slug: "natalie-brooks",
    name: "Natalie Brooks",
    age: 30,
    city: "Sharjah",
    rating: 4.7,
    reviews: 88,
    price: "420",
    currency: "AED",
    yearsOfExperience: 6,
    tags: ["Body", "Massage", "Facial"],
    languages: ["English", "French"],
    bio: "Natalie focuses on hot stone therapy and body balance techniques.\nHer sessions help improve circulation and ease chronic pain.\nClients love her attentive and friendly approach.",
    image:
      "https://images.unsplash.com/photo-1621784563330-caee0b138a00?q=80&w=687&auto=format&fit=crop",
    imageGallery: [
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
      "https://yandex-images.clstorage.net/example-spa-3.jpg",
    ],
    verified: true,
  },
  {
    id: 6,
    slug: "layla-hassan",
    name: "Layla Hassan",
    age: 27,
    city: "Dubai",
    rating: 4.9,
    reviews: 176,
    price: "580",
    currency: "AED",
    yearsOfExperience: 5,
    tags: ["Thai Massage" , "Massage", "Therapy"], 
    languages: ["English", "Arabic", "Thai"],
    bio: "Layla specializes in traditional Thai massage techniques.\nHer treatments improve flexibility and energy flow.\nIdeal for active clients and athletes.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    imageGallery: [
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
      "https://cdn.freepik.com/example/thai-spa.jpg",
    ],
    verified: true,
  },
  {
    id: 7,
    slug: "isabella-moore",
    name: "Isabella Moore",
    age: 33,
    city: "Ajman",
    rating: 4.8,
    reviews: 132,
    price: "480",
    currency: "AED",
    yearsOfExperience: 8,
    tags: ["Wellness", "Therapy", "Luxury"],
    languages: ["English", "Italian"],
    bio: "Isabella is an expert in reflexology and holistic wellness therapy.\nShe focuses on pressure-point healing techniques.\nHer sessions leave clients refreshed and re-energized.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    imageGallery: [
      "https://images.unsplash.com/photo-1552693673-1bf958298935",
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f",
      "https://yandex-images.clstorage.net/example-spa-4.jpg",
    ],
    verified: true,
  },
];



export const spaCategories = [
  {
    name: "Swedish Massage",
    value: "swedish_massage",
  },
  {
    name: "Deep Tissue Massage",
    value: "deep_tissue",
  },
  {
    name: "Thai Massage",
    value: "thai_massage",
  },
  {
    name: "Aromatherapy",
    value: "aromatherapy",
  },
  {
    name: "Hot Stone Therapy",
    value: "hot_stone",
  },
  {
    name: "Reflexology",
    value: "reflexology",
  },
];

export const location = [
  {
    city: "Dubai",
    image: location1,
    shopLocation: [
      "House 12, Road 7, Jumeirah, Dubai",
      "Building 21, Business Bay, Dubai",
      "Villa 5, Dubai Marina, Dubai",
      "Shop 9, Deira Gold Souk Area, Dubai",
    ],
    states: [
      "Dubai Marina",
      "Jumeirah",
      "Deira",
      "Bur Dubai",
      "Palm Jumeirah",
      "Downtown Dubai",
      "Business Bay",
    ],
  },
  {
    city: "Abu Dhabi",
    image: location2,
    shopLocation: [
      "Building 45, Al Zahiyah Area, Abu Dhabi",
      "Villa 8, Khalifa City, Abu Dhabi",
      "Shop 3, Yas Island, Abu Dhabi",
    ],
    states: [
      "Yas Island",
      "Saadiyat Island",
      "Al Reem Island",
      "Al Khalidiyah",
      "Al Mushrif",
    ],
  },
  {
    city: "Sharjah",
    image: location3,
    shopLocation: [
      "Villa 9, Al Majaz 2, Sharjah",
      "Building 14, Al Nahda, Sharjah",
      "House 6, Muwaileh Area, Sharjah",
    ],
    states: ["Al Majaz", "Al Nahda", "Al Qasimia", "Al Taawun"],
  },
  {
    city: "Ajman",
    image: location4,
    shopLocation: [
      "Building 18, Al Nuaimiya 1, Ajman",
      "Shop 4, Ajman Corniche, Ajman",
    ],
    states: ["Al Nuaimiya", "Al Rashidiya", "Al Jurf"],
  },
  {
    city: "Ras Al Khaimah",
    image: location5,
    shopLocation: [
      "House 3, Al Nakheel Area, Ras Al Khaimah",
      "Villa 10, Al Hamra Village, Ras Al Khaimah",
    ],
    states: ["Al Nakheel", "Al Hamra", "Al Dhait"],
  },
];


export const spaBlogs = [
  {
    id: 1,
    title: "The Ultimate Guide to Relaxation Therapy",
    slug: "ultimate-guide-to-relaxation-therapy",
    date: "July 12, 2025",
    description:
      "Relaxation therapy is a holistic approach designed to calm the mind, release physical tension, and restore emotional balance. Through guided breathing, gentle bodywork, soothing environments, and mindfulness techniques, this therapy helps reduce stress hormones, improve sleep quality, and enhance mental clarity. Ideal for individuals facing anxiety, fatigue, or burnout, relaxation therapy supports long-term wellness by encouraging deep rest and inner peace.",
    image: blog1,
  },
  {
    id: 2,
    title: "Benefits of Deep Tissue Massage",
    slug: "benefits-of-deep-tissue-massage",
    date: "July 10, 2025",
    description:
      "Deep tissue massage focuses on the deeper layers of muscles and connective tissues to address chronic pain, stiffness, and tension caused by stress or physical activity. Using slow strokes and firm pressure, this therapy improves blood circulation, breaks down muscle knots, and accelerates recovery. It is especially beneficial for athletes, office workers, and individuals experiencing long-term muscular discomfort.",
    image: blog2,
  },
  {
    id: 3,
    title: "Why Aromatherapy Improves Mental Health",
    slug: "aromatherapy-improves-mental-health",
    date: "July 08, 2025",
    description:
      "Aromatherapy enhances mental and emotional wellbeing through the therapeutic use of natural essential oils extracted from plants and flowers. Scents such as lavender, peppermint, and sandalwood interact with the brain’s limbic system, helping to reduce anxiety, elevate mood, and improve focus. Regular aromatherapy sessions promote relaxation, emotional stability, and a sense of inner harmony.",
    image: blog3,
  },
  {
    id: 4,
    title: "Hot Stone Massage: Healing from Within",
    slug: "hot-stone-massage-healing",
    date: "July 05, 2025",
    description:
      "Hot stone massage is a deeply relaxing therapy that uses smooth, heated stones placed on key points of the body. The warmth penetrates deep into the muscles, relieving tension, easing joint stiffness, and improving blood flow. Combined with massage techniques, this treatment promotes detoxification, reduces stress, and creates a profound sense of physical and emotional renewal.",
    image: blog4,
  },
  {
    id: 5,
    title: "Top Spa Rituals for Total Body Detox",
    slug: "spa-rituals-for-body-detox",
    date: "July 03, 2025",
    description:
      "Spa detox rituals are designed to cleanse the body, refresh the skin, and restore internal balance. Treatments such as steam therapy, exfoliating body scrubs, herbal wraps, and hydrotherapy help eliminate toxins, improve circulation, and boost metabolism. These rituals leave the body feeling lighter, the skin revitalized, and the mind deeply relaxed.",
    image: blog5,
  },
  {
    id: 6,
    title: "How Regular Spa Visits Improve Lifestyle",
    slug: "regular-spa-visits-improve-lifestyle",
    date: "July 01, 2025",
    description:
      "Incorporating regular spa visits into your lifestyle supports overall health, emotional balance, and stress management. Consistent treatments help regulate sleep patterns, strengthen the immune system, and promote mental relaxation. Over time, spa care becomes a powerful self-care practice that enhances productivity, emotional wellbeing, and long-term quality of life.",
    image: blog6,
  },
];

export const appointmentData = [
  {
    id: 1,
    clientName: "Ayesha Khan",
    serviceType: "In House",
    service: "Deep Tissue Massage",
    date: "24 Jan 2025",
    time: "8:00 PM",
    duration: "60 min",
    location: "Dubai",
    status: "Upcoming",
  },
  {
    id: 2,
    clientName: "Mohammed Ali",
    serviceType: "In Shop",
    service: "Aromatherapy Session",
    date: "25 Jan 2025",
    time: "10:00 AM",
    duration: "90 min",
    location: "Dubai",
    status: "Completed",
  },
  {
    id: 3,
    clientName: "Sara Ahmed",
    serviceType: "In House",
    service: "Hot Stone Massage",
    date: "26 Jan 2025",
    time: "8:00 PM",
    duration: "30 min",
    location: "Dubai",
    status: "Upcoming",
  },
  {
    id: 4,
    clientName: "Omar Farooq",
    serviceType: "In Shop",
    service: "Swedish Relaxation Massage",
    date: "27 Jan 2025",
    time: "10:00 AM",
    duration: "60 min",
    location: "Dubai",
    status: "Completed",
  },
  {
    id: 5,
    clientName: "Fatima Noor",
    serviceType: "In House",
    service: "Full Body Spa Therapy",
    date: "28 Jan 2025",
    time: "8:00 PM",
    duration: "90 min",
    location: "Dubai",
    status: "Upcoming",
  },
  {
    id: 6,
    clientName: "Ayesha Khan",
    serviceType: "In House",
    service: "Deep Tissue Massage",
    date: "24 Jan 2025",
    time: "8:00 PM",
    duration: "60 min",
    location: "Dubai",
    status: "Upcoming",
  },
  {
    id: 7,
    clientName: "Mohammed Ali",
    serviceType: "In Shop",
    service: "Aromatherapy Session",
    date: "25 Jan 2025",
    time: "10:00 AM",
    duration: "90 min",
    location: "Dubai",
    status: "Completed",
  },
  

];

export const statusColors = {
  Upcoming: "bg-amber-300",
  Completed: "bg-green-300",
  Ongoing: "bg-blue-300",
  Cancelled: "bg-red-300",
  Active: "bg-blue-300",
};



  export const earnings = [
    {
      id: 1,
      date: "Dec 28, 2024",
      service: "Swedish Massage",
      client: "Emma Johnson",
      amount: 150,
      commission: 15,
      status: "completed",
    },
    {
      id: 2,
      date: "Dec 27, 2024",
      service: "Facial Treatment",
      client: "Michael Chen",
      amount: 120,
      commission: 12,
      status: "completed",
    },
    {
      id: 3,
      date: "Dec 27, 2024",
      service: "Deep Tissue Massage",
      client: "Jessica Martinez",
      amount: 200,
      commission: 20,
      status: "pending",
    },
    {
      id: 4,
      date: "Dec 26, 2024",
      service: "Hot Stone Therapy",
      client: "David Wilson",
      amount: 180,
      commission: 18,
      status: "completed",
    },
    {
      id: 5,
      date: "Dec 26, 2024",
      service: "Aromatherapy",
      client: "Sarah Lee",
      amount: 95,
      commission: 9.5,
      status: "frozen",
    },
  ]


  export const serviceTypes = [
  {
    id: 1,
    value: "In Shop",
    title: "In-Shop Experience",
    description:
      "Visit one of our luxurious spa locations for a complete wellness immersion",
    icon: Store, 
    features: [
      "Premium facilities",
      "Refreshments included",
      "Access to amenities",
      "Relaxation lounges",
    ],
  },
  {
    id: 2,
    value: "In House",
    title: "Home Service",
    description:
      "Enjoy our premium treatments in the comfort of your own space",
    icon: Home,
    features: [
      "Complete privacy",
      "Flexible scheduling",
      "Professional setup",
      "Same luxury experience",
    ],
  },
];


export const timeSlots = [
  { time: "09:00", status: "available" },
  { time: "09:30", status: "available" },
  { time: "10:00", status: "available" },
  { time: "10:30", status: "available" },

  { time: "11:00", status: "available" },
  { time: "11:30", status: "notAvailable" },
  { time: "12:00", status: "available" },
  { time: "12:30", status: "notAvailable" },

  { time: "13:00", status: "available" },
  { time: "13:30", status: "available" },
  { time: "14:00", status: "available" },
  { time: "14:30", status: "notAvailable" },

  { time: "15:00", status: "notAvailable" },
  { time: "15:30", status: "available" },
  { time: "16:00", status: "available" },
  { time: "16:30", status: "available" },

  { time: "17:00", status: "available" },
  { time: "17:30", status: "available" },
  { time: "18:00", status: "available" },
  { time: "18:30", status: "available" },

  { time: "19:00", status: "available" },
  { time: "19:30", status: "available" },
  { time: "20:00", status: "available" },
  { time: "20:30", status: "available" },
];

