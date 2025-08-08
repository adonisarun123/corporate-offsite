import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";

const types = {
  "leadership-retreats": "Leadership Retreats",
  "adventure-offsites": "Adventure Offsites",
  "wellness-retreats": "Wellness Retreats",
  "cultural-offsites": "Cultural Offsites",
  "beach-getaways": "Beach Getaways",
} as const;

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const label = types[params.type];
  if (!label) return {} as Metadata;
  return {
    title: `${label} | Corporate Offsite`,
    description: `Plan memorable ${label.toLowerCase()} in the best destinations across India.`,
  };
}

export default function OffsiteTypePage({ params }: { params: { type: string } }) {
  const label = types[params.type];
  if (!label) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-4xl font-bold text-center">{label}</h1>
      <p className="max-w-2xl mx-auto text-center">
        Explore the best destinations, activities, and sample itineraries for {label.toLowerCase()}.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Best Destinations</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Goa</li>
            <li>Coorg</li>
            <li>Rishikesh</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Popular Activities</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Trekking</li>
            <li>Rafting</li>
            <li>Team Challenges</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Sample Package</h3>
          <p className="text-sm">
            2N/3D inclusive of stay, meals, transfers and activities. Starting at ₹14,999 per person.
          </p>
        </div>
      </div>

      <LeadForm />
    </div>
  );
}

