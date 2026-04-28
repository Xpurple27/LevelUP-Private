
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, UserCheck, Heart } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <div className="mt-16 p-8 rounded-3xl bg-primary text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">"Semua orang bisa matematika, asal tahu pintunya."</h3>
            <p className="text-primary-foreground/90">
              Saya percaya bahwa kesulitan belajar matematika seringkali bukan karena kurangnya kemampuan, melainkan karena cara penyampaian yang terlalu abstrak. Di Math Spark, saya menjembatani konsep sulit menjadi bahasa yang mudah dicerna.
            </p>
          </div>
          <div className="bg-white/20 px-8 py-4 rounded-2xl backdrop-blur-sm text-center">
            <p className="text-3xl font-bold">100%</p>
            <p className="text-sm font-medium">Dedikasi untuk Siswa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
