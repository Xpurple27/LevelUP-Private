
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Zap } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-tutor');

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold w-fit">
            <Zap className="h-4 w-4" />
            <span>Tersedia Kelas Online & Offline</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline leading-tight">
            Private Matematika <span className="text-primary">Mudah Dipahami</span>, Nilai Naik Signifikan
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg">
            Belajar matematika bukan lagi mimpi buruk. Dengan metode step-by-step yang fokus pada pemahaman konsep, kami bantu kamu raih nilai impian dan lolos PTN favorit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8 text-lg" asChild>
              <a href="#contact">Daftar Sekarang</a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg" asChild>
              <a href="https://wa.me/628123456789" target="_blank">Konsultasi Gratis</a>
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-4">
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

        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
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
          </div>
          {/* Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-border flex items-center gap-4 max-w-[240px]">
            <div className="bg-primary/10 p-3 rounded-full">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-xs text-muted-foreground">Siswa Berhasil Nilai 90+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
