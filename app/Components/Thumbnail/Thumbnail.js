// // components/Thumbnail.js
// "use client";

// import Image from "next/image";
// import { thumbnails } from "../../data/portfolioData";

// export default function Thumbnail({ onImageClick }) {
//   return (
//     <section id="thumbnails" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
//           YouTube Thumbnails
//         </h2>
//         <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
//           A collection of custom-designed YouTube thumbnails tailored for
//           engaging video content.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {thumbnails.map((thumb) => (
//             <div
//               key={thumb.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
//               onClick={() => onImageClick(thumb.imageSrc)}
//             >
//               {/* Image Box */}
//               <div className="relative w-full h-fit">
//                 <Image
//                   src={thumb.imageSrc}
//                   alt={thumb.title}
//                   width={1280}
//                   height={720}
//                   className="w-full h-auto object-cover rounded-2xl"
//                 />
//               </div>

//               {/* Text Info */}
//               <div className="p-4">
//                 <h4 className="text-lg font-semibold text-gray-800">
//                   {thumb.title}
//                 </h4>
//                 <p className="text-gray-600 text-sm">{thumb.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
