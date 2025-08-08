"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface LeadData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
}

export default function LeadForm() {
  const { register, handleSubmit, reset } = useForm<LeadData>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: LeadData) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
        reset();
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (sent) {
    return <p className="text-lg">Thank you! We will reach out shortly.</p>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register("name", { required: true })}
          placeholder="Full Name *"
          className="input-glass"
          required
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Work Email *"
          className="input-glass"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register("company")}
          placeholder="Company Name"
          className="input-glass"
        />
        <input
          {...register("phone")}
          placeholder="Phone Number"
          className="input-glass"
          type="tel"
        />
      </div>
      
      <textarea
        {...register("message")}
        placeholder="Tell us about your offsite requirements..."
        className="input-glass h-32 resize-none"
        rows={4}
      />
      
      <button type="submit" className="btn-primary w-full md:w-auto mx-auto">
        Get Custom Proposal
      </button>
      
      <p className="text-xs text-white/50 text-center">
        We&apos;ll respond within 24 hours with a tailored proposal
      </p>
    </form>
  );
}

