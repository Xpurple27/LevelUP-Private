
import React from 'react';
import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function Pricing() {
  const packages = [
    {
      name: "Starter Package",
      price: "150rb",
      unit: "/sesi",
      desc: "Sesuai untuk konsultasi PR atau materi spesifik yang sulit.",
      features: ["Durasi 90 Menit", "1 Sesi Belajar", "Materi Custom", "Tanya Jawab WA 24/7"],
      isPopular: false
    },
    {
      name: "Monthly Regular",
      price: "1.1jt",
      unit: "/bulan",
      desc: "Paket hemat untuk pemantauan belajar rutin setiap minggu.",
      features: ["Durasi 90 Menit", "8 Sesi (2x seminggu)", "Free Try Out Bulanan", "Laporan Perkembangan", "Materi Pendalaman"],
      isPopular: true
    },
    {
      name: "Intensif UTBK",
      price: "2.5jt",
      unit: "/program",
      desc: "Persiapan matang untuk menghadapi seleksi masuk PTN.",
      features: ["20 Sesi Intensif", "Bank Soal 10 Tahun", "Simulasi Skor IRT", "Tips & Trik Cepat", "Konsultasi Jurusan"],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline uppercase tracking-tight">Investasi Pendidikan</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pilih paket yang paling sesuai dengan kebutuhan dan target akademikmu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <Card key={idx} className={cn(
              "relative border-2 transition-all duration-300 rounded-[2rem] overflow-hidden flex flex-col h-full",
              pkg.isPopular ? "border-primary shadow-2xl lg:scale-105 z-10 bg-white" : "border-border shadow-md"
            )}>
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl">
                  Best Value
                </div>
              )}
              <CardHeader className="pt-10 px-6 md:px-8">
                <CardTitle className="text-xl font-bold mb-2 uppercase tracking-wide">{pkg.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm">{pkg.unit}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed italic">{pkg.desc}</p>
              </CardHeader>
              <CardContent className="px-6 md:px-8 pt-8 flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm">
                      <div className="bg-primary/10 p-1 rounded-full shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 md:px-8 pb-10 pt-8 mt-auto">
                <Button className={cn(
                  "w-full rounded-full py-6 text-md font-bold transition-all",
                  pkg.isPopular ? "bg-primary text-white shadow-lg hover:shadow-primary/20" : "bg-white border-primary border-2 text-primary hover:bg-primary/5"
                )} asChild>
                  <a href={`https://wa.me/628123456789?text=Halo%20MathSpark,%20saya%20ingin%20daftar%20paket%20${pkg.name}`}>
                    Pilih Paket Ini
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex items-start md:items-center justify-center gap-4 p-5 md:p-4 bg-primary/5 rounded-2xl max-w-2xl mx-auto border border-primary/10">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5 md:mt-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Harga dapat bervariasi tergantung lokasi (untuk sesi offline) dan jumlah siswa dalam satu kelompok. Hubungi kami untuk penawaran kelompok (2-3 orang).
          </p>
        </div>
      </div>
    </section>
  );
}
