
import React from 'react';
import { Trophy, TrendingUp, GraduationCap, Users, Image as ImageIcon } from 'lucide-react';

export function Results() {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      value: "85%",
      label: "Rata-rata Kenaikan Nilai"
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      value: "150+",
      label: "Siswa Lolos PTN Impian"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "1000+",
      label: "Sesi Belajar Per Tahun"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      value: "95/100",
      label: "Rata-rata Nilai Akhir"
    }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline uppercase tracking-widest">Bukti Nyata Prestasi</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Keberhasilan siswa adalah prioritas utama kami. Berikut adalah capaian yang telah kami raih bersama.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 transition-transform hover:scale-105">
              <div className="bg-white p-4 rounded-2xl mb-6 shadow-lg">
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</p>
              <p className="text-sm font-medium text-primary-foreground/90 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          <div className="text-foreground">
            <h3 className="text-2xl font-bold mb-4 text-primary">Case Study: Transformasi UTBK</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Salah satu siswa kami mengawali persiapan UTBK dengan skor Try Out Matematika 450. Setelah program intensif 3 bulan bersama Math Spark, skor UTBK aslinya melejit hingga 780, mengantarkannya ke program studi Kedokteran.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '92%' }}></div>
              </div>
              <span className="font-bold text-primary whitespace-nowrap">Goal Achieved!</span>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-border group">
             <img 
              src="https://picsum.photos/seed/results-graph/600/400" 
              alt="Result Comparison" 
              className="w-full h-full object-cover"
              data-ai-hint="data chart"
            />
            {/* Photo Guide Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center text-white">
              <ImageIcon className="h-8 w-8 mb-3" />
              <p className="font-bold mb-1">Rekomendasi Konten</p>
              <p className="text-xs">Gunakan grafik kenaikan nilai asli atau foto lembar hasil ujian siswa yang menunjukkan skor tinggi (bisa disamarkan identitasnya).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
