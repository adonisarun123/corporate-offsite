export interface Destination {
  slug: string;
  name: string;
  state: string;
  region: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  activities: string[];
  venues: {
    name: string;
    type: string;
    capacity: string;
    features: string[];
  }[];
  packages: {
    name: string;
    duration: string;
    price: string;
    includes: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const destinations: Destination[] = [
  {
    slug: "goa",
    name: "Goa",
    state: "Goa",
    region: "West India",
    description: "India's premier beach destination offering the perfect blend of relaxation and adventure for corporate offsites. With world-class resorts, pristine beaches, and exciting water sports, Goa provides an ideal setting for team building and networking.",
    highlights: [
      "Beautiful beaches and scenic coastline",
      "World-class resorts and conference facilities",
      "Wide range of water sports and beach activities",
      "Vibrant nightlife and entertainment options",
      "Rich Portuguese heritage and culture",
      "Excellent connectivity and infrastructure"
    ],
    bestTimeToVisit: "October to March",
    activities: [
      "Beach volleyball and cricket",
      "Water sports (parasailing, jet skiing, banana boat rides)",
      "Sunset cruise and dolphin watching",
      "Team building games on the beach",
      "Cultural tours and heritage walks",
      "Adventure sports (zip-lining, ATV rides)"
    ],
    venues: [
      {
        name: "Grand Hyatt Goa",
        type: "Luxury Beach Resort",
        capacity: "500+ delegates",
        features: ["Private beach access", "Multiple conference halls", "Outdoor venues", "Team activities"]
      },
      {
        name: "Taj Exotica Resort & Spa",
        type: "Premium Beach Resort",
        capacity: "300+ delegates",
        features: ["Beachfront location", "State-of-the-art facilities", "Spa and wellness center", "Multiple dining options"]
      },
      {
        name: "The Leela Goa",
        type: "Luxury Resort",
        capacity: "400+ delegates",
        features: ["Golf course", "Lagoon-style pools", "Premium meeting spaces", "Cultural performances"]
      }
    ],
    packages: [
      {
        name: "Beach Retreat Package",
        duration: "2N/3D",
        price: "₹12,999 per person",
        includes: ["Accommodation", "All meals", "Beach activities", "Team building sessions", "Airport transfers"]
      },
      {
        name: "Adventure Offsite Package",
        duration: "3N/4D",
        price: "₹18,999 per person",
        includes: ["Luxury accommodation", "Water sports", "Adventure activities", "Cultural tours", "All meals and transfers"]
      }
    ],
    faqs: [
      {
        question: "What is the best time to visit Goa for corporate offsites?",
        answer: "The best time is from October to March when the weather is pleasant with clear skies and comfortable temperatures, perfect for outdoor activities and beach events."
      },
      {
        question: "What types of team building activities are available in Goa?",
        answer: "Goa offers beach volleyball, water sports, treasure hunts, cultural tours, cooking classes, and various adventure activities like zip-lining and ATV rides."
      },
      {
        question: "How is the connectivity to Goa?",
        answer: "Goa has excellent connectivity with direct flights from major Indian cities. Dabolim Airport is well-connected, and there are also train and road options available."
      },
      {
        question: "What kind of accommodation options are available?",
        answer: "Goa offers luxury beach resorts, boutique hotels, and conference-ready properties with state-of-the-art meeting facilities and team activity spaces."
      }
    ]
  },
  {
    slug: "coorg",
    name: "Coorg",
    state: "Karnataka",
    region: "South India",
    description: "Known as the 'Scotland of India', Coorg offers breathtaking landscapes, coffee plantations, and misty hills perfect for corporate retreats focused on wellness and team bonding in nature's lap.",
    highlights: [
      "Scenic hill station with coffee plantations",
      "Pleasant climate throughout the year",
      "Adventure activities like trekking and river rafting",
      "Rich cultural heritage and local cuisine",
      "Peaceful environment ideal for brainstorming sessions",
      "Proximity to Bangalore (4-5 hours drive)"
    ],
    bestTimeToVisit: "October to March",
    activities: [
      "Coffee plantation tours and tastings",
      "Trekking and nature walks",
      "White water rafting in Barapole River",
      "Team building in natural settings",
      "Cultural performances and local cuisine",
      "Wildlife safari at Nagarhole National Park"
    ],
    venues: [
      {
        name: "Taj Madikeri Resort & Spa",
        type: "Luxury Hill Resort",
        capacity: "200+ delegates",
        features: ["Rainforest setting", "Conference facilities", "Spa and wellness", "Adventure activities"]
      },
      {
        name: "Evolve Back Coorg",
        type: "Heritage Resort",
        capacity: "150+ delegates",
        features: ["Traditional architecture", "Multiple venues", "Cultural experiences", "Nature activities"]
      },
      {
        name: "Club Mahindra Madikeri",
        type: "Resort",
        capacity: "100+ delegates",
        features: ["Hill station location", "Meeting rooms", "Recreation facilities", "Local experiences"]
      }
    ],
    packages: [
      {
        name: "Nature Retreat Package",
        duration: "2N/3D",
        price: "₹14,999 per person",
        includes: ["Hill resort stay", "Coffee plantation tours", "Nature activities", "All meals", "Transfers from Bangalore"]
      },
      {
        name: "Adventure Wellness Package",
        duration: "3N/4D",
        price: "₹22,999 per person",
        includes: ["Luxury accommodation", "Adventure activities", "Wellness sessions", "Cultural experiences", "All inclusive"]
      }
    ],
    faqs: [
      {
        question: "How far is Coorg from Bangalore?",
        answer: "Coorg is approximately 260 km from Bangalore, about 4-5 hours by road. We provide comfortable transport arrangements for corporate groups."
      },
      {
        question: "What makes Coorg ideal for corporate offsites?",
        answer: "Coorg's serene environment, pleasant climate, and natural beauty create the perfect setting for focused discussions, team bonding, and stress-free brainstorming sessions."
      },
      {
        question: "What adventure activities are available?",
        answer: "White water rafting, trekking, zip-lining, rock climbing, and wildlife safaris are popular adventure activities that promote team building and leadership skills."
      },
      {
        question: "Is Coorg suitable for large corporate groups?",
        answer: "Yes, Coorg has several resorts and venues that can accommodate large groups with proper meeting facilities, dining arrangements, and activity spaces."
      }
    ]
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    region: "North India",
    description: "The 'Yoga Capital of the World' and adventure hub on the banks of the holy Ganges, offering a unique blend of spirituality, adventure, and team building experiences in the foothills of the Himalayas.",
    highlights: [
      "Adventure capital with river rafting and bungee jumping",
      "Spiritual and wellness retreat opportunities",
      "Scenic location on the banks of River Ganges",
      "Perfect for leadership and mindfulness programs",
      "Rich cultural and spiritual heritage",
      "Cool climate and pristine natural environment"
    ],
    bestTimeToVisit: "March to June, September to November",
    activities: [
      "White water rafting on the Ganges",
      "Bungee jumping and giant swing",
      "Yoga and meditation sessions",
      "Team building through adventure sports",
      "Spiritual tours and Ganga Aarti",
      "Trekking and nature walks"
    ],
    venues: [
      {
        name: "Ananda in the Himalayas",
        type: "Luxury Wellness Resort",
        capacity: "200+ delegates",
        features: ["World-class spa", "Conference facilities", "Wellness programs", "Himalayan views"]
      },
      {
        name: "Aloha on the Ganges",
        type: "Riverside Resort",
        capacity: "150+ delegates",
        features: ["Ganges riverfront", "Adventure activities", "Meeting spaces", "Yoga pavilion"]
      },
      {
        name: "Ganga Kinare",
        type: "Heritage Hotel",
        capacity: "100+ delegates",
        features: ["Traditional architecture", "River views", "Conference hall", "Cultural experiences"]
      }
    ],
    packages: [
      {
        name: "Adventure Leadership Package",
        duration: "2N/3D",
        price: "₹16,999 per person",
        includes: ["Riverside accommodation", "Adventure activities", "Leadership workshops", "All meals", "Delhi transfers"]
      },
      {
        name: "Wellness & Strategy Package",
        duration: "3N/4D",
        price: "₹24,999 per person",
        includes: ["Luxury stay", "Wellness sessions", "Strategic planning facilities", "Adventure activities", "Full board"]
      }
    ],
    faqs: [
      {
        question: "What adventure activities are available in Rishikesh?",
        answer: "Rishikesh offers white water rafting, bungee jumping, flying fox, giant swing, rock climbing, and various water sports on the Ganges River."
      },
      {
        question: "How is Rishikesh connected from Delhi?",
        answer: "Rishikesh is about 240 km from Delhi, approximately 5-6 hours by road. We arrange comfortable transport for corporate groups with AC coaches."
      },
      {
        question: "Can we combine adventure with wellness programs?",
        answer: "Absolutely! Rishikesh is perfect for combining high-energy adventure activities with yoga, meditation, and wellness sessions for a balanced corporate retreat."
      },
      {
        question: "Is Rishikesh suitable for senior management retreats?",
        answer: "Yes, Rishikesh offers luxury resorts with world-class amenities, spa facilities, and serene environments perfect for strategic planning and leadership development."
      }
    ]
  }
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(dest => dest.slug === slug);
}
