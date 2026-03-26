# ☕ Brew & Bloom Café Website

A complete, production-ready café website built with **Next.js 14** and **Tailwind CSS**.

## 📁 Project Structure

```
my-cafe/
├── app/
│   ├── layout.jsx          ← Root layout (Navbar + Footer on every page)
│   ├── globals.css         ← Global styles, fonts, custom classes
│   ├── page.jsx            ← Home page
│   ├── about/
│   │   └── page.jsx        ← About page
│   ├── menu/
│   │   └── page.jsx        ← Menu page (with category tabs)
│   ├── contact/
│   │   └── page.jsx        ← Contact page (with reservation form)
│   └── components/
│       ├── Navbar.jsx      ← Sticky navbar with mobile menu
│       └── Footer.jsx      ← Footer with links and social media
├── public/                 ← Put your images here
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🚀 How to Run

### Step 1 — Install Node.js
Download from: https://nodejs.org (choose LTS version)

### Step 2 — Install dependencies
```bash
npm install
```

### Step 3 — Run the development server
```bash
npm run dev
```

Open your browser at: **http://localhost:3000**

## 🎨 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, featured items, why us section |
| About | `/about` | Story, values, team |
| Menu | `/menu` | Full menu with category tabs |
| Contact | `/contact` | Reservation form, address, hours |

## 🎨 Design

- **Colors**: Brown (#4A2C17), Cream (#FDF6EC), Green (#2D5A27), Gold (#C9952A)
- **Fonts**: Playfair Display (headings) + Lora (body) from Google Fonts
- **Mobile**: Fully responsive with hamburger menu on mobile
- **Animations**: Scroll-triggered fade-in animations on all sections

## 📦 Deploy to Vercel (Free)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click **New Project** → import your GitHub repo
4. Click **Deploy**

Your live site URL will be: `https://your-project.vercel.app`

## ✏️ How to Customize

### Change café name
Search and replace `Brew & Bloom` in all files.

### Change menu items
Edit the `menuData` object in `app/menu/page.jsx`.

### Change colors
Edit the `cafe` colors in `tailwind.config.js` and the CSS variables in `globals.css`.

### Add Google Maps
In `app/contact/page.jsx`, replace the map placeholder section with your Google Maps embed iframe.

### Add real images
Put image files in the `/public` folder, then use `<Image src="/your-image.jpg" />` from Next.js.
