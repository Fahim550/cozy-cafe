'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const menuData = {
  Breakfast: [
    { name: 'Classic Eggs Benedict',    price: '৳ 380', desc: 'Poached eggs, Canadian bacon, hollandaise on toasted muffin.', tag: 'Popular',   emoji: '🍳' },
    { name: 'Avocado Toast',            price: '৳ 280', desc: 'Sourdough, smashed avocado, chili flakes, poached egg.',       tag: 'Healthy',   emoji: '🥑' },
    { name: 'French Toast Stack',       price: '৳ 320', desc: 'Thick brioche, maple syrup, fresh berries, whipped cream.',    tag: 'Sweet',     emoji: '🍞' },
    { name: 'Full English Breakfast',   price: '৳ 450', desc: 'Eggs, sausage, beans, grilled tomato, bacon, toast.',          tag: 'Filling',   emoji: '🍽️' },
    { name: 'Acai Bowl',                price: '৳ 350', desc: 'Blended acai, banana, granola, honey, seasonal fruits.',       tag: 'Vegan',     emoji: '🫐' },
    { name: 'Banana Pancakes',          price: '৳ 260', desc: 'Fluffy stacks with banana slices and warm maple drizzle.',     tag: '',          emoji: '🥞' },
  ],
  Lunch: [
    { name: 'Grilled Chicken Sandwich', price: '৳ 420', desc: 'Herb-marinated chicken, lettuce, tomato, garlic aioli.',       tag: 'Best Seller', emoji: '🥪' },
    { name: 'Mushroom Pasta',           price: '৳ 380', desc: 'Al dente penne, creamy mushroom sauce, parmesan.',            tag: 'Vegetarian',  emoji: '🍝' },
    { name: 'Garden Salad Bowl',        price: '৳ 320', desc: 'Seasonal greens, feta, cherry tomatoes, balsamic.',           tag: 'Light',       emoji: '🥗' },
    { name: 'Club Sandwich',            price: '৳ 400', desc: 'Triple-decker with turkey, bacon, egg, and cheddar.',         tag: '',            emoji: '🥙' },
    { name: 'Lentil Soup',              price: '৳ 200', desc: 'Slow-cooked red lentils, cumin, fresh herbs, crusty bread.',  tag: 'Vegan',       emoji: '🍲' },
    { name: 'Beef Burger',              price: '৳ 520', desc: '180g beef patty, caramelized onion, brioche bun, fries.',     tag: 'Premium',     emoji: '🍔' },
  ],
  Drinks: [
    { name: 'Signature Latte',          price: '৳ 220', desc: 'Double espresso, velvety steamed milk, house blend.',         tag: 'Best Seller', emoji: '☕' },
    { name: 'Cold Brew',                price: '৳ 240', desc: '18-hour cold brew, smooth, low acidity, served over ice.',   tag: 'Iced',        emoji: '🧊' },
    { name: 'Matcha Latte',             price: '৳ 230', desc: 'Ceremonial grade matcha, oat milk, light honey.',            tag: 'Trending',    emoji: '🍵' },
    { name: 'Mango Smoothie',           price: '৳ 180', desc: 'Fresh mango, yogurt, honey, dash of lime.',                  tag: 'Fresh',       emoji: '🥭' },
    { name: 'Iced Americano',           price: '৳ 190', desc: 'Two shots espresso, cold filtered water, ice.',              tag: '',            emoji: '🥤' },
    { name: 'Mint Lemonade',            price: '৳ 160', desc: 'Fresh lemon juice, mint leaves, sparkling water.',           tag: 'Refreshing',  emoji: '🍋' },
  ],
  Desserts: [
    { name: 'Belgian Waffle',           price: '৳ 280', desc: 'Crisp golden waffle, vanilla ice cream, berry compote.',     tag: 'Popular',     emoji: '🧇' },
    { name: 'Tiramisu',                 price: '৳ 300', desc: 'Classic Italian, mascarpone, espresso-soaked ladyfingers.',  tag: 'Classic',     emoji: '🎂' },
    { name: 'Chocolate Lava Cake',      price: '৳ 320', desc: 'Warm cake, molten centre, vanilla ice cream on the side.',  tag: 'Indulgent',   emoji: '🍫' },
    { name: 'Cheesecake Slice',         price: '৳ 260', desc: 'New York style, graham cracker crust, strawberry topping.', tag: '',            emoji: '🍰' },
    { name: 'Butter Croissant',         price: '৳ 150', desc: 'Freshly baked every morning. Flaky, buttery, golden.',      tag: 'Fresh Daily', emoji: '🥐' },
    { name: 'Cinnamon Roll',            price: '৳ 180', desc: 'Soft dough, cinnamon sugar swirl, cream cheese glaze.',     tag: 'Sweet',       emoji: '🌀' },
  ],
}

const tagColors = {
  'Popular':    { bg: '#FEF3C7', color: '#92400E' },
  'Best Seller':{ bg: '#FEF3C7', color: '#92400E' },
  'Healthy':    { bg: '#DCFCE7', color: '#166534' },
  'Vegan':      { bg: '#DCFCE7', color: '#166534' },
  'Fresh':      { bg: '#DCFCE7', color: '#166534' },
  'Vegetarian': { bg: '#DCFCE7', color: '#166534' },
  'Iced':       { bg: '#DBEAFE', color: '#1E40AF' },
  'Refreshing': { bg: '#DBEAFE', color: '#1E40AF' },
  'Trending':   { bg: '#EDE9FE', color: '#5B21B6' },
  'Sweet':      { bg: '#FCE7F3', color: '#9D174D' },
  'Indulgent':  { bg: '#FCE7F3', color: '#9D174D' },
  'Classic':    { bg: '#F3F4F6', color: '#374151' },
  'Premium':    { bg: '#FDF4FF', color: '#7E22CE' },
  'Filling':    { bg: '#FFF7ED', color: '#9A3412' },
  'Light':      { bg: '#F0FDF4', color: '#166534' },
  'Fresh Daily':{ bg: '#FFF7ED', color: '#9A3412' },
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Breakfast')
  useScrollAnimation()

  const tabs = Object.keys(menuData)

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="pt-36 pb-20 px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #2A1A0A, #4A2C17)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #C9952A 1px, transparent 1px)',
            backgroundSize:  '32px 32px',
          }}
        />
        <div className="relative z-10">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: '#C9952A', animation: 'fadeIn 0.6s ease both' }}
          >
            What We Serve
          </p>
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize:  'clamp(2.4rem, 6vw, 4.5rem)',
              color:     '#FDF6EC',
              animation: 'fadeUp 0.7s ease 0.2s both',
            }}
          >
            Our Menu
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: '#C4A882', animation: 'fadeUp 0.7s ease 0.4s both' }}
          >
            Fresh ingredients. Honest flavours. Made with love, every single time.
          </p>
        </div>
      </section>

      {/* ── Tab Navigation ────────────────────────────────────── */}
      <div
        className="sticky top-16 z-40 px-6 py-4"
        style={{
          background:   'rgba(253,246,236,0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #E8D0A8',
        }}
      >
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="whitespace-nowrap px-6 py-2.5 text-sm font-medium transition-all duration-200"
              style={{
                background:  activeTab === tab ? '#4A2C17' : 'transparent',
                color:       activeTab === tab ? '#FDF6EC' : '#7B4A2D',
                border:      activeTab === tab ? '1px solid #4A2C17' : '1px solid #E8D0A8',
                fontFamily:  '"Lora", serif',
                cursor:      'pointer',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Menu Items ────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ background: '#FDF6EC' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData[activeTab].map((item, i) => (
              <div
                key={item.name}
                className="menu-card p-6 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.emoji}</span>
                    <div>
                      <h3
                        className="font-display font-semibold"
                        style={{ color: '#4A2C17', fontSize: '1rem' }}
                      >
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span
                          className="text-xs px-2 py-0.5 inline-block mt-1"
                          style={{
                            background: tagColors[item.tag]?.bg    || '#F5E6CC',
                            color:      tagColors[item.tag]?.color || '#7B4A2D',
                            fontSize:   '0.65rem',
                            letterSpacing: '0.06em',
                          }}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <span
                    className="font-display font-bold text-base shrink-0 ml-2"
                    style={{ color: '#C9952A' }}
                  >
                    {item.price}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#7B5C3E' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note ──────────────────────────────────────────────── */}
      <section
        className="py-12 px-6 text-center animate-on-scroll"
        style={{ background: '#F5E6CC' }}
      >
        <p className="text-sm" style={{ color: '#7B5C3E' }}>
          🌿 All prices include VAT. &nbsp;|&nbsp; Vegetarian &amp; vegan options available. &nbsp;|&nbsp;
          Please inform staff of any allergies.
        </p>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center animate-on-scroll"
        style={{ background: '#4A2C17' }}
      >
        <h2
          className="font-display font-bold mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#FDF6EC' }}
        >
          Ready to Order?
        </h2>
        <p className="mb-8" style={{ color: '#C4A882' }}>
          Visit us or reserve your table in advance.
        </p>
        <Link href="/contact" className="btn-outline">
          Make a Reservation
        </Link>
      </section>
    </>
  )
}
