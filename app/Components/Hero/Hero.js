// components/Hero.js
"use client";

import Image from "next/image";
import {  Play, Star, Users, Zap } from "lucide-react";
import { thumbnails } from "../../data/portfolioData";

export default function Hero({ onImageClick }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-20">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-200">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-gray-700 text-sm font-medium">Premium Designer</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Muhammad Noman
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <h2 className="text-xl md:text-2xl font-light text-gray-600">
              Creative Graphic Designer
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>

          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into captivating visual experiences. I craft stunning 
            <span className="text-blue-600 font-semibold"> logos</span>, 
            <span className="text-purple-600 font-semibold"> eye-catching thumbnails</span>, 
            <span className="text-pink-600 font-semibold"> professional banners</span>, and 
            innovative designs that tell your story.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">500+</div>
              <div className="text-gray-500 text-sm">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">100+</div>
              <div className="text-gray-500 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">5★</div>
              <div className="text-gray-500 text-sm">Rating</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection("contact")}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Let&apos;s Work Together
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              View Portfolio
            </button>
          </div>
        </div>

        {/* Integrated Thumbnails Section */}
        <div id="thumbnails" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              YouTube Thumbnails
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of custom-designed YouTube thumbnails tailored for engaging video content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thumbnails.map((thumb) => (
              <div
                key={thumb.id}
                className="bg-black/10 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl border border-gray-100"
                onClick={() => onImageClick && onImageClick(thumb.imageSrc)}
              >
                <div className="relative w-full h-fit ">
                  <Image
                    src={thumb.imageSrc}
                    alt={thumb.title}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold text-gray-800 mb-1">
                    {thumb.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{thumb.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

    
      </div>
    </section>
  );
}