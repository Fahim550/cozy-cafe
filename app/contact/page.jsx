"use client";
import { useEffect, useState } from "react";

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

const info = [
  {
    icon: "📍",
    title: "Address",
    lines: ["8834 E 34 Rd #131, Cadillac, MI 49601"],
  },
  {
    icon: "📞",
    title: "Phone",
    lines: ["+1(56)88289017"],
  },
  {
    icon: "✉️",
    title: "Email",
    lines: ["hello@cozycafe.com", "reservations@cozycafe.com"],
  },
  {
    icon: "🕐",
    title: "Hours",
    lines: ["Mon – Fri: 7:00 AM – 10:00 PM", "Sat – Sun: 8:00 AM – 11:00 PM"],
  },
];

export default function Contact() {
  useScrollAnimation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // '' | 'sending' | 'sent' | 'error'

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Simulate async send
    setTimeout(() => {
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        guests: "",
        date: "",
        message: "",
      });
    }, 1200);
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="pt-36 pb-20 px-6 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(150deg, #2A1A0A, #4A2C17 60%, #2D5A27)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "#4A8C42", filter: "blur(80px)" }}
        />
        <div className="relative z-10">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C9952A", animation: "fadeIn 0.6s ease both" }}
          >
            Get in Touch
          </p>
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              color: "#FDF6EC",
              animation: "fadeUp 0.7s ease 0.2s both",
            }}
          >
            Say Hello
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{
              color: "#C4A882",
              animation: "fadeUp 0.7s ease 0.4s both",
            }}
          >
            Reserve a table, ask a question, or just tell us you're on your way.
            We're always happy to hear from you.
          </p>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="animate-on-scroll mb-10">
              <p
                className="text-xs tracking-widest uppercase mb-2"
                style={{ color: "#C9952A" }}
              >
                Find Us
              </p>
              <h2
                className="font-display font-bold mb-4"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "#4A2C17",
                }}
              >
                Visit Cozy Café
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#7B5C3E" }}
              >
                We're nestled on Garden Street — look for the green awning and
                the smell of fresh coffee. Free parking available on weekends.
              </p>
            </div>

            <div className="space-y-8">
              {info.map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-4 animate-on-scroll"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0 text-lg"
                    style={{
                      background: "#F5E6CC",
                      border: "1px solid #E8D0A8",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      className="font-display font-semibold mb-1"
                      style={{ color: "#4A2C17", fontSize: "0.9rem" }}
                    >
                      {item.title}
                    </h4>
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="text-sm"
                        style={{ color: "#7B5C3E" }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div
              className="mt-10 pt-8 animate-on-scroll"
              style={{
                borderTop: "1px solid #E8D0A8",
                transitionDelay: "0.4s",
              }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: "#C9952A" }}
              >
                Follow Us
              </p>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "Twitter"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="px-4 py-2 text-xs uppercase tracking-widest transition-all duration-200"
                    style={{
                      border: "1px solid #E8D0A8",
                      color: "#7B4A2D",
                      fontSize: "0.65rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#4A2C17";
                      e.currentTarget.style.color = "#FDF6EC";
                      e.currentTarget.style.borderColor = "#4A2C17";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#7B4A2D";
                      e.currentTarget.style.borderColor = "#E8D0A8";
                    }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="lg:col-span-3 animate-on-scroll"
            style={{ transitionDelay: "0.15s" }}
          >
            <div
              className="p-8 md:p-10"
              style={{
                background: "white",
                border: "1px solid #E8D0A8",
                borderRadius: "6px",
              }}
            >
              <h3
                className="font-display font-semibold text-xl mb-2"
                style={{ color: "#4A2C17" }}
              >
                Make a Reservation
              </h3>
              <p className="text-sm mb-8" style={{ color: "#7B5C3E" }}>
                Fill in the form below and we'll confirm your table within 2
                hours.
              </p>

              {status === "sent" ? (
                <div
                  className="text-center py-12"
                  style={{ border: "1px dashed #C9952A" }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h4
                    className="font-display font-semibold text-xl mb-2"
                    style={{ color: "#4A2C17" }}
                  >
                    We've Got Your Request!
                  </h4>
                  <p className="text-sm" style={{ color: "#7B5C3E" }}>
                    We'll confirm your reservation by email within 2 hours. See
                    you soon!
                  </p>
                  <button
                    onClick={() => setStatus("")}
                    className="mt-6 text-xs uppercase tracking-widest underline"
                    style={{
                      color: "#C9952A",
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                    }}
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "#A0673A" }}
                      >
                        Full Name *
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "#A0673A" }}
                      >
                        Email Address *
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "#A0673A" }}
                      >
                        Phone Number
                      </label>
                      <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        placeholder="+880 XXXX-XXXXXX"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "#A0673A" }}
                      >
                        Number of Guests
                      </label>
                      <select
                        className="form-input"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        style={{ cursor: "pointer" }}
                      >
                        <option value="">Select guests</option>
                        {[1, 2, 3, 4, 5, "6+"].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "person" : "people"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "#A0673A" }}
                    >
                      Preferred Date &amp; Time
                    </label>
                    <input
                      className="form-input"
                      type="datetime-local"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "#A0673A" }}
                    >
                      Message *
                    </label>
                    <textarea
                      className="form-input resize-none"
                      name="message"
                      rows={4}
                      placeholder="Any special requests, dietary requirements, or questions..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm" style={{ color: "#DC2626" }}>
                      Please fill in Name, Email, and Message fields.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary w-full text-center"
                    style={{ opacity: status === "sending" ? 0.7 : 1 }}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Reserve My Table"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ───────────────────────────────────── */}
      <section
        className="py-0 animate-on-scroll"
        style={{ background: "#F5E6CC" }}
      >
        <div
          className="w-full h-64 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #E8D0A8, #D4B896)",
            border: "1px solid #C9A87A",
          }}
        >
          <div className="text-center">
            <div className="text-5xl mb-3">📍</div>
            <p
              className="font-display font-semibold text-lg"
              style={{ color: "#4A2C17" }}
            >
              <p>8834 E 34 Rd #131</p>
              <p>Cadillac, MI 49601</p>
            </p>
            <p className="text-sm mt-1" style={{ color: "#7B5C3E" }}>
              Embed your Google Maps iframe here
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
