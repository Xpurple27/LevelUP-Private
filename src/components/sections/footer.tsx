
import React from 'react';
import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold font-headline">
              Math<span className="text-primary">Spark</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground font-medium">
            <a href="#about" className="hover:text-primary transition-colors">Tentang</a>
            <a href="#services" className="hover:text-primary transition-colors">Layanan</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Math Spark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
