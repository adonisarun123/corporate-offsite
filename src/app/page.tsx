import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Corporate Offsite Planner | Plan Team Retreats in India",
  description:
    "Explore destinations, packages, and experiences for your next corporate offsite. Get a free offsite plan within 24 hours.",
};

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <Image
          src="/hero.svg"
          alt="Corporate offsite in mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Plan the Perfect Corporate Offsite Anywhere in India
          </h1>
          <p className="mb-6 max-w-2xl mx-auto">
            Destinations, Activities, and Packages — All in One Place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/corporate-offsite" className="btn-primary">
              Plan My Offsite
            </Link>
            <Link href="/destinations" className="btn-secondary">
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>



      {/* Featured Destinations Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Destinations</h2>
          <Link href="/destinations" className="text-secondary">
            View More →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Goa",
            "Coorg",
            "Rishikesh",
            "Jaipur",
            "Manali",
            "Udaipur",
          ].map((city) => (
            <div
              key={city}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <Image
                src={`/destinations/${city.toLowerCase()}.svg`}
                alt={city}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-1">{city}</h3>
                <p className="text-sm text-gray-600">
                  Starting at ₹9,999 per person
                </p>
                <Link
                  href={`/destinations/${city.toLowerCase()}`}
                  className="text-primary text-sm mt-2 inline-block"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Offsites */}
      <section className="bg-neutral-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Types of Offsites</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Adventure", icon: "🏕️" },
              { name: "Wellness", icon: "🧘" },
              { name: "Leadership", icon: "🎯" },
              { name: "Beach", icon: "🏖️" },
              { name: "Eco-Friendly", icon: "🌿" },
            ].map((t) => (
              <Link
                key={t.name}
                href={`/corporate-offsite/${t.name.toLowerCase()}-retreats`}
                className="flex flex-col items-center bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
              >
                <span className="text-3xl mb-2">{t.icon}</span>
                <span className="font-medium">{t.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="italic">
                “Great experience, seamless planning, and unforgettable
                memories!”
              </p>
              <p className="mt-4 font-medium">— Happy Client {i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold">
            Get a Free Offsite Plan in 24 Hours
          </h2>
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
