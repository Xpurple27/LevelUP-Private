
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const logoData = PlaceHolderImages.find(img => img.id === 'site-logo');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: pathname === '/' ? '#about' : '/#about' },
    { name: 'Layanan', href: pathname === '/' ? '#services' : '/#services' },
    { name: 'Profil', href: '/tutors' },
    { name: 'Biaya', href: pathname === '/' ? '#pricing' : '/#pricing' },
    { name: 'FAQ', href: pathname === '/' ? '#faq' : '/#faq' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled || pathname !== '/' ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {logoData?.imageUrl ? (
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <Image 
                src="/Levelupnewlogo.jpeg"
                alt="Level Up Logo" 
                fill 
                className="object-contain"
              />
            </div>
          ) : (
            <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Zap className="h-6 w-6 text-white" />
            </div>
          )}
          <span className="text-xl font-bold font-headline tracking-tight text-slate-900">
            Level<span className="text-primary">Up</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold transition-colors hover:text-primary relative py-2 group",
                pathname === link.href ? "text-primary" : "text-slate-600"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform origin-left duration-300",
                pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
          ))}
          <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/20">
            <Link href={pathname === '/' ? '#contact' : '/#contact'}>Daftar Sekarang</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg bg-slate-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-bold py-3 border-b border-slate-50",
                  pathname === link.href ? "text-primary" : "text-slate-900"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full rounded-full py-6 text-lg mt-4" onClick={() => setIsOpen(false)}>
              <Link href={pathname === '/' ? '#contact' : '/#contact'}>Daftar Sekarang</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
