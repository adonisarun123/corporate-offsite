import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Corporate Offsite Planning India | Corporate Offsite",
  description:
    "Discover our corporate offsite planning process, sample packages, and success stories. Get a tailored proposal within 24 hours.",
};

export default function CorporateOffsite() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Corporate Offsites That Inspire & Engage</h1>
        <p className="max-w-2xl mx-auto">
          We plan end-to-end offsites tailored to your objectives and budget.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-8">
        {[
          { step: "1", title: "Discover", desc: "Tell us your goals & budget." },
          {
            step: "2",
            title: "Design",
            desc: "We craft destinations, venues & activities.",
          },
          {
            step: "3",
            title: "Deliver",
            desc: "On-ground execution & coordination.",
          },
          { step: "4", title: "Delight", desc: "Post-event feedback & ROI." },
        ].map((s) => (
          <div key={s.step} className="bg-white shadow rounded-lg p-6 text-center">
            <span className="text-4xl font-bold text-secondary">{s.step}</span>
            <h3 className="font-semibold mt-2 mb-1">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Ready to Plan Your Offsite?</h2>
        <LeadForm />
      </section>
    </div>
  );
}

