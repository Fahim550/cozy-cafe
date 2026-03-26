'use client'
import { useEffect } from 'react'
import Link from 'next/link'

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const team = [
  { emoji: '👨‍🍳', name: 'Rafiq Islam',   role: 'Head Chef',          bio: '15 years of culinary experience across Dhaka and Chittagong.' },
  { emoji: '☕',    name: 'Nusrat Jahan', role: 'Head Barista',       bio: 'Trained in specialty coffee. Competed at the National Barista Championship.' },
  { emoji: '🌿',   name: 'Tariq Hasan',  role: 'Founder & Manager',  bio: 'Started Brew & Bloom in 2019 with a dream and a second-hand espresso machine.' },
]

const values = [
  { icon: '🌾', title: 'Local First',      body: 'We partner with small farmers across Bangladesh for our produce.' },
  { icon: '❤️', title: 'Made with Care',   body: 'Every item on the menu is prepared by hand with real ingredients.' },
  { icon: '🤝', title: 'Community Hub',    body: 'We host events, open mics, and student meetups every month.' },
  { icon: '🌍', title: 'Sustainability',   body: 'Compostable packaging, seasonal menus, and zero food waste goal.' },
]

export default function About() {
  useScrollAnimation()

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="pt-36 pb-24 px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #2A1A0A, #4A2C17 60%, #2D5A27)' }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
          style={{ background: '#C9952A', filter: 'blur(90px)' }}
        />
        <div className="relative z-10">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: '#C9952A', animation: 'fadeIn 0.6s ease both' }}
          >
            Our Story
          </p>
          <h1
            className="font-display font-bold mb-6"
            style={{
              fontSize:  'clamp(2.4rem, 6vw, 4.5rem)',
              color:     '#FDF6EC',
              animation: 'fadeUp 0.7s ease 0.2s both',
            }}
          >
            More Than a Café.
            <br />
            <em style={{ color: '#C9952A' }}>A Feeling.</em>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#C4A882', animation: 'fadeUp 0.7s ease 0.4s both' }}
          >
            Every great café has a story. Ours began with a simple belief: 
            the world is better with good coffee and honest food.
          </p>
        </div>
      </section>

      {/* ── Origin Story ──────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#FDF6EC' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#C9952A' }}>
              How It Began
            </p>
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#4A2C17' }}
            >
              A Dream, a Rented Room,
              <br />and One Espresso Machine
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#7B5C3E' }}>
              In 2019, Tariq Hasan turned a small rented space on Garden Street into what 
              is now Brew &amp; Bloom. With a borrowed espresso machine, a handful of recipes 
              passed down from his mother, and an unshakeable belief that people deserved 
              a better cup of coffee — the café was born.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#7B5C3E' }}>
              The early days were tough. But something magical happened: people kept coming back. 
              Not just for the coffee, but for the warmth, the conversations, and the feeling 
              that someone genuinely cared about their experience.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#7B5C3E' }}>
              Today, Brew &amp; Bloom serves hundreds of guests daily. The espresso machine 
              has been upgraded. The menu has grown. But the spirit — honest, warm, 
              community-first — has never changed.
            </p>
          </div>

          {/* Visual block */}
          <div
            className="animate-on-scroll relative"
            style={{ transitionDelay: '0.2s' }}
          >
            <div
              className="rounded-2xl p-12 text-center"
              style={{ background: 'linear-gradient(135deg, #4A2C17, #7B4A2D)' }}
            >
              <div className="text-8xl mb-6">☕</div>
              <h3
                className="font-display font-bold text-3xl mb-2"
                style={{ color: '#FDF6EC' }}
              >
                Est. 2019
              </h3>
              <p style={{ color: '#C4A882' }}>Dhaka, Bangladesh</p>
              <div
                className="mt-8 pt-8 grid grid-cols-3 gap-4"
                style={{ borderTop: '1px solid rgba(201,149,42,0.3)' }}
              >
                {[
                  { num: '500+', label: 'Daily Guests'  },
                  { num: '6',   label: 'Years Running'  },
                  { num: '40+', label: 'Menu Items'     },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="font-display font-bold text-2xl"
                      style={{ color: '#C9952A' }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-xs mt-1" style={{ color: '#A0856A' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#F5E6CC' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#C9952A' }}>
              What We Believe
            </p>
            <h2
              className="font-display font-bold"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#4A2C17' }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white p-8 animate-on-scroll"
                style={{
                  border:          '1px solid #E8D0A8',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3
                  className="font-display font-semibold mb-3"
                  style={{ color: '#4A2C17' }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7B5C3E' }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#FDF6EC' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#C9952A' }}>
              The People Behind Every Cup
            </p>
            <h2
              className="font-display font-bold"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#4A2C17' }}
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
                  style={{ color: '#4A2C17' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: '#C9952A', fontSize: '0.7rem' }}
                >
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#7B5C3E' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
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
          Come Experience It Yourself
        </h2>
        <p className="mb-8" style={{ color: '#C4A882' }}>
          We'd love to have you. No reservation needed — just walk in.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu" className="btn-outline">Browse Menu</Link>
          <Link href="/contact" className="btn-primary" style={{ background: '#C9952A', borderColor: '#C9952A' }}>
            Reserve a Table
          </Link>
        </div>
      </section>
    </>
  )
}
