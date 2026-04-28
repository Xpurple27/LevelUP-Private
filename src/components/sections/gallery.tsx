
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Image as ImageIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  const getGuide = (id: string) => {
    switch (id) {
      case 'gallery-1': return "Foto sesi belajar tatap muka langsung yang menunjukkan keakraban.";
      case 'gallery-2': return "Foto setup belajar online yang estetik (laptop, kopi, dan alat tulis).";
      case 'gallery-3': return "Foto close-up pengerjaan soal matematika yang rapi di kertas atau whiteboard.";
      case 'gallery-4': return "Foto candid siswa yang sedang serius namun tetap rileks saat belajar.";
      case 'gallery-5': return "Foto diskusi santai antara tutor dan beberapa siswa sekaligus.";
      case 'gallery-6': return "Foto aksi tutor saat menggambar ilustrasi matematika yang menarik.";
      case 'gallery-7': return "Foto bukti sertifikat atau nilai tinggi siswa yang membanggakan.";
      default: return "Foto aktivitas belajar mengajar.";
    }
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline uppercase tracking-wide">Galeri Aktivitas</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Melihat langsung proses belajar mengajar yang interaktif dan menyenangkan bersama para pengajar Level Up.
          </p>
        </div>

        <div className="px-12 md:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative group overflow-hidden rounded-3xl shadow-lg aspect-square">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <ImageIcon className="h-4 w-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Panduan Foto</span>
                      </div>
                      <p className="font-bold text-base mb-1">{image.description}</p>
                      <p className="text-xs text-white/70 italic">{getGuide(image.id)}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-primary text-primary hover:bg-primary hover:text-white" />
              <CarouselNext className="-right-12 border-primary text-primary hover:bg-primary hover:text-white" />
            </div>
            {/* Mobile Indicators Hint */}
            <div className="mt-8 flex justify-center gap-2 md:hidden">
              <span className="text-xs text-muted-foreground italic">Geser untuk melihat lebih banyak foto →</span>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
