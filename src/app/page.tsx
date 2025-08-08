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
    <div className="space-y-20 lg:space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
        <Image
            src="/hero.svg"
            alt="Corporate offsite in mountains"
            fill
            className="object-cover opacity-30"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="heading-1 mb-6 leading-[1.1]">
            Plan the Perfect Corporate Offsite 
            <span className="block text-sky-400">Anywhere in India</span>
          </h1>
          <p className="body-text mb-8 max-w-2xl mx-auto">
            Transform your team with carefully curated destinations, activities, 
            and experiences that drive collaboration and innovation.
          </p>
          
          {/* Hero Glass Panel with Planner */}
          <div className="glass-panel max-w-4xl mx-auto p-6 md:p-8 mt-12">
            <h3 className="text-xl font-semibold text-white/95 mb-6">
              Start Planning Your Offsite
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <input
                type="text"
                placeholder="Destination"
                className="input-glass"
              />
              <input
                type="date"
                placeholder="Dates"
                className="input-glass"
              />
              <input
                type="number"
                placeholder="Team Size"
                className="input-glass"
                min={1}
              />
              <select className="input-glass">
                <option value="">Duration</option>
                <option value="1">1 Day</option>
                <option value="2">2-3 Days</option>
                <option value="4">4+ Days</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/corporate-offsite" className="btn-primary">
                Get Custom Plan
              </Link>
              <Link href="/destinations" className="btn-secondary">
                Browse Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Featured Destinations Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Featured Destinations</h2>
          <p className="body-text max-w-2xl mx-auto">
            Discover India&apos;s most inspiring locations for corporate offsites and team building experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { name: "Goa", desc: "Beach & leisure experiences", highlights: "Water sports • Cultural tours" },
            { name: "Coorg", desc: "Mountain coffee plantations", highlights: "Adventure • Wellness" },
            { name: "Rishikesh", desc: "Spiritual & adventure hub", highlights: "Rafting • Yoga retreats" },
            { name: "Jaipur", desc: "Royal heritage experiences", highlights: "Palaces • Desert camping" },
            { name: "Manali", desc: "Himalayan adventures", highlights: "Trekking • Team challenges" },
            { name: "Udaipur", desc: "Lakes & palace luxury", highlights: "Heritage • Luxury stays" },
          ].map((destination) => (
            <Link
              key={destination.name}
              href={`/destinations/${destination.name.toLowerCase()}`}
              className="destination-card"
            >
              <div className="relative h-56 overflow-hidden">
          <Image
                  src={`/destinations/${destination.name.toLowerCase()}.svg`}
                  alt={`Corporate offsite in ${destination.name}`}
                  width={400}
                  height={250}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="heading-3 mb-2">{destination.name}</h3>
                <p className="caption mb-3">{destination.desc}</p>
                <p className="text-sm text-white/60 mb-4">{destination.highlights}</p>
                
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
        
        <div className="text-center mt-12">
          <Link href="/destinations" className="btn-secondary">
            View All Destinations
          </Link>
        </div>
      </section>

      {/* Types of Offsites */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Offsite Experiences</h2>
          <p className="body-text max-w-2xl mx-auto">
            Choose from our curated experience types designed to meet specific team development objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              name: "Adventure", 
              icon: "🏔️", 
              slug: "adventure-offsites",
              desc: "High-energy team building through outdoor challenges",
              features: "Rafting • Trekking • Rock climbing"
            },
            { 
              name: "Wellness", 
              icon: "🧘", 
              slug: "wellness-retreats",
              desc: "Mindfulness and health-focused team experiences",
              features: "Yoga • Meditation • Spa treatments"
            },
            { 
              name: "Leadership", 
              icon: "🎯", 
              slug: "leadership-retreats",
              desc: "Strategic development for executives and managers",
              features: "Strategy sessions • Executive coaching"
            },
          ].map((experience) => (
            <Link
              key={experience.name}
              href={`/experiences/${experience.slug}`}
              className="glass-card p-8 text-center hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {experience.icon}
              </div>
              <h3 className="heading-3 mb-3">{experience.name}</h3>
              <p className="caption mb-4">{experience.desc}</p>
              <p className="text-sm text-white/50 mb-6">{experience.features}</p>
              <span className="btn-ghost">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">What Our Clients Say</h2>
          <p className="body-text max-w-2xl mx-auto">
            Trusted by leading companies for creating transformative team experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              quote: "The offsite in Goa was perfectly planned. Our team bonding improved significantly, and the activities were both fun and professionally enriching.",
              author: "Sarah Chen",
              company: "Tech Innovators Ltd",
              role: "Head of HR"
            },
            {
              quote: "Outstanding coordination and attention to detail. The Rishikesh adventure retreat challenged our team and brought us closer together.",
              author: "Rajesh Kumar",
              company: "Digital Solutions Inc",
              role: "CEO"
            },
            {
              quote: "The wellness retreat in Coorg was exactly what our stressed team needed. Professional, rejuvenating, and incredibly well organized.",
              author: "Priya Sharma",
              company: "Creative Agency",
              role: "Operations Director"
            }
          ].map((testimonial, i) => (
            <div
              key={i}
              className="glass-card p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="body-text italic mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-semibold text-white/95">{testimonial.author}</p>
                <p className="caption">{testimonial.role}</p>
                <p className="caption text-white/50">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="glass-panel text-center p-12 lg:p-16">
          <h2 className="heading-2 mb-6">
            Ready to Plan Your Next Offsite?
          </h2>
          <p className="body-text mb-8 max-w-2xl mx-auto">
            Get a customized proposal with destinations, activities, and logistics 
            tailored to your team&apos;s objectives and budget.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <LeadForm />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
            <Link href="/destinations" className="btn-secondary">
              Explore Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
