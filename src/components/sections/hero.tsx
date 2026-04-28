
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Zap, Image as ImageIcon } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-tutor');

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold w-fit">
            <Zap className="h-4 w-4" />
            <span>Tersedia Kelas Online & Offline</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline leading-tight tracking-tight">
            Private Matematika <span className="text-primary">Mudah Dipahami</span>, Nilai Naik Signifikan
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-lg">
            Belajar matematika bukan lagi mimpi buruk. Dengan metode step-by-step yang fokus pada pemahaman konsep, kami bantu kamu raih nilai impian dan lolos PTN favorit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="rounded-full px-8 text-lg w-full sm:w-auto" asChild>
              <a href="#contact">Daftar Sekarang</a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg w-full sm:w-auto" asChild>
              <a href="https://wa.me/6282369290805" target="_blank" rel="noopener noreferrer">Konsultasi Gratis</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mt-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Bebas Tanya di Luar Jam</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Metode Konseptual</span>
            </div>
          </div>
        </div>

        <div className="relative group mt-8 lg:mt-0 max-w-md mx-auto lg:max-w-none w-full">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[3/4]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
              <ImageIcon className="h-12 w-12 text-white mb-4" />
              <p className="text-white font-bold text-lg mb-2">Rekomendasi Foto</p>
              <p className="text-white/80 text-sm">Gunakan foto tutor profesional yang sedang tersenyum ramah menghadap kamera. Pastikan pencahayaan terang dan latar belakang bersih.</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-border flex items-center gap-3 md:gap-4 max-w-[200px] md:max-w-[240px]">
            <div className="bg-primary/10 p-2 md:p-3 rounded-full shrink-0">
              <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold">500+</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">Siswa Berhasil Nilai 90+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
