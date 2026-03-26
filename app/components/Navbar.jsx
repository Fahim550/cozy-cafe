"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(74,44,23,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,149,42,0.2)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl">☕</span>
          <div>
            <div
              className="font-display font-bold text-lg leading-none"
              style={{ color: "#FDF6EC" }}
            >
              Cozy Café
            </div>
            <div
              className="text-xs tracking-widest uppercase"
              style={{ color: "#C9952A", fontSize: "0.65rem" }}
            >
              Café &amp; Bistro
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-outline text-xs py-2 px-5 ml-2">
            Reserve a Table
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#FDF6EC",
              transform: isOpen
                ? "rotate(45deg) translateY(11px)"
                : "rotate(0)",
              transformOrigin: "center",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#FDF6EC",
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? "scaleX(0)" : "scaleX(1)",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#FDF6EC",
              transform: isOpen
                ? "rotate(-45deg) translateY(-11px)"
                : "rotate(0)",
              transformOrigin: "center",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "300px" : "0",
          background: "rgba(74,44,23,0.98)",
        }}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-outline text-xs py-3 px-5 text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </nav>
  );
}
