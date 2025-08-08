import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import type { Metadata } from "next";

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `Corporate Offsite in ${capitalize(params.slug)} | Corporate Offsite`,
    description: `Plan your corporate offsite in ${capitalize(
      params.slug
    )}. Venues, activities, itineraries & more.`,
  };
}

export default function DestinationDetail({
  params,
}: {
  params: { slug: string };
}) {
  const name = capitalize(params.slug);
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <section className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={`/destinations/${params.slug}.jpg`}
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

