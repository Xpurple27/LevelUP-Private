
import React from 'react';
import Image from 'next/image';
import { Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logoData = PlaceHolderImages.find(img => img.id === 'site-logo');

  return (
    <footer className="py-12 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            {logoData?.imageUrl ? (
              <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <Image 
                  src={logoData.imageUrl} 
                  alt="Level Up Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="bg-primary p-2 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
            )}
            <span className="text-lg font-bold font-headline">
              Level<span className="text-primary">Up</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground font-medium">
            <a href="#about" className="hover:text-primary transition-colors">Tentang</a>
            <a href="#services" className="hover:text-primary transition-colors">Layanan</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Level Up. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
