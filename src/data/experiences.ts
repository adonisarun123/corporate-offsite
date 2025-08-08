export interface Experience {
  slug: string;
  name: string;
  category: string;
  description: string;
  objectives: string[];
  targetAudience: string[];
  duration: string;
  groupSize: string;
  activities: {
    name: string;
    description: string;
    duration: string;
  }[];
  benefits: string[];
  destinations: string[];
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

export const experiences: Experience[] = [
  {
    slug: "leadership-retreats",
    name: "Leadership Retreats",
    category: "Leadership Development",
    description: "Intensive leadership development programs designed to enhance strategic thinking, decision-making, and team leadership capabilities through experiential learning and expert facilitation.",
    objectives: [
      "Develop strategic leadership skills",
      "Enhance decision-making capabilities",
      "Build effective communication skills",
      "Foster innovation and creative thinking",
      "Strengthen team leadership abilities",
      "Create alignment on organizational vision"
    ],
    targetAudience: [
      "C-Suite Executives",
      "Senior Management",
      "Department Heads",
      "High-potential leaders",
      "Board members",
      "Leadership teams"
    ],
    duration: "2-5 days",
    groupSize: "10-50 participants",
    activities: [
      {
        name: "Strategic Planning Sessions",
        description: "Intensive workshops focused on long-term strategic planning and organizational direction",
        duration: "4-6 hours"
      },
      {
        name: "Leadership Simulations",
        description: "Real-world business scenarios and role-playing exercises to test leadership skills",
        duration: "2-3 hours"
      },
      {
        name: "Executive Coaching",
        description: "One-on-one coaching sessions with certified executive coaches",
        duration: "1-2 hours per person"
      },
      {
        name: "360-Degree Feedback",
        description: "Comprehensive feedback sessions to identify strengths and development areas",
        duration: "2-3 hours"
      }
    ],
    benefits: [
      "Enhanced strategic thinking capabilities",
      "Improved decision-making under pressure",
      "Better team alignment and communication",
      "Increased confidence in leadership roles",
      "Stronger organizational culture",
      "Higher employee engagement and retention"
    ],
    destinations: ["Udaipur", "Rishikesh", "Coorg", "Jaipur"],
    packages: [
      {
        name: "Executive Leadership Intensive",
        duration: "3D/2N",
        price: "₹45,000 per person",
        includes: ["Luxury accommodation", "Expert facilitators", "All materials", "Meals", "Assessment tools"]
      },
      {
        name: "Strategic Leadership Retreat",
        duration: "5D/4N",
        price: "₹75,000 per person",
        includes: ["Premium venues", "Executive coaching", "Strategic planning tools", "All inclusive", "Follow-up sessions"]
      }
    ],
    faqs: [
      {
        question: "Who should attend leadership retreats?",
        answer: "Leadership retreats are designed for C-suite executives, senior managers, department heads, and high-potential leaders who need to enhance their strategic thinking and leadership capabilities."
      },
      {
        question: "What makes these retreats different from regular training?",
        answer: "Our leadership retreats combine intensive learning with experiential activities in inspiring locations, allowing for deeper reflection, strategic thinking, and meaningful connections away from daily distractions."
      },
      {
        question: "How do you measure the success of leadership retreats?",
        answer: "We use pre and post-retreat assessments, 360-degree feedback, goal setting, and follow-up coaching sessions to measure improvements in leadership effectiveness and organizational impact."
      },
      {
        question: "Can the program be customized for our organization?",
        answer: "Yes, all our leadership retreats are tailored to your organization's specific challenges, culture, and strategic objectives through detailed consultation and needs assessment."
      }
    ]
  },
  {
    slug: "adventure-offsites",
    name: "Adventure Offsites",
    category: "Team Building & Adventure",
    description: "High-energy adventure-based team building programs that challenge teams through outdoor activities, fostering trust, communication, and collaborative problem-solving in exciting natural environments.",
    objectives: [
      "Build trust and team cohesion",
      "Enhance communication under pressure",
      "Develop problem-solving skills",
      "Boost team morale and motivation",
      "Encourage risk-taking and innovation",
      "Strengthen interpersonal relationships"
    ],
    targetAudience: [
      "Cross-functional teams",
      "New team formations",
      "Sales teams",
      "Project teams",
      "Young professionals",
      "High-performance teams"
    ],
    duration: "1-4 days",
    groupSize: "15-100 participants",
    activities: [
      {
        name: "River Rafting",
        description: "Team-based white water rafting requiring coordination and trust",
        duration: "3-4 hours"
      },
      {
        name: "Rock Climbing & Rappelling",
        description: "Individual and team challenges on natural rock faces with safety support",
        duration: "2-3 hours"
      },
      {
        name: "Treasure Hunts",
        description: "GPS-based treasure hunts requiring strategy and teamwork",
        duration: "2-4 hours"
      },
      {
        name: "Obstacle Courses",
        description: "Team-based obstacle courses designed to test communication and coordination",
        duration: "1-2 hours"
      }
    ],
    benefits: [
      "Increased trust and team bonding",
      "Better communication under pressure",
      "Enhanced problem-solving abilities",
      "Improved leadership emergence",
      "Higher team motivation and energy",
      "Stronger workplace relationships"
    ],
    destinations: ["Rishikesh", "Goa", "Manali", "Coorg"],
    packages: [
      {
        name: "Adrenaline Team Challenge",
        duration: "2D/1N",
        price: "₹18,000 per person",
        includes: ["Adventure activities", "Safety equipment", "Certified instructors", "Accommodation", "Meals"]
      },
      {
        name: "Ultimate Adventure Expedition",
        duration: "4D/3N",
        price: "₹32,000 per person",
        includes: ["Multiple adventure activities", "Team challenges", "Leadership exercises", "Premium stay", "All inclusive"]
      }
    ],
    faqs: [
      {
        question: "What safety measures are in place for adventure activities?",
        answer: "We work with certified adventure operators who provide professional safety equipment, trained instructors, and follow international safety standards for all activities."
      },
      {
        question: "Are adventure offsites suitable for all fitness levels?",
        answer: "Yes, we design activities with varying difficulty levels and provide alternatives to ensure everyone can participate safely and meaningfully regardless of fitness level."
      },
      {
        question: "What if weather conditions are unfavorable?",
        answer: "We have backup indoor team building activities and covered venues prepared for all weather conditions, ensuring your program continues without disruption."
      },
      {
        question: "How do adventure activities translate to workplace benefits?",
        answer: "Adventure activities create shared experiences that build trust, improve communication under pressure, and develop problem-solving skills directly applicable to workplace challenges."
      }
    ]
  },
  {
    slug: "wellness-retreats",
    name: "Wellness Retreats",
    category: "Health & Wellness",
    description: "Comprehensive wellness programs focusing on mental health, physical wellbeing, and work-life balance through yoga, meditation, nutrition, and stress management techniques in serene natural settings.",
    objectives: [
      "Reduce workplace stress and burnout",
      "Improve mental health and mindfulness",
      "Enhance physical fitness and energy",
      "Develop stress management techniques",
      "Promote work-life balance",
      "Build a culture of wellness"
    ],
    targetAudience: [
      "Stressed teams and individuals",
      "Healthcare professionals",
      "IT and tech teams",
      "Senior executives",
      "Customer service teams",
      "Organizations focusing on employee wellness"
    ],
    duration: "2-7 days",
    groupSize: "10-80 participants",
    activities: [
      {
        name: "Yoga and Meditation Sessions",
        description: "Daily yoga practices and guided meditation for stress relief and mindfulness",
        duration: "1-2 hours daily"
      },
      {
        name: "Nutrition Workshops",
        description: "Education on healthy eating habits and nutrition for optimal performance",
        duration: "2-3 hours"
      },
      {
        name: "Spa and Wellness Treatments",
        description: "Professional spa treatments including massage, aromatherapy, and relaxation",
        duration: "1-2 hours per person"
      },
      {
        name: "Nature Walks and Hiking",
        description: "Gentle outdoor activities in natural settings for physical activity and fresh air",
        duration: "2-3 hours"
      }
    ],
    benefits: [
      "Reduced stress and anxiety levels",
      "Improved mental clarity and focus",
      "Better physical health and energy",
      "Enhanced emotional wellbeing",
      "Improved sleep quality",
      "Stronger team relationships through shared wellness journey"
    ],
    destinations: ["Rishikesh", "Coorg", "Wayanad", "Ooty"],
    packages: [
      {
        name: "Mindfulness & Wellness Retreat",
        duration: "3D/2N",
        price: "₹25,000 per person",
        includes: ["Wellness accommodation", "Yoga sessions", "Spa treatments", "Healthy meals", "Meditation workshops"]
      },
      {
        name: "Complete Wellness Transformation",
        duration: "7D/6N",
        price: "₹55,000 per person",
        includes: ["Luxury wellness resort", "Comprehensive wellness program", "Personal wellness consultations", "All treatments", "Wellness toolkit"]
      }
    ],
    faqs: [
      {
        question: "Do participants need prior yoga or meditation experience?",
        answer: "No prior experience is required. Our programs are designed for all levels, from beginners to advanced practitioners, with certified instructors providing appropriate guidance."
      },
      {
        question: "How do wellness retreats benefit the organization?",
        answer: "Wellness retreats reduce healthcare costs, decrease absenteeism, improve productivity, enhance employee satisfaction, and create a positive workplace culture focused on wellbeing."
      },
      {
        question: "What type of accommodation is provided?",
        answer: "We partner with wellness resorts and retreat centers that offer comfortable, serene accommodations designed to support relaxation and rejuvenation in natural settings."
      },
      {
        question: "Can wellness programs be integrated with business meetings?",
        answer: "Yes, we can design hybrid programs that combine wellness activities with strategic business sessions, creating a balanced approach to productivity and wellbeing."
      }
    ]
  }
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find(exp => exp.slug === slug);
}
