"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { LuHeart, LuLeaf, LuUsers } from "react-icons/lu";

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

const team = [
  {
    emoji: "👨‍🍳",
    name: "Rafiq Islam",
    role: "Head Chef",
    bio: "15 years of culinary experience across Cadillac, MI.",
  },
  {
    emoji: "☕",
    name: "Nusrat Jahan",
    role: "Head Barista",
    bio: "Trained in specialty coffee. Competed at the National Barista Championship.",
  },
  {
    emoji: "🌿",
    name: "Tariq Hasan",
    role: "Founder & Manager",
    bio: "Started Cozy Cafe in 2015 with a dream and a second-hand espresso machine.",
  },
];

const values = [
  {
    icon: <LuHeart size={32} />,
    title: "Passion for Quality",
    desc: "Every cup we serve is crafted with care, using only the finest ingredients sourced from trusted suppliers.",
  },
  {
    icon: <LuLeaf size={32} />,
    title: "Sustainability",
    desc: "We're committed to eco-friendly practices, from our compostable packaging to our partnerships with sustainable farms.",
  },
  {
    icon: <LuUsers size={32} />,
    title: "Community First",
    desc: "Cozy Cafe is more than a café — it's a gathering place where neighbors become friends.",
  },
];

export default function About() {
  useScrollAnimation();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="pt-28 pb-16 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(110deg, #2A1A0A, #4A2C17)" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
          style={{ background: "#C9952A", filter: "blur(90px)" }}
        />
        <div className="relative z-10">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C9952A", animation: "fadeIn 0.6s ease both" }}
          >
            Our Story
          </p>
          <h1
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              color: "#FDF6EC",
              animation: "fadeUp 0.7s ease 0.2s both",
            }}
          >
            More Than a Café.
            <br />
            <em style={{ color: "#C9952A" }}>A Feeling.</em>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: "#C4A882",
              animation: "fadeUp 0.7s ease 0.4s both",
            }}
          >
            Every great café has a story. Ours began with a simple belief: the
            world is better with good coffee and honest food.
          </p>
        </div>
      </section>

      {/* ── Origin Story ──────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 bg-[#FDF6EC] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <p className="text-[#C9952A] text-sm tracking-widest uppercase font-medium mb-4">
                ABOUT US
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight text-[#4A2C17] mb-6">
                Our Story
              </h1>
              <p className="text-lg text-[#6B5040] max-w-lg">
                What started as a dream between two coffee-loving friends has
                grown into a beloved neighborhood gathering spot.
              </p>
            </div>

            {/* Right Image with Badge */}
            <div className="relative">
              <div className="aspect-[16/10] md:aspect-[16/11] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  height={200}
                  width={400}
                  src="/assets/about-story.jpeg"
                  alt="Cozy Cafe Interior"
                  className="rounded-3xl shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-[#4A2C17] text-white px-6 py-4 rounded-2xl shadow-lg">
                <p className="text-sm font-medium">Since 2015</p>
                <p className="text-xs text-[#C4A882]">Cadillac, MI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl text-[#4A2C17] mb-8 text-center">
            How It All Began
          </h2>

          <div className="prose prose-lg text-[#6B5040] max-w-none leading-relaxed space-y-6">
            <p>
              In 2015, Tariq Hasan and his close friend turned a small rented
              space on Garden Street into what is now Cozy Cafe. With a borrowed
              espresso machine, family recipes, and a deep passion for quality
              coffee — our journey began.
            </p>
            <p>
              What started as a humble café has grown into a warm community hub
              where people come not just for great coffee and food, but for
              connection, comfort, and a sense of belonging.
            </p>
          </div>

          {/* Coffee Image */}
          <div className="mt-16 flex justify-center">
            <img
              src="/assets/about-coffee.jpeg"
              alt="Signature Latte"
              className="rounded-3xl shadow-2xl max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Our Coffee Philosophy */}
      <section className="py-24 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl text-[#4A2C17] mb-10">
            Our Coffee Philosophy
          </h2>

          <div className="max-w-3xl mx-auto text-[#6B5040] text-lg leading-relaxed space-y-8">
            <p>
              We believe that exceptional coffee starts at the source. That's
              why we work directly with farmers in Ethiopia, Colombia,
              Guatemala, and beyond.
            </p>
            <p>
              Our beans are roasted in small batches at a local roastery,
              guaranteeing freshness in every cup. Whether you prefer a bold
              espresso or a smooth pour-over, we are dedicated to making your
              perfect cup.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9952A] text-sm tracking-widest uppercase mb-3">
              WHAT WE STAND FOR
            </p>
            <h2 className="font-display font-bold text-4xl text-[#4A2C17]">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-[#FDF6EC] p-10 rounded-3xl text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-4xl bg-white rounded-full shadow-sm">
                  {value.icon}
                </div>
                <h3 className="font-display font-semibold text-2xl mb-4 text-[#4A2C17]">
                  {value.title}
                </h3>
                <p className="text-[#6B5040] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────── */}
      {/* <section className="py-24 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "#C9952A" }}
            >
              The People Behind Every Cup
            </p>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#4A2C17",
              }}
            >
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="text-center p-10 menu-card animate-on-scroll"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3
                  className="font-display font-semibold text-xl mb-1"
                  style={{ color: "#4A2C17" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: "#C9952A", fontSize: "0.7rem" }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#7B5C3E" }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center animate-on-scroll"
        style={{ background: "#4A2C17" }}
      >
        <h2
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#FDF6EC" }}
        >
          Come Experience It Yourself
        </h2>
        <p className="mb-8" style={{ color: "#C4A882" }}>
          We'd love to have you. No reservation needed — just walk in.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu" className="btn-outline">
            Browse Menu
          </Link>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ background: "#C9952A", borderColor: "#C9952A" }}
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </>
  );
}
