
import React from 'react';
import { Brain, Headphones, PenTool, Layout } from 'lucide-react';

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline leading-tight">Mengapa Harus Belajar di <span className="text-primary">Math Spark?</span></h2>
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
                alt="Advantages of Math Spark" 
                className="rounded-[2.4rem] w-full object-cover aspect-square"
                data-ai-hint="student study"
              />
            </div>
            <div className="absolute top-10 -right-8 bg-primary text-white p-6 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
              <p className="text-xs uppercase font-bold tracking-widest mb-1">Success Rate</p>
              <p className="text-4xl font-extrabold">98%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
