import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export const metadata = {
  title: "Corporate Offsite Destinations in India",
  description:
    "Browse and filter the best destinations for your corporate offsite.",
};

export default function Destinations() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-6">
            Corporate Offsite 
            <span className="block text-sky-400">Destinations</span>
          </h1>
          <p className="body-text max-w-3xl mx-auto">
            Discover India&apos;s most inspiring locations for corporate offsites,
            team building experiences, and leadership retreats across diverse landscapes.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="destination-card group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={`/destinations/${destination.slug}.svg`}
                  alt={`Corporate offsite in ${destination.name}`}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/90 text-sm font-medium">
                    {destination.state} • {destination.region}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="heading-3 mb-3">{destination.name}</h3>
                <p className="body-text mb-4 line-clamp-3">
                  {destination.description.slice(0, 120)}...
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.highlights.slice(0, 3).map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full 
                               border border-white/20 backdrop-blur-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="caption">Premium destination</span>
                  <span className="btn-ghost">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-panel p-8 lg:p-12 max-w-3xl mx-auto">
            <h2 className="heading-2 mb-4">
              Can&apos;t Find Your Perfect Destination?
            </h2>
            <p className="body-text mb-6">
              We work with locations across India. Let us know your preferences 
              and we&apos;ll find the perfect spot for your team offsite.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Custom Recommendations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

