// components/Portfolio.js
"use client";

import Image from "next/image";
import { portfolioItems, categories } from "../../data/portfolioData";

export default function Portfolio({ onImageClick }) {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Portfolio
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          A showcase of my creative work spanning logos, posters, banners, and
          various design projects.
        </p>

        {categories.map((category) => {
          const categoryItems = portfolioItems.filter(
            (item) => item.category === category.key
          );

          return (
            <div key={category.key} className="mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {category.title}
              </h3>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 ${category.gridCols} gap-6`}
              >
                {categoryItems.map((item) => (
                  <div
                    key={item.id}
                    className="portfolio-item bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
                    onClick={() => onImageClick(item.imageSrc)}
                  >
                    {/* Image Box */}
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text Info */}
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
