// components/About.js
"use client";

export default function About() {
  const services = [
    {
      title: "Logo Design",
      description: "Brand identity & logos",
      color: "blue-600",
    },
    {
      title: "Poster Design",
      description: "Event & promotional materials",
      color: "green-600",
    },
    {
      title: "Banner Design",
      description: "Digital & print banners",
      color: "purple-600",
    },
    {
      title: "Creative Design",
      description: "Innovative concepts",
      color: "orange-600",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-6xl">👨‍🎨</div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Creative Visual Storyteller
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I&apos;m Muhammad Noman, a passionate graphic designer with a keen
                eye for detail and a love for creating visually compelling
                designs. With years of experience in the field, I specialize
                in crafting unique logos, dynamic posters, professional
                banners, and innovative creative solutions that help brands
                stand out in today&apos;s competitive market.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My design philosophy centers around understanding each
                client&apos;s unique story and translating that into powerful
                visual communications. Whether you need a complete brand
                identity, marketing materials, or creative concepts, I&apos;m here
                to bring your vision to life with precision and creativity.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className={`font-semibold text-${service.color} mb-2`}>
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}