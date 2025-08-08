import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import JsonLdSchema from "@/components/JsonLdSchema";
import type { Metadata } from "next";
import { getExperienceBySlug } from "@/data/experiences";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params?.slug as string;
  const experience = getExperienceBySlug(slug);
  
  if (!experience) {
    return {
      title: "Experience Not Found | Corporate Offsite",
      description: "The requested experience page could not be found."
    };
  }

  return {
    title: `${experience.name} | Corporate ${experience.category} Programs`,
    description: `${experience.description.substring(0, 150)}...`,
    keywords: `${experience.name.toLowerCase()}, corporate ${experience.category.toLowerCase()}, team building, corporate training`,
    openGraph: {
      title: experience.name,
      description: experience.description,
      type: "website"
    }
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ExperienceDetail({ params }: any) {
  const slug = params?.slug as string;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return notFound();
  }

  // JSON-LD Schema for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": experience.name,
    "description": experience.description,
    "provider": {
      "@type": "Organization",
      "name": "Corporate Offsite"
    },
    "serviceType": experience.category,
    "audience": {
      "@type": "Audience",
      "audienceType": experience.targetAudience.join(", ")
    },
    "offers": experience.packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.name,
      "description": pkg.duration,
      "price": pkg.price,
      "priceCurrency": "INR"
    }))
  };

  return (
    <>
      <JsonLdSchema schema={serviceSchema} />
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">{experience.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{experience.description}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Duration: {experience.duration}
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Group Size: {experience.groupSize}
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
              {experience.category}
            </span>
          </div>
        </section>

        {/* Objectives */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Program Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experience.objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-accent text-xl">🎯</span>
                <span className="text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Target Audience */}
        <section className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experience.targetAudience.map((audience, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">👥</span>
                <span className="font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
                <p className="text-gray-600 mb-2">{activity.description}</p>
                <p className="text-sm text-gray-500">Duration: {activity.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Expected Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experience.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                <span className="text-green-600 text-xl">✅</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Destinations */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Recommended Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {experience.destinations.map((destination, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold">{destination}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Program Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.packages.map((pkg, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-2">{pkg.duration}</p>
                <p className="text-2xl font-bold text-secondary mb-4">{pkg.price}</p>
                <h4 className="font-semibold mb-2">Includes:</h4>
                <ul className="space-y-1">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={experience.faqs} title={`${experience.name} - Frequently Asked Questions`} />

        {/* Lead Form */}
        <section className="bg-primary text-white py-16 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Team?</h2>
            <p className="text-xl">Get a customized {experience.name.toLowerCase()} proposal</p>
          </div>
          <LeadForm />
        </section>
      </div>
    </>
  );
}

// Enable SSG for known experience types
export function generateStaticParams() {
  return [
    { slug: "leadership-retreats" },
    { slug: "adventure-offsites" },
    { slug: "wellness-retreats" }
  ];
}
