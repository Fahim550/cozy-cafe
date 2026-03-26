import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Cozy Café",
  description: "A cozy café for great coffee, food, and good company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
