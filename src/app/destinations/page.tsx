import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Corporate Offsite Destinations in India",
  description:
    "Browse and filter the best destinations for your corporate offsite.",
};

const destinations = [
  { slug: "goa", name: "Goa" },
  { slug: "coorg", name: "Coorg" },
  { slug: "rishikesh", name: "Rishikesh" },
  { slug: "jaipur", name: "Jaipur" },
];

export default function Destinations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Destinations</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((d) => (
          <Link
            key={d.slug}
            href={`/destinations/${d.slug}`}
            className="block bg-white shadow rounded overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={`/destinations/${d.slug}.jpg`}
              width={400}
              height={300}
              alt={d.name}
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <h3 className="font-semibold">{d.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

