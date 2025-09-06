import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Noman - Graphic Designer Portfolio",
  description:
    "Professional graphic designer specializing in logos, posters, banners, and creative designs. Transform your ideas into compelling visual stories.",
  keywords:
    "graphic designer, logo design, poster design, banner design, creative design, brand identity, Muhammad Noman",
  authors: [{ name: "Muhammad Noman" }],
  openGraph: {
    title: "Muhammad Noman - Graphic Designer Portfolio",
    description:
      "Professional graphic designer specializing in logos, posters, banners, and creative designs.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
