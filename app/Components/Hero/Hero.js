// components/Hero.js
"use client";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Hi, I&apos;m <span className="text-blue-600">Muhammad Noman</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
            a Graphic Designer
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            I specialize in creating stunning logos, eye-catching posters,
            professional banners, and innovative creative designs that bring
            your vision to life. Let&apos;s transform your ideas into compelling
            visual stories.
          </p>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}