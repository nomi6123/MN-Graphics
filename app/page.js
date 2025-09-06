// pages/index.js or app/page.js
"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import Lightbox from "./Components/Lightbox/Lightbox";
import Header from "./Components/Header/Header";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className={`${inter.className} bg-gray-50 text-gray-800`}>
      <Header />
      <Hero />
      <Portfolio onImageClick={openLightbox} />
      <About />
      <Footer />
      <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />
    </div>
  );
}