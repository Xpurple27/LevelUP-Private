
import React from 'react';
import { Brain, Headphones, PenTool, Layout, Image as ImageIcon } from 'lucide-react';

export function Advantages() {
  const points = [
    {
      title: "Metode Step-by-Step",
      desc: "Alur belajar terstruktur dari yang termudah hingga kompleks tanpa membuat bingung.",
      icon: <PenTool className="h-6 w-6" />
    },
    {
      title: "Fokus Konsep",
      desc: "Bukan sekadar rumus cepat, tapi pemahaman mengapa rumus itu ada agar ingatan permanen.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Support 24/7",
      desc: "Ada PR sulit di jam 9 malam? Chat tutor langsung untuk bantuan cepat.",
      icon: <Headphones className="h-6 w-6" />
    },
    {
      title: "Modul Custom",
      desc: "Setiap siswa mendapat bank soal yang berbeda sesuai kelemahan masing-masing.",
      icon: <Layout className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline leading-tight">Mengapa Harus Belajar di <span className="text-primary">Level Up?</span></h2>
            <p className="text-lg text-muted-foreground mb-10">
              Kami tidak hanya memberikan jawaban, tapi memberikan cara berpikir. Inilah keunggulan yang membuat siswa kami betah dan berprestasi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-xl">
                    {point.icon}
                  </div>
                  <h4 className="font-bold text-lg">{point.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all"></div>
            <div className="relative bg-white p-1 rounded-[2.5rem] shadow-2xl overflow-hidden border">
              <img 
                src="https://picsum.photos/seed/math-adv/800/800" 
                alt="Advantages of Level Up" 
                className="rounded-[2.4rem] w-full object-cover aspect-square"
                data-ai-hint="student study"
              />
              {/* Photo Guide Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center text-white">
                <ImageIcon className="h-10 w-10 mb-4" />
                <p className="font-bold text-lg mb-2">Rekomendasi Foto</p>
                <p className="text-sm">Gunakan foto interaksi nyata antara tutor dan siswa yang sedang berdiskusi dengan antusias di depan papan tulis atau meja belajar.</p>
              </div>
            </div>
            <div className="absolute top-10 -right-8 bg-primary text-white p-6 rounded-2xl shadow-xl animate-bounce [animation-duration:3s]">
              <p className="text-xs uppercase font-bold tracking-widest mb-1">Success Rate</p>
              <p className="text-4xl font-extrabold">98%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
