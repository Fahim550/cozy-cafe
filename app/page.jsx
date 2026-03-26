"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  LuArmchair,
  LuClock,
  LuCoffee,
  LuCroissant,
  LuUsers,
  LuWifi,
} from "react-icons/lu";

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
// const featured = [
//   {
//     emoji: "☕",
//     name: "Signature Latte",
//     desc: "Velvety espresso with hand-steamed milk and our secret house blend.",
//     tag: "Best Seller",
//     image: "/assets/coffee1.jpeg",
//   },
//   {
//     emoji: "🥐",
//     name: "Butter Croissant",
//     desc: "Flaky, golden layers baked fresh every morning until noon.",
//     tag: "Fresh Daily",
//     image: "/assets/coffee3.jpeg",
//   },
//   {
//     emoji: "🥗",
//     name: "Garden Salad Bowl",
//     desc: "Seasonal greens, cherry tomatoes, feta & herb vinaigrette.",
//     tag: "Chef's Pick",
//     image: "/assets/coffee2.jpeg",
//   },
// ];
const featured = [
  {
    name: "Artisan Espresso",
    desc: "Single-origin beans roasted to perfection. Rich, bold, and beautifully balanced.",
    tag: "Signature",
    price: "৳ 280",
    image: "/assets/coffee1.jpeg",
  },
  {
    name: "Premium Blends",
    desc: "Hand-selected beans from around the world. Smooth, complex, and full of character.",
    tag: "Best Seller",
    price: "৳ 320",
    image: "/assets/coffee2.jpeg",
  },
  {
    name: "Fresh Baked Daily",
    desc: "Croissants, muffins, and sweet delights baked fresh every morning.",
    tag: "Fresh Daily",
    price: "৳ 180",
    image: "/assets/coffee3.jpeg",
  },
];

const features = [
  {
    icon: <LuCoffee size={28} />,
    bgColor: "#C9952A",
    title: "Artisan Coffee",
    desc: "Sourced from single-origin beans and roasted to perfection. Every cup tells a story of craftsmanship.",
  },
  {
    icon: <LuWifi size={28} />,
    bgColor: "#14B8A6",
    title: "High-Speed WiFi",
    desc: "Fiber-optic internet built for productivity. Upload, download, and video call without interruption.",
  },
  {
    icon: <LuArmchair size={28} />,
    bgColor: "#C9952A",
    title: "Curated Ambiance",
    desc: "Thoughtfully designed spaces with comfortable seating, warm lighting, and a creative atmosphere.",
  },
  {
    icon: <LuCroissant size={28} />,
    bgColor: "#C9952A",
    title: "Fresh Cuisine",
    desc: "From flaky croissants to hearty sandwiches — crafted daily with premium ingredients.",
  },
  {
    icon: <LuClock size={28} />,
    bgColor: "#14B8A6",
    title: "Extended Hours",
    desc: "Open early for your morning brew and late for night owls. Your schedule, our priority.",
  },
  {
    icon: <LuUsers size={28} />,
    bgColor: "#C9952A",
    title: "Community Hub",
    desc: "Connect with fellow creators, entrepreneurs, and coffee lovers in an inspiring environment.",
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
        {/* <div
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
        </div> */}
      </section>

      <section className="py-20 px-6 bg-[#FDF6EC]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#C9952A] text-sm tracking-widest uppercase font-medium mb-3">
              WHERE HERITAGE MEETS INNOVATION
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight text-[#4A2C17] mb-6">
              A Sanctuary for Digital Creators
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-[#6B5040] leading-relaxed">
              Brew & Bloom blends the timeless art of coffee craftsmanship with
              modern workspace amenities. Whether you're closing a deal, coding
              your next app, or simply savoring the moment — we've created the
              perfect environment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-2xl mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-2xl text-[#4A2C17] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#7B5C3E] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Discover Button */}
          <div className="flex justify-center mt-16">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-[#4A2C17] hover:bg-[#3A2212] text-white px-10 py-4 rounded-full font-medium transition-all duration-300"
            >
              Discover Our Story
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Items ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F5E6CC]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "#C9952A" }}
            >
              CRAFTED WITH PASSION
            </p>
            <h2
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#4A2C17",
              }}
            >
              Signature Offerings
            </h2>
            <p className="text-[#7B5C3E] max-w-2xl mx-auto leading-relaxed">
              Each item on our menu is a celebration of quality ingredients and
              expert craftsmanship. From morning espresso to afternoon pastries.
            </p>
          </div>

          {/* Cards Grid - With Background Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((item, i) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-2xl h-[420px] shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                  {/* Tag */}
                  <div
                    className="inline-block text-xs px-4 py-1.5 mb-4 rounded-full tracking-widest uppercase font-medium"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {item.tag}
                  </div>

                  <h3 className="font-display font-bold text-2xl mb-2 leading-tight">
                    {item.name}
                  </h3>

                  <p className="text-sm leading-relaxed mb-6 text-white/90 line-clamp-2">
                    {item.desc}
                  </p>

                  <Link
                    href="/menu"
                    className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-[#EAA444] hover:text-[#C9952A]"
                  >
                    Explore
                    <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#C9952A]">
                      <FaArrowRight size={17} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Menu Button */}
          <div className="text-center mt-16">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#EAA444] hover:bg-[#c88238] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              View Full Menu <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Snippet ─────────────────────────────────────── */}
      {/* <section
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
      </section> */}

      <section className="py-24 px-6 bg-[#FDF6EC]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <p className="text-[#C9952A] text-sm tracking-widest uppercase font-medium">
                OUR STORY
              </p>

              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight text-[#4A2C17]">
                Crafted with Passion,
                <br />
                Served with Love
              </h2>

              <div className="space-y-6 text-[#6B5040] text-[17px] leading-relaxed">
                <p>
                  Since 2019, Brew & Bloom has been more than just a café — it's
                  a community gathering place where friendships are formed over
                  perfectly brewed coffee.
                </p>
                <p>
                  We source our beans from sustainable farms around the world
                  and roast them in small batches to ensure the freshest, most
                  flavorful cup every time.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 group bg-[#4A2C17] hover:bg-[#3A2212] text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
              >
                Learn More About Us
                {/* <span className="transition-transform group-hover:translate-x-1">
                  →
                </span> */}
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Side - Two Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Coffee Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
                <Image
                  width={500}
                  height={500}
                  src="/assets/story1.jpeg"
                  alt="Artisan Coffee"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>

              {/* Pastries Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[3/4] mt-8 sm:mt-12">
                <Image
                  width={500}
                  height={500}
                  src="/assets/story2.jpeg"
                  alt="Fresh Baked Pastries"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>
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
