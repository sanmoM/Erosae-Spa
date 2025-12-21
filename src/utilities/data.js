const { Leaf, Sun, Hand, Sparkles, Waves, Flower2 } = require("lucide-react");

export const services = [
    {
      id: 1,
      title: "Signature Aromatherapy",
      description:
        "A full-body massage using organic essential oils to harmonize the body, mind, and spirit and spirit.",
      duration: "90 min",
      price: "120",
      category: "Massage",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
      icon: <Flower2 className="w-5 h-5" />,
      tag: "Best Seller",
    },
    {
      id: 2,
      title: "Ocean Breeze Facial",
      description:
        "Deeply hydrating treatment using mineral-rich marine extracts for a naturally glowing.",
      duration: "60 min",
      price: "85",
      category: "Facial",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      icon: <Waves className="w-5 h-5" />,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Zen Stone Therapy",
      description:
        "Smooth volcanic stones are heated and placed on key energy points to melt away deep tension.",
      duration: "75 min",
      price: "145",
      category: "Therapy",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
      icon: <Sparkles className="w-5 h-5" />,
      tag: "Limited",
    },

    {
      id: 4,
      title: "Royal Thai Massage",
      description:
        "Traditional Thai stretching techniques combined with deep pressure to restore.",
      duration: "90 min",
      price: "130",
      category: "Body",
      image:
        "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&q=80&w=800",
      icon: <Hand className="w-5 h-5" />,
      tag: "Popular",
    },
    {
      id: 5,
      title: "Golden Glow Skin Ritual",
      description:
        "A luxurious facial infused with gold particles to brighten skin tone and boost collagen.",
      duration: "70 min",
      price: "110",
      category: "Luxury",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
      icon: <Sun className="w-5 h-5" />,
      tag: "Premium",
    },
    {
      id: 6,
      title: "Ayurvedic Herbal Therapy",
      description:
        "Healing herbal oils and rhythmic massage techniques to detoxify the body and .",
      duration: "80 min",
      price: "140",
      category: "Wellness",
      image:
        "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&q=80&w=800",
      icon: <Leaf className="w-5 h-5" />,
      tag: "Wellness",
    },
  ];