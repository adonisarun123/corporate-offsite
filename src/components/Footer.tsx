import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 lg:mt-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="glass-card p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Corporate Offsite</h3>
              <p className="body-text">
                Transform your team with India&apos;s premier corporate offsite experiences. 
                From adventure to wellness, we create memorable journeys that drive results.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white/95 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Destinations", href: "/destinations" },
                  { name: "Experiences", href: "/experiences" },
                  { name: "Corporate Offsite", href: "/corporate-offsite" },
                  { name: "Why Choose Us", href: "/why-us" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-white/70 hover:text-white transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white/95 mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <p className="text-white/70">
                  <a 
                    href="mailto:info@corporate-offsite.com" 
                    className="hover:text-white transition-colors duration-150"
                  >
                    info@corporate-offsite.com
                  </a>
                </p>
                <p className="text-white/70">
                  <a 
                    href="tel:+919999999999" 
                    className="hover:text-white transition-colors duration-150"
                  >
                    +91 99999 99999
                  </a>
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="btn-primary">
                    Start Planning
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="caption">
              © {new Date().getFullYear()} Corporate Offsite. All rights reserved. 
              Crafted with care for teams across India.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom spacing */}
      <div className="h-8" />
    </footer>
  );
}
