import Link from "next/link";
import type { Metadata } from "next";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Corporate Offsite Experiences & Activities | Team Building Programs",
  description: "Discover leadership retreats, adventure offsites, wellness programs, and team building experiences designed for corporate groups across India.",
  keywords: "corporate experiences, team building activities, leadership retreats, adventure offsites, wellness programs"
};

export default function ExperiencesPage() {
  // Icon mapping for experiences
  const iconMap: { [key: string]: string } = {
    'leadership-retreats': '🎯',
    'adventure-offsites': '🏔️',
    'wellness-retreats': '🧘'
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-6">
            Corporate Offsite 
            <span className="block text-sky-400">Experiences</span>
          </h1>
          <p className="body-text max-w-3xl mx-auto">
            Choose from our curated experiences designed to strengthen teams,
            build leadership capabilities, and create transformative memories that last.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((experience) => (
            <Link
              key={experience.slug}
              href={`/experiences/${experience.slug}`}
              className="glass-card p-8 text-center hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[experience.slug] || '🎪'}
              </div>
              <h3 className="heading-3 mb-4">{experience.name}</h3>
              <p className="body-text mb-6 line-clamp-4">
                {experience.description.slice(0, 150)}...
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/80 mb-2">Key Objectives:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {experience.objectives.slice(0, 2).map((objective, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full 
                               border border-white/20 backdrop-blur-sm"
                    >
                      {objective}
                    </span>
                  ))}
                </div>
              </div>
              
              <span className="btn-ghost">
                Explore Experience →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-panel p-8 lg:p-12 max-w-3xl mx-auto">
            <h2 className="heading-2 mb-4">
              Need a Custom Experience?
            </h2>
            <p className="body-text mb-6">
              We can design bespoke experiences tailored to your team&apos;s specific 
              objectives, industry needs, and cultural preferences.
            </p>
            <Link href="/contact" className="btn-primary">
              Design Custom Experience
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
