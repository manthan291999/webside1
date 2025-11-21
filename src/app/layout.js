import "./globals.css";
import { siteConfig } from "../data/siteConfig";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Cursor from "../components/Cursor";

export const metadata = {
  title: `${siteConfig.name} – Portfolio`,
  description: siteConfig.tagline,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-darkBg text-gray-100 antialiased selection:bg-primary/30 selection:text-white relative">
        <Background />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
