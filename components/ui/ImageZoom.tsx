'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

interface ImageZoomProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImageZoom({ src, alt, width, height, className = '' }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Image cliquable */}
      <div
        onClick={openModal}
        className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>

      {/* Modal Zoom */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 animate-fadeIn"
          onClick={closeModal}
        >
          {/* Bouton fermer */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 p-3 bg-orange text-cream rounded-full hover:bg-orange/80 transition-all duration-300 shadow-lg"
            aria-label="Fermer"
          >
            <X size={28} />
          </button>

          {/* Image agrandie */}
          <div
            className="relative w-full h-full flex items-center justify-center animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="max-w-[98vw] max-h-[98vh] w-auto h-auto object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
