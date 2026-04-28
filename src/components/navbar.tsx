
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    { name: 'Tim Pengajar', href: '/tutors' },
    { name: 'Biaya', href: pathname === '/' ? '#pricing' : '/#pricing' },
    { name: 'FAQ', href: pathname === '/' ? '#faq' : '/#faq' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled || pathname !== '/' ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <span className={cn(
            "text-xl font-bold font-headline tracking-tight",
            scrolled || pathname !== '/' ? "text-slate-900" : "text-slate-900"
          )}>
            Math<span className="text-primary">Spark</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="rounded-full px-6">
            <Link href={pathname === '/' ? '#contact' : '/#contact'}>Daftar Sekarang</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium py-2 border-b border-border",
                  pathname === link.href ? "text-primary" : "text-slate-900"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full rounded-full" onClick={() => setIsOpen(false)}>
              <Link href={pathname === '/' ? '#contact' : '/#contact'}>Daftar Sekarang</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
