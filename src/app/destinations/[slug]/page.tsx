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
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <section className="relative w-full h-80 rounded-lg overflow-hidden">
          <Image
            src={`/destinations/${destination.slug}.svg`}
            alt={destination.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{destination.name}</h1>
              <p className="text-xl">{destination.state} • {destination.region}</p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{destination.description}</p>
        </section>

        {/* Highlights */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose {destination.name}?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {destination.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-accent text-xl">✓</span>
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Best Time to Visit</h3>
          <p className="text-lg text-gray-700">{destination.bestTimeToVisit}</p>
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

