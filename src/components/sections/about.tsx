
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, UserCheck, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function About() {
  const experiences = [
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Latar Belakang",
      desc: "Lulusan Matematika Murni dari Universitas Terkemuka dengan predikat Cum Laude."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Pengalaman Mengajar",
      desc: "5+ Tahun pengalaman di Bimbel ternama & Asisten Laboratorium Komputasi."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-primary" />,
      title: "Pendekatan Personal",
      desc: "Menganalisis gaya belajar tiap siswa untuk materi yang disesuaikan."
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Filosofi Mengajar",
      desc: "Matematika bukan hafalan rumus, tapi logika berpikir yang menyenangkan."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline uppercase tracking-wide">Profil Tutor</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Kenali lebih dekat sosok yang akan membimbingmu menaklukkan tantangan matematika.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {experiences.map((item, idx) => (
            <Card key={idx} className="border-none bg-background shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 text-center flex flex-col items-center">
                <div className="mb-6 p-4 bg-primary/5 rounded-full ring-1 ring-primary/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-primary text-white flex flex-col md:flex-row items-center gap-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="flex-1 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">"Semua orang bisa matematika, asal tahu pintunya."</h3>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Saya percaya bahwa kesulitan belajar matematika seringkali bukan karena kurangnya kemampuan, melainkan karena cara penyampaian yang terlalu abstrak.
            </p>
            <Button asChild variant="secondary" className="rounded-full px-8 py-6 text-primary font-bold hover:bg-white group">
              <Link href="/tutors">
                Kenali Saya Lebih Dalam
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="bg-white/20 px-10 py-6 rounded-2xl backdrop-blur-sm text-center relative z-10 border border-white/20">
            <p className="text-4xl font-extrabold mb-1">100%</p>
            <p className="text-xs font-bold uppercase tracking-widest">Dedikasi Siswa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
