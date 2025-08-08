import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 py-8 mt-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-primary mb-2">Corporate Offsite</h3>
          <p className="text-gray-600">
            Plan the perfect corporate offsite anywhere in India.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/destinations" className="hover:text-secondary">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-secondary">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/why-us" className="hover:text-secondary">
                Why Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-secondary">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>
            Email: <a href="mailto:info@corporate-offsite.com" className="hover:text-secondary">info@corporate-offsite.com</a><br />
            Phone: <a href="tel:+919999999999" className="hover:text-secondary">+91 99999 99999</a>
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-6">
        © {new Date().getFullYear()} Corporate Offsite. All rights reserved.
      </div>
    </footer>
  );
}
