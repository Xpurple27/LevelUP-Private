
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline uppercase tracking-wide">Galeri Aktivitas</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Melihat langsung proses belajar mengajar yang interaktif, baik secara tatap muka maupun daring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className={cn(
                "relative group overflow-hidden rounded-3xl shadow-lg transition-all duration-500",
                idx === 0 ? "md:col-span-2 md:row-span-2 aspect-[16/9] md:aspect-auto" : "aspect-square"
              )}
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-medium text-lg">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from '@/lib/utils';
