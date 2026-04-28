
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MapPin, Globe, Rocket, Monitor } from 'lucide-react';

export function Services() {
  const levels = [
    {
      title: "Private SMP",
      desc: "Fokus pada penguatan konsep dasar, persiapan Ujian Sekolah, dan olimpiade tingkat SMP.",
      icon: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      title: "Private SMA",
      desc: "Materi kurikulum terbaru, persiapan PTS/PAS, dan penguatan untuk peminatan IPA.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />
    },
    {
      title: "Intensif UTBK",
      desc: "Strategi cepat menjawab soal, bedah soal 10 tahun terakhir, dan simulasi rutin.",
      icon: <Rocket className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline tracking-tight">Layanan Kami</h2>
            <p className="text-muted-foreground text-lg">
              Program bimbingan yang dirancang khusus untuk memenuhi kebutuhan akademik setiap jenjang pendidikan.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-sm font-medium bg-white px-4 py-2 rounded-full shadow-sm">
              <Monitor className="h-4 w-4 text-primary" />
              Kelas Online
            </div>
            <div className="flex items-center gap-2 text-sm font-medium bg-white px-4 py-2 rounded-full shadow-sm">
              <MapPin className="h-4 w-4 text-primary" />
              Offline (Jabodetabek)
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, idx) => (
            <Card key={idx} className="group relative overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <CardHeader className="pt-10">
                <div className="mb-4 bg-primary/5 w-fit p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  {React.cloneElement(level.icon as React.ReactElement, { className: 'h-8 w-8 transition-colors' })}
                </div>
                <CardTitle className="text-2xl font-bold">{level.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {level.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Materi Custom</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Latihan Soal Berkala</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle, BookOpen, GraduationCap } from 'lucide-react';
