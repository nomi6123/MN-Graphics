// components/Lightbox.js
"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Lightbox({ imageSrc, onClose }) {
  useEffect(() => {
    if (imageSrc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [imageSrc]);

  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div className="relative w-screen h-screen p-8 flex items-center justify-center">
  <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
    <Image
      src={imageSrc}
      alt="Portfolio Preview"
      fill
      className="object-contain rounded-lg"
    />
  </div>
</div>

    </div>
  );
}
