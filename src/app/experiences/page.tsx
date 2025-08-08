import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Offsite Experiences & Activities | Team Building Programs",
  description: "Discover leadership retreats, adventure offsites, wellness programs, and team building experiences designed for corporate groups across India.",
  keywords: "corporate experiences, team building activities, leadership retreats, adventure offsites, wellness programs"
};

const experiences = [
  {
    slug: "leadership-retreats",
    name: "Leadership Retreats",
    description: "Strategic leadership development programs for C-suite executives and senior management",
    icon: "🎯"
  },
  {
    slug: "adventure-offsites", 
    name: "Adventure Offsites",
    description: "High-energy team building through outdoor adventures and challenges",
    icon: "🏔️"
  },
  {
    slug: "wellness-retreats",
    name: "Wellness Retreats", 
    description: "Comprehensive wellness programs focusing on mental health and work-life balance",
    icon: "🧘"
  }
];

export default function ExperiencesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">Corporate Offsite Experiences</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your team with carefully curated experiences designed to build leadership, 
          enhance collaboration, and drive organizational success.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {experiences.map((experience) => (
          <Link
            key={experience.slug}
            href={`/experiences/${experience.slug}`}
            className="block bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{experience.icon}</div>
            <h2 className="text-2xl font-bold mb-4">{experience.name}</h2>
            <p className="text-gray-600">{experience.description}</p>
            <span className="inline-block mt-4 text-secondary font-semibold">
              Learn More →
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
