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

const popularItems = [
  {
    name: "Butter Croissant",
    price: "4.00",
    desc: "Flaky, golden layers baked fresh every morning",
    image: "/assets/butter-croissant.jpeg",
  },
  {
    name: "Chocolate Croissant",
    price: "5.00",
    desc: "Buttery pastry filled with rich dark chocolate",
    image: "/assets/chocolate-croissant.jpeg",
  },
  {
    name: "Cinnamon Roll",
    price: "3.5",
    desc: "Soft, gooey roll with cinnamon sugar and cream cheese glaze",
    image: "/assets/cinnamon-roll.jpeg",
  },
  // {
  //   name: "Banana Bread Slice",
  //   price: "2.00",
  //   desc: "Moist banana bread with walnuts and a hint of cinnamon",
  //   image: "/assets/banana-bread-slice.jpeg",
  // },
  // {
  //   name: "Blueberry Muffin",
  //   price: "4.5",
  //   desc: "Fresh blueberries bursting in every bite",
  //   image: "/assets/blueberry-muffin.jpeg",
  // },
  // {
  //   name: "Cheese Danish",
  //   price: "4.00",
  //   desc: "Flaky pastry with sweet cream cheese filling",
  //   image: "/assets/cheese-danish.jpeg",
  // },
];

const combinedFeatures = [
  {
    icon: <LuCoffee size={28} />,
    bgColor: "#C9952A",
    title: "Artisan Coffee",
    desc: "Single-origin beans roasted fresh daily. Every cup tells a story.",
  },
  {
    icon: <LuWifi size={28} />,
    bgColor: "#14B8A6",
    title: "High-Speed WiFi",
    desc: "Fiber-optic internet built for productivity and focus.",
  },
  {
    icon: <LuCroissant size={28} />,
    bgColor: "#C9952A",
    title: "Fresh Ingredients",
    desc: "We source locally every morning — no shortcuts, ever.",
  },
  {
    icon: <LuArmchair size={28} />,
    bgColor: "#C9952A",
    title: "Cozy Atmosphere",
    desc: "Warm lighting, comfortable seating, and a space that feels like home.",
  },
  {
    icon: <LuClock size={28} />,
    bgColor: "#14B8A6",
    title: "Extended Hours",
    desc: "Open early till late — your schedule, our priority.",
  },
  {
    icon: <LuUsers size={28} />,
    bgColor: "#C9952A",
    title: "Community Hub",
    desc: "Connect with fellow creators, entrepreneurs, and coffee lovers.",
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
              Est. 2015 · Cadillac, MI
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

      <section className="py-24 px-6 bg-[#F5E6CC]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#C9952A] text-sm tracking-widest uppercase font-medium mb-3">
              WHY Cozy Cafe
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight text-[#4A2C17] mb-4">
              Where Heritage Meets Innovation
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-[#6B5040] leading-relaxed">
              Cozy Cafe blends the timeless art of coffee craftsmanship with
              modern workspace amenities. A sanctuary for digital creators,
              coffee lovers, and community builders.
            </p>
          </div>

          {/* Features Grid - Combined & Improved */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {combinedFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon Circle */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: item.bgColor || "#C9952A" }}
                >
                  <div className="text-white text-3xl">{item.icon}</div>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-2xl text-[#4A2C17] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#7B5C3E] leading-relaxed">
                  {item.desc || item.body}
                </p>
              </div>
            ))}
          </div>
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
      </section>

      {/* ── Featured Items ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#FDF6EC]">
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
              className="inline-flex items-center gap-2 bg-[#EAA444] hover:bg-[#c88238] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
            >
              View Full Menu <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Snippet ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F5E6CC]">
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
                  Since 2015, Cozy Cafe has been more than just a café — it's a
                  community gathering place where friendships are formed over
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
                className="inline-flex items-center gap-3 group bg-white text-[#4A2C17] border-[1px] border-[#4A2C17] hover:bg-[#C9952A] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300"
              >
                Learn More About Us
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

      {/* Popular Items */}
      <section className="py-24 px-6 bg-[#FDF6EC]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#C9952A] text-sm tracking-widest uppercase font-medium mb-3">
              CUSTOMER FAVORITES
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#4A2C17] mb-4">
              Popular Items
            </h2>
            <p className="text-[#6B5040] max-w-2xl mx-auto text-lg">
              Discover what our guests love most — handcrafted with care every
              day.
            </p>
          </div>

          {/* Popular Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="h-80 bg-gray-200 relative overflow-hidden">
                  <Image
                    height={400}
                    width={400}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-semibold text-xl text-[#4A2C17]">
                      {item.name}
                    </h3>
                    <span className="font-display font-bold text-[#C9952A] text-lg">
                      $ {item.price}
                    </span>
                  </div>
                  <p className="text-[#7B5C3E] text-sm leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Menu Button */}
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 bg-[#4A2C17] hover:bg-[#3A2212] text-white px-10 py-4 rounded-full font-medium transition-all"
            >
              View Full Menu
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
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
