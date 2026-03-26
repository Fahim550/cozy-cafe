import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#2A1A0A", color: "#E8D0A8" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">☕</span>
              <div>
                <div
                  className="font-display font-bold text-lg"
                  style={{ color: "#FDF6EC" }}
                >
                  Cozy Cafe
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#C9952A", fontSize: "0.65rem" }}
                >
                  Café &amp; Bistro
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#A0856A" }}>
              A warm corner of the world where every cup tells a story. Come as
              you are, stay as long as you like.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-display font-semibold mb-5 tracking-wide"
              style={{ color: "#C9952A" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/menu", label: "Our Menu" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-amber-300"
                    style={{ color: "#A0856A" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4
              className="font-display font-semibold mb-5 tracking-wide"
              style={{ color: "#C9952A" }}
            >
              Visit Us
            </h4>
            <div className="space-y-3 text-sm" style={{ color: "#A0856A" }}>
              <p>📍 123 Garden Street, Dhaka 1000</p>
              <p>📞 +880 1700-000000</p>
              <p>✉️ hello@cozycafe.com</p>
              <div className="pt-2">
                <p className="font-semibold mb-1" style={{ color: "#E8D0A8" }}>
                  Opening Hours
                </p>
                <p>Mon – Fri: 7:00 AM – 10:00 PM</p>
                <p>Sat – Sun: 8:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social + copyright */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(201,149,42,0.2)" }}
        >
          <p className="text-xs" style={{ color: "#6B5040" }}>
            © 2025 Cozy Café. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Facebook", "Instagram", "Twitter"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-xs tracking-widest uppercase transition-colors duration-200 hover:text-amber-300"
                style={{ color: "#A0856A" }}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
