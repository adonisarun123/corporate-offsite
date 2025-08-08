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
      className="grid gap-4 max-w-xl mx-auto text-black"
    >
      <input
        {...register("name", { required: true })}
        placeholder="Name"
        className="input"
      />
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="Email"
        className="input"
      />
      <input
        {...register("company")}
        placeholder="Company"
        className="input"
      />
      <input
        {...register("phone")}
        placeholder="Phone"
        className="input"
      />
      <textarea
        {...register("message")}
        placeholder="Tell us about your offsite"
        className="input h-32"
      />
      <button type="submit" className="btn-secondary">
        Submit
      </button>
    </form>
  );
}

