"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Experiences", href: "/experiences" },
  { name: "Corporate Offsite", href: "/corporate-offsite" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`glass-panel px-6 py-4 transition-all duration-300 ${
            scrolled ? 'bg-white/15 shadow-lg' : 'bg-white/10'
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="text-xl font-bold text-white tracking-tight">
                Corporate Offsite
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-white/80 hover:text-white 
                             transition-colors duration-150 relative group"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 -bottom-1 h-px bg-white/50 
                                   scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <Link href="/contact" className="btn-primary">
                  Plan Offsite
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <nav className="fixed top-20 right-4 left-4 glass-panel p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-white/90 hover:text-white font-medium 
                         border-b border-white/10 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/contact" className="btn-primary w-full text-center inline-block">
                Plan Offsite
              </Link>
            </div>
          </nav>
        </div>
      )}
      
      {/* Spacer for fixed header */}
      <div className="h-24" />
    </>
  );
}

