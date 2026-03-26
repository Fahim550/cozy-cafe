"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function useScrollAnimation(dep) {
  useEffect(() => {
    // Reset all elements to invisible first
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.remove("visible");
    });

    // Small delay so the DOM updates before observing
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("visible");
          }),
        { threshold: 0.08 },
      );
      document
        .querySelectorAll(".animate-on-scroll")
        .forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [dep]); // re-runs every time the active tab changes
}
const menuData = {
  Breakfast: [
    {
      name: "Butter Croissant",
      price: 200,
      desc: "Freshly baked every morning. Flaky, golden buttery layers that melt in your mouth.",
      tag: "Fresh Daily",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    },
    {
      name: "Chocolate Croissant",
      price: 500,
      desc: "Classic pain au chocolat with rich dark chocolate tucked in crisp pastry layers.",
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80",
    },
    {
      name: "Cinnamon Roll",
      price: 300,
      desc: "Soft dough swirled with cinnamon sugar, finished with a warm cream cheese glaze.",
      tag: "Sweet",
      image:
        "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&q=80",
    },
    {
      name: "Banana Bread Slice",
      price: 1000,
      desc: "Moist home-style banana bread with ripe bananas, walnuts, and a hint of vanilla.",
      tag: "Healthy",
      image:
        "https://images.unsplash.com/photo-1571748982800-fa51082c2224?w=600&q=80",
    },
    {
      name: "Blueberry Muffin",
      price: 1200,
      desc: "Bursting with fresh blueberries, lightly sweetened with a golden crumble top.",
      tag: "Vegan",
      image:
        "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80",
    },
    {
      name: "Cheese Danish",
      price: 1400,
      desc: "Flaky puff pastry filled with silky cream cheese and a drizzle of honey glaze.",
      tag: "",
      image:
        "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80",
    },
    {
      name: "Toast & Jam",
      price: 900,
      desc: "Thick-cut artisan sourdough, toasted golden, with house-made seasonal jam.",
      tag: "Light",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80",
    },
    {
      name: "Pancake Stack",
      price: 800,
      desc: "Fluffy buttermilk pancakes stacked high with maple syrup and fresh berries.",
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    },
  ],
  Lunch: [
    {
      name: "Club Sandwich",
      price: 500,
      desc: "Triple-decker with roasted turkey, crispy bacon, fresh egg, and aged cheddar.",
      tag: "Classic",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    },
    {
      name: "Chicken Sandwich",
      price: 200,
      desc: "Herb-marinated grilled chicken, lettuce, tomato, and garlic aioli on brioche.",
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
    },
    {
      name: "Veggie Sandwich",
      price: 100,
      desc: "Grilled seasonal vegetables, hummus, baby spinach, and sun-dried tomato on ciabatta.",
      tag: "Vegan",
      image:
        "https://images.unsplash.com/photo-1621510456681-2330135e5871?w=600&q=80",
    },
    {
      name: "Beef Burger",
      price: 500,
      desc: "180g beef patty, caramelized onion, pickles, and house sauce on a toasted brioche bun.",
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    },
    {
      name: "Chicken Burger",
      price: 800,
      desc: "Crispy fried chicken thigh, coleslaw, jalapeños, and sriracha mayo on brioche.",
      tag: "Spicy",
      image:
        "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?w=600&q=80",
    },
    {
      name: "French Fries",
      price: 500,
      desc: "Hand-cut golden fries, double fried for extra crunch, seasoned with sea salt.",
      tag: "",
      image:
        "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80",
    },
    {
      name: "Meat Pie",
      price: 800,
      desc: "Buttery shortcrust pastry filled with slow-braised beef and rich gravy.",
      tag: "Filling",
      image:
        "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&q=80",
    },
    {
      name: "Sausage Roll",
      price: 700,
      desc: "Seasoned pork sausage wrapped in golden puff pastry, baked until perfectly flaky.",
      tag: "",
      image:
        "https://images.unsplash.com/photo-1600456899121-68eda5b33cf9?w=600&q=80",
    },
    {
      name: "Spring Rolls",
      price: 200,
      desc: "Crispy rolls stuffed with glass noodles, vegetables, and served with sweet chili sauce.",
      tag: "Vegetarian",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    },
  ],
  Drinks: [
    {
      name: "Signature Latte",
      price: 220,
      desc: "Double espresso, velvety hand-steamed milk, and our secret house blend.",
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    },
    {
      name: "Cold Brew",
      price: 240,
      desc: "18-hour cold brew concentrate. Smooth, low acidity, served over ice.",
      tag: "Iced",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80",
    },
    {
      name: "Matcha Latte",
      price: 230,
      desc: "Ceremonial grade matcha whisked into warm oat milk with a touch of honey.",
      tag: "Trending",
      image:
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
    },
    {
      name: "Mango Smoothie",
      price: 180,
      desc: "Fresh mango, yogurt, honey, and a splash of lime. Pure sunshine in a glass.",
      tag: "Fresh",
      image:
        "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
    },
    {
      name: "Iced Americano",
      price: 190,
      desc: "Two shots of rich espresso poured over cold filtered water and ice.",
      tag: "",
      image:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80",
    },
    {
      name: "Mint Lemonade",
      price: 160,
      desc: "Freshly squeezed lemon juice, muddled mint leaves, and sparkling water.",
      tag: "Refreshing",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
    },
  ],
  Desserts: [
    {
      name: "Belgian Waffle",
      price: 280,
      desc: "Crisp golden waffle, vanilla ice cream, and warm berry compote.",
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    },
    {
      name: "Tiramisu",
      price: 300,
      desc: "Classic Italian mascarpone cream over espresso-soaked ladyfinger biscuits.",
      tag: "Classic",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    },
    {
      name: "Chocolate Lava Cake",
      price: 320,
      desc: "Warm chocolate cake with a flowing molten centre, served with vanilla ice cream.",
      tag: "Indulgent",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    },
    {
      name: "Cheesecake Slice",
      price: 260,
      desc: "New York style baked cheesecake on a graham cracker crust, with strawberry topping.",
      tag: "",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
    },
  ],
};

const tagColors = {
  Popular: { bg: "#FEF3C7", color: "#92400E" },
  "Best Seller": { bg: "#FEF3C7", color: "#92400E" },
  Healthy: { bg: "#DCFCE7", color: "#166534" },
  Vegan: { bg: "#DCFCE7", color: "#166534" },
  Fresh: { bg: "#DCFCE7", color: "#166534" },
  Vegetarian: { bg: "#DCFCE7", color: "#166534" },
  Iced: { bg: "#DBEAFE", color: "#1E40AF" },
  Refreshing: { bg: "#DBEAFE", color: "#1E40AF" },
  Trending: { bg: "#EDE9FE", color: "#5B21B6" },
  Sweet: { bg: "#FCE7F3", color: "#9D174D" },
  Indulgent: { bg: "#FCE7F3", color: "#9D174D" },
  Classic: { bg: "#F3F4F6", color: "#374151" },
  Premium: { bg: "#FDF4FF", color: "#7E22CE" },
  Filling: { bg: "#FFF7ED", color: "#9A3412" },
  Light: { bg: "#F0FDF4", color: "#166534" },
  "Fresh Daily": { bg: "#FFF7ED", color: "#9A3412" },
};

const categoryEmoji = {
  Breakfast: "🍳",
  Lunch: "🥪",
  Drinks: "☕",
  Desserts: "🍰",
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("All");

  useScrollAnimation(activeTab);

  const tabs = ["All", ...Object.keys(menuData)];

  const visibleItems =
    activeTab === "All"
      ? getAllItems()
      : menuData[activeTab].map((item) => ({ ...item, category: activeTab }));

  const showCategory = activeTab === "All";

  function getAllItems() {
    return Object.entries(menuData).flatMap(([cat, items]) =>
      items.map((item) => ({ ...item, category: cat })),
    );
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="pt-28 pb-16 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(150deg, #2A1A0A, #4A2C17)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9952A 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C9952A", animation: "fadeIn 0.6s ease both" }}
          >
            What We Serve
          </p>
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              color: "#FDF6EC",
              animation: "fadeUp 0.7s ease 0.2s both",
            }}
          >
            Our Menu
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{
              color: "#C4A882",
              animation: "fadeUp 0.7s ease 0.4s both",
            }}
          >
            Fresh ingredients. Honest flavours. Made with love, every single
            time.
          </p>
        </div>
      </section>

      {/* ── Tab Navigation ────────────────────────────────────── */}
      <div
        className="sticky top-16 z-40 px-6 py-4"
        style={{
          background: "rgba(253,246,236,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #E8D0A8",
        }}
      >
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const count =
              tab === "All" ? getAllItems().length : menuData[tab]?.length;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="whitespace-nowrap px-5 py-2 text-sm rounded-full transition-all duration-200 flex items-center gap-1.5"
                style={{
                  background: isActive ? "#4A2C17" : "transparent",
                  color: isActive ? "#FDF6EC" : "#7B4A2D",
                  border: isActive ? "1px solid #4A2C17" : "1px solid #E8D0A8",
                  fontFamily: '"Lora", serif',
                  cursor: "pointer",
                  fontWeight: isActive ? "600" : "400",
                }}
              >
                {tab}
                <span
                  style={{
                    fontSize: "0.65rem",
                    opacity: 0.65,
                    background: isActive ? "rgba(255,255,255,0.15)" : "#E8D0A8",
                    color: isActive ? "#FDF6EC" : "#7B4A2D",
                    padding: "1px 6px",
                    borderRadius: "999px",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Menu Items ────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item, i) => (
              <div
                key={`${item.category}-${item.name}`}
                className="animate-on-scroll bg-white rounded-3xl overflow-hidden group"
                style={{
                  border: "1px solid #F0E0C8",
                  boxShadow: "0 2px 8px rgba(74,44,23,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transitionDelay: `${i * 0.055}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(74,44,23,0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(74,44,23,0.06)";
                }}
              >
                {/* ── Image area ── */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    height: "220px",
                    background: "linear-gradient(135deg, #F5E6CC, #E8D0A8)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={500}
                    width={500}
                    // fill
                    className="object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.07)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Gradient fade at bottom of image into card */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(255,255,255,0.6), transparent)",
                    }}
                  />

                  {/* Tag badge — top left */}
                  {item.tag && (
                    <span
                      className="absolute top-3 left-3 z-10 rounded-full font-medium"
                      style={{
                        background: tagColors[item.tag]?.bg || "#4A2C17",
                        color: tagColors[item.tag]?.color || "#fff",
                        fontSize: "0.6rem",
                        letterSpacing: "0.09em",
                        textTransform: "uppercase",
                        padding: "4px 11px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.22)",
                      }}
                    >
                      {item.tag}
                    </span>
                  )}

                  {/* Category badge — top right (only on All tab) */}
                  {showCategory && item.category && (
                    <span
                      className="absolute top-3 right-3 z-10 rounded-full"
                      style={{
                        background: "rgba(42,26,10,0.65)",
                        color: "#E8D0A8",
                        fontSize: "0.58rem",
                        letterSpacing: "0.09em",
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {item.category}
                    </span>
                  )}
                </div>

                {/* ── Card body ── */}
                <div className="p-5">
                  {/* Name + Price row */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      className="font-display font-semibold leading-snug"
                      style={{ color: "#4A2C17", fontSize: "1rem" }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="font-display font-bold shrink-0"
                      style={{ color: "#C9952A", fontSize: "1.05rem" }}
                    >
                      ${item.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{ color: "#7B5C3E" }}
                  >
                    {item.desc}
                  </p>

                  {/* Divider + order button */}
                  {/* <div
                    className="mt-4 pt-4 flex items-center justify-between"
                    style={{ borderTop: "1px solid #F0E0C8" }}
                  >
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#C4A882", fontSize: "0.62rem" }}
                    >
                      {item.category || activeTab}
                    </span>
                    <button
                      className="text-xs font-medium rounded-full px-4 py-1.5 transition-all duration-200"
                      style={{
                        background: "#4A2C17",
                        color: "#FDF6EC",
                        fontSize: "0.7rem",
                        letterSpacing: "0.06em",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#C9952A";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#4A2C17";
                      }}
                    >
                      Order Now
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note ──────────────────────────────────────────────── */}
      <section
        className="py-12 px-6 text-center animate-on-scroll"
        style={{ background: "#F5E6CC" }}
      >
        <p className="text-sm" style={{ color: "#7B5C3E" }}>
          All prices include VAT. &nbsp;|&nbsp; Vegetarian &amp; vegan options
          available. &nbsp;|&nbsp; Please inform staff of any allergies.
        </p>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center animate-on-scroll"
        style={{ background: "#4A2C17" }}
      >
        <h2
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#FDF6EC" }}
        >
          Ready to Order?
        </h2>
        <p className="mb-8" style={{ color: "#C4A882" }}>
          Visit us or reserve your table in advance.
        </p>
        <Link href="/contact" className="btn-outline">
          Make a Reservation
        </Link>
      </section>
    </>
  );
}
