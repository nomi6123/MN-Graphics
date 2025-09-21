import Image from "next/image";
import Link from "next/link";
import { CreativeDesign } from "../data/portfolioData";  // ✅ fixed path

export default function CreativeDesignPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Creative Designs
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          A collection of custom creative designs tailored for clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CreativeDesign.map((design) => (
            <Link key={design.id} href={`/CreativeDesign/${design.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative w-full h-fit">
                  <Image
                    src={design.imageSrc}
                    alt={design.title}
                    width={1280}
                    height={720}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{design.title}</h4>
                  <p className="text-gray-600 text-sm">{design.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
