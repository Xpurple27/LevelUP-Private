
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Mail, ArrowRight, Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Contact() {
  const contactImg = PlaceHolderImages.find(img => img.id === 'contact-img')?.imageUrl || "/math.png";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-border">
          <div className="lg:col-span-3 p-8 md:p-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="h-3 w-3" />
              <span>Slot Terbatas Setiap Bulan</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-headline tracking-tight leading-tight">
              Siap Raih Nilai <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-8">Matematika 90+?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Jangan tunda kesuksesanmu. Ambil langkah pertama hari ini untuk masa depan akademik yang lebih cerah.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="rounded-full px-10 py-7 text-lg group bg-primary hover:bg-primary/90" asChild>
                <a href="https://wa.me/6282369290805" target="_blank" rel="noopener noreferrer">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg border-2 border-primary text-primary hover:bg-primary/5" asChild>
                <a href="https://wa.me/6282369290805?text=Halo%20LevelUp,%20saya%20mau%20konsultasi%20dulu" target="_blank" rel="noopener noreferrer">
                  Chat WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-background p-3 rounded-full border border-border group-hover:bg-primary group-hover:text-white transition-all">
                  <Instagram className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">@levelupprivate</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-background p-3 rounded-full border border-border group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">afansa27@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative min-h-[400px]">
            <img 
              src={contactImg} 
              alt="Ready to learn" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12 text-white z-10">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <p className="text-lg font-bold mb-1 italic">"The only way to learn mathematics is to do mathematics."</p>
                <p className="text-sm opacity-80">— Paul Halmos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
