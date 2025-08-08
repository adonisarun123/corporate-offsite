"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Experiences & Activities", href: "/experiences" },
  { name: "Packages", href: "/packages" },
  { name: "Why Us", href: "/why-us" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-primary">
          Corporate Offsite
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold hover:text-secondary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-white shadow">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

