"use client";
import Link from "next/link";
import { useEffect } from "react";

// ── Scroll animation hook ───────────────────────────────────────
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 },
    );
    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Featured items data ─────────────────────────────────────────
const featured = [
  {
    emoji: "☕",
    name: "Signature Latte",
    desc: "Velvety espresso with hand-steamed milk and our secret house blend.",
    price: "৳ 220",
    tag: "Best Seller",
  },
  {
    emoji: "🥐",
    name: "Butter Croissant",
    desc: "Flaky, golden layers baked fresh every morning until noon.",
    price: "৳ 150",
    tag: "Fresh Daily",
  },
  {
    emoji: "🥗",
    name: "Garden Salad Bowl",
    desc: "Seasonal greens, cherry tomatoes, feta & herb vinaigrette.",
    price: "৳ 320",
    tag: "Chef's Pick",
  },
];

// ── Why us data ─────────────────────────────────────────────────
const whyUs = [
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    body: "We source locally every morning — no shortcuts, ever.",
  },
  {
    icon: "👩‍🍳",
    title: "Skilled Chefs",
    body: "Our kitchen team brings 10+ years of passion to every plate.",
  },
  {
    icon: "🏡",
    title: "Cozy Atmosphere",
    body: "Warm lights, soft music, and a space that feels like home.",
  },
  {
    icon: "♻️",
    title: "Eco Conscious",
    body: "Recyclable packaging, zero food waste, green-first approach.",
  },
];

// ── Component ───────────────────────────────────────────────────
export default function Home() {
  useScrollAnimation();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden
       bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/herobg2.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {/* Decorative circles */}
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10"
          style={{ background: "#C9952A", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5"
          style={{ background: "#4A8C42", filter: "blur(100px)" }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Pre-title */}
          <div
            className="inline-flex items-center gap-3 mb-8"
            style={{ animation: "fadeIn 0.8s ease forwards" }}
          >
            <div
              style={{ height: "1px", width: "40px", background: "#C9952A" }}
            />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "#C9952A" }}
            >
              Est. 2019 · Dhaka, Bangladesh
            </span>
            <div
              style={{ height: "1px", width: "40px", background: "#C9952A" }}
            />
          </div>

          <h1
            className="font-display font-bold mb-6 leading-tight"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              color: "#FDF6EC",
              animation: "fadeUp 0.8s ease 0.2s both",
            }}
          >
            Where Every Sip
            <br />
            <em style={{ color: "#C9952A" }}>Tells a Story</em>
          </h1>

          <p
            className="text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{
              color: "#C4A882",
              animation: "fadeUp 0.8s ease 0.4s both",
            }}
          >
            Handcrafted coffee, wholesome food, and a warm corner of the world
            waiting just for you.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: "fadeUp 0.8s ease 0.6s both" }}
          >
            <Link href="/menu" className="btn-primary">
              Explore the Menu
            </Link>
            <Link href="/contact" className="btn-outline">
              Reserve a Table
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "#6B5040", animation: "fadeIn 1.2s ease 1s both" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, #6B5040, transparent)",
            }}
          />
        </div>
      </section>

      {/* ── Featured Items ────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "#C9952A" }}
            >
              From Our Kitchen
            </p>
            <h2
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#4A2C17",
              }}
            >
              Today's Favourites
            </h2>
            <div className="divider mx-auto">
              <div className="divider-line" />
              <div className="divider-dot" />
              <div className="divider-line" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((item, i) => (
              <div
                key={item.name}
                className="menu-card p-8 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="text-5xl mb-5">{item.emoji}</div>
                <div
                  className="inline-block text-xs px-3 py-1 mb-4 tracking-widest uppercase"
                  style={{
                    background: "#F5E6CC",
                    color: "#A0673A",
                    fontSize: "0.65rem",
                  }}
                >
                  {item.tag}
                </div>
                <h3
                  className="font-display font-semibold text-xl mb-2"
                  style={{ color: "#4A2C17" }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "#7B5C3E" }}
                >
                  {item.desc}
                </p>
                <div
                  className="font-display font-bold text-lg"
                  style={{ color: "#C9952A" }}
                >
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Snippet ─────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{
          background: "linear-gradient(135deg, #4A2C17 0%, #2D5A27 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C9952A" }}
          >
            Our Story
          </p>
          <h2
            className="font-display font-bold mb-6 leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#FDF6EC",
            }}
          >
            Born from a Love of
            <br />
            <em>Good Coffee &amp; Good Company</em>
          </h2>
          <p
            className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "#C4A882" }}
          >
            Since 2019, Brew &amp; Bloom has been a gathering place — for
            students pulling all-nighters, couples on first dates, and families
            celebrating small moments. We believe a great café is more than a
            menu; it's a feeling.
          </p>
          <Link href="/about" className="btn-outline">
            Read Our Story
          </Link>
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "#C9952A" }}
            >
              Why Choose Us
            </p>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#4A2C17",
              }}
            >
              The Brew &amp; Bloom Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="font-display font-semibold mb-2"
                  style={{ color: "#4A2C17" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#7B5C3E" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center animate-on-scroll"
        style={{ background: "#F5E6CC" }}
      >
        <p
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "#C9952A" }}
        >
          Come Visit Us
        </p>
        <h2
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#4A2C17" }}
        >
          Open Every Day — Find Us on Garden Street
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#7B5C3E" }}>
          Mon–Fri 7 AM – 10 PM &nbsp;·&nbsp; Sat–Sun 8 AM – 11 PM
        </p>
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
