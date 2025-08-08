import Image from "next/image";
import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import JsonLdSchema from "@/components/JsonLdSchema";
import type { Metadata } from "next";
import { getDestinationBySlug } from "@/data/destinations";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params?.slug as string;
  const destination = getDestinationBySlug(slug);
  
  if (!destination) {
    return {
      title: "Destination Not Found | Corporate Offsite",
      description: "The requested destination page could not be found."
    };
  }

  return {
    title: `Corporate Offsite in ${destination.name} | Best ${destination.name} Corporate Retreat Packages`,
    description: `Plan your corporate offsite in ${destination.name}, ${destination.state}. ${destination.description.substring(0, 150)}...`,
    keywords: `corporate offsite ${destination.name}, ${destination.name} team building, corporate retreat ${destination.name}, business trips ${destination.state}`,
    openGraph: {
      title: `Corporate Offsite in ${destination.name}`,
      description: destination.description,
      images: [`/destinations/${destination.slug}.svg`],
      type: "website"
    }
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DestinationDetail({ params }: any) {
  const slug = params?.slug as string;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return notFound();
  }

  // JSON-LD Schema for Tourist Destination
  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.name,
    "description": destination.description,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": destination.state,
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates"
    },
    "touristType": "Corporate Groups",
    "availableLanguage": ["English", "Hindi"],
    "amenityFeature": destination.highlights.map(highlight => ({
      "@type": "LocationFeatureSpecification",
      "name": highlight
    }))
  };

  return (
    <>
      <JsonLdSchema schema={destinationSchema} />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src={`/destinations/${destination.slug}.svg`}
          alt={`Corporate offsite in ${destination.name}`}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">
              Corporate Offsite in 
              <span className="block text-sky-400">{destination.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              {destination.state} • {destination.region}
            </p>
            <div className="glass-panel p-6 md:p-8 max-w-2xl mx-auto">
              <p className="body-text leading-relaxed">
                {destination.description.slice(0, 200)}...
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-16">

        {/* Overview */}
        <section className="glass-card p-8 lg:p-12">
          <h2 className="heading-2 mb-6">Overview</h2>
          <p className="body-text leading-relaxed">{destination.description}</p>
        </section>

        {/* Highlights */}
        <section>
          <h2 className="heading-2 mb-8 text-center">Why Choose {destination.name}?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.highlights.map((highlight, index) => (
              <div key={index} className="glass-card p-6 flex items-start space-x-4 hover:-translate-y-1 transition-all duration-300">
                <span className="text-sky-400 text-2xl flex-shrink-0">✓</span>
                <span className="body-text">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="glass-panel p-8 lg:p-12 text-center">
          <h3 className="heading-3 mb-6">Best Time to Visit</h3>
          <p className="body-text max-w-3xl mx-auto">{destination.bestTimeToVisit}</p>
        </section>

        {/* Activities */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Activities & Experiences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">{activity}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Venues */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Top Venues & Resorts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.venues.map((venue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
                <p className="text-gray-600 mb-2">{venue.type}</p>
                <p className="text-sm text-gray-500 mb-3">Capacity: {venue.capacity}</p>
                <ul className="space-y-1">
                  {venue.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="text-accent mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Benefits */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Why {destination.name} for Corporate Offsites?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Strategic Environment</h3>
              <p className="text-gray-700">The inspiring natural beauty and peaceful atmosphere of {destination.name} creates the perfect environment for strategic thinking, planning sessions, and innovative problem-solving away from daily distractions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-green-600">Team Bonding</h3>
              <p className="text-gray-700">Shared experiences in {destination.name}&apos;s unique setting foster stronger relationships, improve communication, and build trust among team members through both structured activities and informal interactions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Enhanced Productivity</h3>
              <p className="text-gray-700">The change of environment and reduced stress levels lead to increased creativity, better decision-making, and more productive discussions that drive business outcomes and innovation.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={destination.faqs} title={`${destination.name} - Frequently Asked Questions`} />

        {/* Lead Form */}
        <section className="bg-primary text-white py-16 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your {destination.name} Offsite?</h2>
            <p className="text-xl">Get a customized proposal within 24 hours</p>
          </div>
          <LeadForm />
        </section>
      </div>
    </>
  );
}

// Enable SSG for all destinations
export function generateStaticParams() {
  return [
    { slug: "goa" },
    { slug: "coorg" },
    { slug: "rishikesh" },
    { slug: "jaipur" },
    { slug: "manali" },
    { slug: "udaipur" },
    { slug: "wayanad" },
    { slug: "ooty" },
    { slug: "lonavala" },
    { slug: "shillong" }
  ];
}

