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
    description: "Goa stands as India's premier beach destination, offering an unparalleled blend of relaxation, adventure, and cultural richness that makes it the perfect choice for corporate offsites and team building experiences. This coastal paradise, located on India's western shores along the Arabian Sea, provides a unique combination of Portuguese colonial heritage, pristine golden beaches, world-class hospitality infrastructure, and a vibrant atmosphere that creates the ideal environment for both productive business sessions and meaningful team bonding.\n\nThe state's compact geography ensures that teams can experience diverse landscapes and activities within short distances, from serene beaches perfect for morning yoga sessions and strategic planning meetings to adventure-filled water sports that challenge teams and build trust. Goa's well-established tourism infrastructure includes numerous five-star resorts and boutique properties specifically designed to cater to corporate groups, offering state-of-the-art conference facilities, breakout rooms, and recreational amenities that support both formal presentations and informal networking sessions.\n\nWhat sets Goa apart as a corporate destination is its ability to seamlessly blend professional requirements with leisure experiences. The destination offers year-round accessibility with excellent flight connectivity from major Indian cities, making it convenient for teams from across the country. The laid-back Goan culture encourages open communication and creative thinking, while the scenic beauty provides a refreshing change from typical urban meeting environments, often leading to more innovative solutions and stronger team dynamics.\n\nThe region's rich cultural tapestry, influenced by centuries of Portuguese rule, creates unique opportunities for team experiences that go beyond traditional corporate activities. From exploring historic churches and colonial architecture to participating in local festivals and culinary experiences, corporate groups can engage in shared cultural discoveries that strengthen relationships and create lasting memories. The famous Goan hospitality, characterized by warmth and personalized service, ensures that every aspect of the corporate offsite is managed with attention to detail and genuine care for guest satisfaction.",
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
      "Beach volleyball tournaments and cricket matches on pristine sand courts with professional equipment and coaching",
      "Comprehensive water sports packages including parasailing, jet skiing, banana boat rides, water skiing, windsurfing, and kayaking with certified instructors",
      "Sunset cruises on traditional Goan boats with dolphin watching, live music, and networking opportunities over refreshments",
      "Specially designed beach-based team building activities including treasure hunts, sandcastle building competitions, and collaborative beach games",
      "In-depth cultural tours covering UNESCO World Heritage sites, Portuguese churches, spice plantations, and local markets with expert guides",
      "Adventure sports experiences including zip-lining through forest canopies, ATV rides across diverse terrains, and rock climbing on natural formations",
      "Culinary team building experiences including Goan cooking classes, spice farm visits, feni tasting sessions, and collaborative meal preparation",
      "Wellness and mindfulness activities such as beach yoga sessions, meditation workshops, and spa treatments in natural settings",
      "Professional photography and videography sessions to capture team moments against Goa's stunning backdrops",
      "Evening entertainment programs featuring traditional Goan folk dances, live music performances, and cultural shows",
      "Educational workshops on local ecology, marine conservation, and sustainable tourism practices",
      "Adventure trekking through Western Ghats, bird watching in wildlife sanctuaries, and nature walks through spice plantations",
      "Water-based team challenges including sailing regattas, fishing expeditions, and collaborative raft building activities",
      "Historical exploration tours covering ancient temples, colonial forts, and archaeological sites with storytelling sessions"
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
    description: "Nestled in the Western Ghats of Karnataka, Coorg (officially known as Kodagu) emerges as the 'Scotland of India,' offering an enchanting landscape of rolling hills, emerald coffee plantations, and mist-covered valleys that create the perfect backdrop for transformative corporate retreats. This hill station paradise, located at an elevation ranging from 900 to 1715 meters above sea level, provides a refreshing escape from urban environments while offering world-class facilities for business meetings, team building activities, and strategic planning sessions.\n\nThe region's unique geographical position creates a naturally conducive environment for focused thinking and creative problem-solving. The cool mountain climate, with temperatures ranging between 15-25°C throughout the year, provides comfortable conditions for both indoor conferences and outdoor team activities. The abundant natural beauty, including cascading waterfalls, dense forests, and aromatic spice gardens, serves as a constant source of inspiration and helps reduce stress levels, leading to more productive and innovative corporate sessions.\n\nCoorg's coffee culture adds a distinctive dimension to corporate experiences, with opportunities for teams to engage in coffee plantation tours, participate in the coffee-making process from bean to cup, and enjoy networking sessions in scenic plantation settings. The region's rich biodiversity, including rare flora and fauna, provides unique opportunities for team building activities that emphasize environmental consciousness and sustainable business practices.\n\nThe local Kodava culture, known for its hospitality and unique traditions, offers corporate groups authentic cultural experiences that can be seamlessly integrated into team building programs. From traditional Kodava cuisine experiences to learning about local customs and martial arts, teams can bond over shared cultural discoveries while developing a deeper appreciation for India's diverse heritage. The region's proximity to Bangalore (260 km) makes it easily accessible for corporate groups from South India's IT hub, while still providing a complete change of environment that enhances the retreat experience.",
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
      "Comprehensive coffee plantation experiences including guided tours through sprawling estates, hands-on coffee processing workshops, cupping sessions with expert tasters, and collaborative coffee roasting activities",
      "Multi-level trekking expeditions ranging from gentle nature walks through spice gardens to challenging summit climbs of Tadiandamol Peak, with team building elements incorporated throughout",
      "Exhilarating white water rafting adventures on the Barapole River with varying difficulty levels, professional safety equipment, and team coordination challenges",
      "Outdoor team building programs utilizing Coorg's natural amphitheaters, including obstacle courses through coffee plantations, collaborative problem-solving in forest settings, and trust-building exercises",
      "Immersive cultural experiences featuring traditional Kodava dance performances, authentic local cuisine cooking classes, and storytelling sessions about regional folklore and traditions",
      "Wildlife safari adventures at Nagarhole National Park with elephant spotting, bird watching, and educational sessions on conservation and biodiversity",
      "Adventure rope courses and zip-lining experiences through forest canopies, designed to build trust, overcome fears, and encourage mutual support among team members",
      "Wellness retreats incorporating yoga sessions in misty mountain settings, meditation workshops beside waterfalls, and spa treatments using locally sourced herbs and spices",
      "Photography expeditions capturing the region's stunning landscapes, with team-based photo challenges and collaborative storytelling through visual narratives",
      "Sustainable agriculture workshops where teams learn about organic farming practices, participate in plantation maintenance, and understand environmental stewardship",
      "Traditional Kodava martial arts demonstrations and basic training sessions that emphasize discipline, respect, and physical coordination",
      "Culinary adventures including spice plantation visits, honey harvesting experiences, and collaborative preparation of traditional Kodava specialties like Pandi Curry and Kadambuttu",
      "Night-time activities such as campfire sessions with traditional music, stargazing workshops, and overnight camping experiences in scenic locations",
      "Educational tours of local temples, Raja's Seat viewpoint, and Abbey Falls with historical context and team reflection sessions"
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
    description: "Rishikesh, revered as the 'Yoga Capital of the World' and nestled in the serene foothills of the mighty Himalayas along the sacred banks of the River Ganges, presents an extraordinary destination for corporate offsites that seamlessly blends spiritual enrichment, adventure activities, and transformative team building experiences. This holy city in Uttarakhand offers a unique environment where modern corporate requirements meet ancient wisdom, creating an atmosphere conducive to both personal growth and professional development.\n\nThe city's strategic location at the gateway to the Himalayas provides a stunning natural backdrop that inspires creativity and promotes mental clarity essential for strategic thinking and decision-making. The constant sound of the flowing Ganges, combined with the fresh mountain air and panoramic views of forested hills, creates a naturally calming environment that reduces stress levels and enhances focus during important business discussions and planning sessions.\n\nRishikesh's reputation as a global center for yoga and meditation offers corporate groups unprecedented opportunities to incorporate wellness and mindfulness practices into their professional development programs. The presence of numerous ashrams, spiritual centers, and certified yoga instructors provides access to authentic practices that can significantly improve team dynamics, emotional intelligence, and leadership capabilities. These spiritual elements, when integrated with traditional corporate training, create a holistic approach to professional development that addresses both individual and collective growth.\n\nThe adventure sports infrastructure in Rishikesh is among the best in India, with the Ganges providing perfect conditions for white water rafting, while the surrounding mountains offer opportunities for bungee jumping, zip-lining, and trekking. These activities are not just recreational; they are carefully designed to challenge comfort zones, build trust among team members, and develop leadership skills under pressure. The city's adventure tourism industry is well-regulated with professional operators who prioritize safety while delivering transformative experiences.\n\nRishikesh's proximity to Delhi (approximately 240 kilometers) makes it easily accessible for corporate groups from the National Capital Region, while its spiritual significance and natural beauty provide a complete change of environment that enhances the retreat experience. The city offers a range of accommodation options from luxury resorts to traditional ashrams, allowing corporate groups to choose settings that align with their specific objectives and preferences.",
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
      "Professional white water rafting expeditions on the Ganges with varying difficulty levels, from gentle family-friendly rides to challenging rapids that test teamwork and communication under pressure",
      "Adrenaline-pumping bungee jumping experiences from a 83-meter platform, giant swing adventures, and flying fox activities that build courage and mutual support among team members",
      "Comprehensive yoga and meditation programs led by certified instructors, including sunrise sessions by the Ganges, advanced pranayama workshops, and mindfulness training for enhanced leadership presence",
      "Adventure-based team building activities including river crossing challenges, mountain climbing expeditions, and survival skills workshops that develop problem-solving abilities and team cohesion",
      "Spiritual and cultural immersion experiences including guided tours of ancient temples, participation in Ganga Aarti ceremonies, and interactions with spiritual teachers and yogis",
      "Multi-day trekking adventures through Himalayan foothills, nature walks in Rajaji National Park, and eco-tours that combine physical challenges with environmental awareness",
      "Wellness retreats incorporating Ayurvedic consultations, therapeutic spa treatments using traditional herbs, and detoxification programs that rejuvenate mind and body",
      "Leadership development programs combining outdoor challenges with introspective practices, helping executives develop authentic leadership styles and emotional intelligence",
      "Corporate camping experiences under the stars with team-building around campfires, storytelling sessions, and collaborative meal preparation in natural settings",
      "Photography expeditions capturing the spiritual essence and natural beauty of Rishikesh, with team-based photo challenges and creative collaboration projects",
      "Cultural workshops including learning traditional Indian arts, music, and dance, fostering creativity and cross-cultural understanding within corporate teams",
      "Sustainable tourism and environmental conservation activities, including tree planting, river cleaning initiatives, and learning about ecological preservation",
      "Rock climbing and rappelling adventures on natural cliff faces with professional instruction, safety equipment, and team support systems",
      "Corporate social responsibility programs working with local communities, NGOs, and educational institutions to create meaningful impact while building team purpose"
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
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North India",
    description: "The magnificent Pink City of Jaipur, capital of royal Rajasthan, stands as one of India's most compelling destinations for corporate offsites that seek to combine business objectives with rich cultural heritage and architectural grandeur. This UNESCO World Heritage city offers a unique blend of historical magnificence, modern conference facilities, and distinctive Rajasthani hospitality that creates an inspiring environment for strategic planning, team building, and leadership development programs.\n\nJaipur's extraordinary architectural heritage, including iconic structures like the Hawa Mahal, City Palace, and Amber Fort, provides a majestic backdrop that naturally elevates the significance of corporate events and meetings. The city's royal legacy and cultural richness offer unparalleled opportunities for teams to experience India's glorious past while working on future strategies, creating a sense of perspective and inspiration that enhances creative thinking and strategic planning.\n\nThe modern infrastructure of Jaipur seamlessly complements its historical charm, with world-class hotels, conference centers, and business facilities that meet international standards while retaining authentic Rajasthani character. The city's well-developed tourism ecosystem ensures professional event management, reliable logistics, and exceptional service standards that allow corporate groups to focus entirely on their objectives without operational concerns.\n\nJaipur's strategic location, excellent connectivity via air, rail, and road networks, and proximity to other major destinations make it an ideal base for corporate programs. The city's vibrant markets, traditional crafts, and cultural performances provide rich content for team building activities that emphasize collaboration, creativity, and cross-cultural understanding, making it perfect for diverse corporate groups seeking meaningful shared experiences.",
    highlights: [
      "UNESCO World Heritage city with magnificent architecture",
      "Royal palaces and forts providing inspiring venues",
      "Vibrant culture and traditional Rajasthani hospitality",
      "Excellent connectivity and modern infrastructure",
      "Rich opportunities for cultural team building activities",
      "Professional event management and luxury accommodations"
    ],
    bestTimeToVisit: "October to March",
    activities: [
      "Heritage walks through the Pink City with expert guides, exploring architectural marvels, traditional markets, and learning about Rajasthani history and culture",
      "Royal palace tours including private access to City Palace, Amber Fort, and Hawa Mahal with special arrangements for corporate groups and team photography sessions",
      "Traditional Rajasthani cultural experiences including folk dance performances, puppet shows, and interactive sessions with local artisans and craftspeople",
      "Luxury desert camping experiences with camel safaris, traditional music around campfires, and stargazing sessions that build team bonds in unique settings",
      "Culinary adventures featuring authentic Rajasthani cooking classes, spice market tours, and collaborative preparation of traditional royal feasts",
      "Adventure activities including hot air balloon rides over the city, zip-lining adventures, and rock climbing in the Aravalli hills surrounding Jaipur",
      "Artisan workshops where teams learn traditional crafts like block printing, pottery, jewelry making, and miniature painting in collaborative settings",
      "Heritage hotel experiences with royal treatment, traditional ceremonies, and authentic Rajasthani hospitality that creates memorable shared experiences",
      "Photography expeditions capturing the city's vibrant colors, architectural details, and cultural moments with professional guidance and team challenges",
      "Wellness programs incorporating traditional Ayurvedic treatments, yoga sessions in palace gardens, and meditation practices in serene heritage settings",
      "Corporate social responsibility activities working with local communities, supporting traditional crafts, and contributing to heritage preservation efforts",
      "Team building treasure hunts through the old city, solving riddles based on historical facts, and collaborative exploration of hidden gems",
      "Traditional games and sports tournaments including elephant polo demonstrations, camel races, and collaborative participation in royal Rajasthani games",
      "Strategic planning sessions in inspiring locations like rooftop terraces overlooking the city, palace courtyards, and gardens that stimulate creative thinking"
    ],
    venues: [
      {
        name: "Rambagh Palace",
        type: "Heritage Luxury Hotel",
        capacity: "300+ delegates",
        features: ["Former royal palace", "Luxury conference facilities", "Heritage courtyards", "Royal dining experiences"]
      },
      {
        name: "The Oberoi Rajvilas",
        type: "Luxury Resort",
        capacity: "200+ delegates",
        features: ["Palatial architecture", "Modern conference rooms", "Spa and wellness center", "Cultural programs"]
      },
      {
        name: "Fairmont Jaipur",
        type: "Contemporary Palace Hotel",
        capacity: "400+ delegates",
        features: ["Mughal-inspired architecture", "State-of-the-art facilities", "Multiple venues", "Rooftop settings"]
      }
    ],
    faqs: [
      {
        question: "What makes Jaipur unique for corporate offsites?",
        answer: "Jaipur offers a perfect blend of historical grandeur and modern facilities, creating an inspiring environment that enhances creativity and strategic thinking while providing excellent infrastructure for business needs."
      },
      {
        question: "What cultural activities can be integrated into corporate programs?",
        answer: "Teams can participate in heritage walks, traditional craft workshops, cultural performances, royal dining experiences, and artisan interactions that build team bonds while exploring Rajasthani culture."
      },
      {
        question: "How is the connectivity and accessibility to Jaipur?",
        answer: "Jaipur has excellent connectivity with direct flights from major cities, well-connected rail networks, and good road infrastructure. It's also close to Delhi (280 km) making it easily accessible."
      },
      {
        question: "Are there adventure activities available in Jaipur?",
        answer: "Yes, Jaipur offers hot air ballooning, desert camping, camel safaris, trekking in Aravalli hills, zip-lining, and various outdoor team building activities in scenic locations."
      }
    ]
  },
  {
    slug: "manali",
    name: "Manali",
    state: "Himachal Pradesh", 
    region: "North India",
    description: "Nestled in the breathtaking Beas River Valley of Himachal Pradesh, Manali emerges as one of India's most spectacular mountain destinations for corporate offsites that combine adventure, natural beauty, and team building in an alpine setting. This charming hill station, situated at an altitude of 2,050 meters in the mighty Himalayas, offers corporate groups an extraordinary opportunity to escape urban environments and engage in transformative experiences surrounded by snow-capped peaks, pine forests, and pristine mountain air.\n\nManali's dramatic landscape provides a naturally inspiring environment that enhances creativity, promotes clear thinking, and facilitates meaningful team connections. The stunning mountain vistas, rushing rivers, and expansive valleys create a sense of perspective that helps teams see beyond immediate challenges and develop innovative solutions to complex business problems. The crisp mountain air and serene environment naturally reduce stress levels and improve focus, making it ideal for strategic planning sessions and leadership retreats.\n\nThe destination offers an impressive range of adventure activities that are perfectly suited for team building and leadership development. From river rafting on the Beas River to trekking through alpine meadows, these activities challenge comfort zones, build trust among team members, and develop leadership skills under pressure. The mountain environment provides natural metaphors for business challenges, making experiential learning more impactful and memorable.\n\nManali's well-developed infrastructure includes luxury resorts, comfortable hotels, and professional adventure operators who specialize in corporate group experiences. The destination's accessibility via road from Delhi and Chandigarh, combined with its established tourism ecosystem, ensures that corporate groups can enjoy seamless logistics while focusing entirely on their program objectives. The local Himachali culture adds authenticity to the experience, with opportunities for cultural exchanges and traditional experiences that enrich team building programs.",
    highlights: [
      "Spectacular Himalayan mountain setting with snow-capped peaks",
      "Wide range of adventure activities for team building",
      "Cool mountain climate ideal for focused discussions",
      "Rich biodiversity and pristine natural environment",
      "Authentic Himachali culture and warm hospitality",
      "Well-established infrastructure with luxury accommodations"
    ],
    bestTimeToVisit: "March to June, September to November",
    activities: [
      "White water rafting expeditions on the Beas River with professional guides, safety equipment, and team coordination challenges that build trust and communication skills",
      "Multi-day trekking adventures through alpine meadows, pine forests, and high-altitude passes with camping experiences that strengthen team bonds and resilience",
      "Paragliding experiences over the Kullu Valley with tandem flights, group challenges, and shared adrenaline experiences that build confidence and mutual support",
      "Mountain biking expeditions through scenic trails, village paths, and challenging terrains that require teamwork, strategy, and collaborative problem-solving",
      "Rock climbing and rappelling activities on natural cliff faces with professional instruction, safety protocols, and team support systems",
      "Cultural immersion experiences including visits to ancient temples, traditional Himachali villages, and interactions with local communities",
      "Corporate camping expeditions in scenic locations with team-building around campfires, stargazing sessions, and collaborative outdoor cooking experiences",
      "Photography workshops capturing the majestic mountain landscapes, with team-based challenges and creative collaboration projects",
      "Wellness and mindfulness programs including mountain yoga sessions, meditation retreats, and nature-based stress reduction activities",
      "Traditional adventure sports like skiing (in winter), snowboarding, and snow-based team building activities during the winter season",
      "Corporate social responsibility programs working with local communities on environmental conservation, education, and sustainable tourism initiatives",
      "Survival skills workshops and outdoor education programs that develop leadership, problem-solving, and team coordination abilities",
      "Hot air balloon rides over the valley (seasonal) providing spectacular aerial views and shared experiences that create lasting team memories",
      "Traditional Himachali cultural programs including folk dances, local music performances, and authentic regional cuisine experiences"
    ],
    venues: [
      {
        name: "The Himalayan",
        type: "Luxury Mountain Resort",
        capacity: "150+ delegates",
        features: ["Mountain views", "Conference facilities", "Adventure activities", "Spa and wellness"]
      },
      {
        name: "Snow Valley Resorts",
        type: "Alpine Resort",
        capacity: "100+ delegates", 
        features: ["Riverside location", "Outdoor venues", "Adventure sports", "Cultural programs"]
      },
      {
        name: "Club Mahindra Kandaghat",
        type: "Mountain Resort",
        capacity: "120+ delegates",
        features: ["Pine forest setting", "Team building facilities", "Recreation amenities", "Local experiences"]
      }
    ],
    faqs: [
      {
        question: "What adventure activities are available in Manali for corporate groups?",
        answer: "Manali offers river rafting, trekking, paragliding, mountain biking, rock climbing, camping, and seasonal snow activities, all designed to build teamwork and leadership skills."
      },
      {
        question: "How is the weather and accessibility to Manali?",
        answer: "Manali has pleasant weather from March to November, with cool temperatures ideal for activities. It's accessible by road from Delhi (570 km) and Chandigarh (310 km) with scenic mountain drives."
      },
      {
        question: "Is Manali suitable for strategic planning and business meetings?",
        answer: "Yes, the serene mountain environment with minimal distractions creates perfect conditions for focused strategic discussions, creative thinking, and productive business sessions."
      },
      {
        question: "What safety measures are in place for adventure activities?",
        answer: "All adventure activities are conducted by certified operators with professional guides, quality safety equipment, comprehensive briefings, and strict adherence to international safety standards."
      }
    ]
  }
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(dest => dest.slug === slug);
}
