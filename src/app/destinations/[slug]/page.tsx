import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import type { Metadata } from "next";

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Loosen param typing to align with Next.js generated types in .next/types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params?.slug as string;
  return {
    title: `Corporate Offsite in ${capitalize(slug)} | Corporate Offsite`,
    description: `Plan your corporate offsite in ${capitalize(
      slug
    )}. Venues, activities, itineraries & more.`,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DestinationDetail({ params }: any) {
  const name = capitalize(params?.slug as string);
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <section className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={`/destinations/${params?.slug}.jpg`}
          alt={name}
          fill
          className="object-cover"
        />
      </section>

      <h1 className="text-4xl font-bold">{name}</h1>
      <p>
        Coming soon: Detailed information about {name} – best venues, activities
        and sample itineraries.
      </p>

      <LeadForm />
    </div>
  );
}

// Enable SSG for a seed set of destinations
export function generateStaticParams() {
  return [
    { slug: "goa" },
    { slug: "coorg" },
    { slug: "rishikesh" },
    { slug: "jaipur" },
    { slug: "manali" },
    { slug: "udaipur" },
  ];
}

