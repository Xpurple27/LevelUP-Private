
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Testimonials() {
  const reviews = [
    {
      name: "Budi Santoso",
      class: "Kelas 12 SMA",
      result: "UTBK 2023 - Lolos ITB",
      avatarId: "avatar-1",
      comment: "Dulu paling benci matematika karena rumit banget. Sejak belajar di Math Spark, saya jadi paham logikanya. Belajar jadi seru!"
    },
    {
      name: "Siska Amelia",
      class: "Kelas 9 SMP",
      result: "Nilai US 60 -> 95",
      avatarId: "avatar-2",
      comment: "Penjelasan tutor sangat sabar. Kalau belum ngerti diulang sampai paham beneran. Modul soalnya juga pas banget sama yang keluar di ujian."
    },
    {
      name: "Andi Wijaya",
      class: "Kelas 11 SMA",
      result: "Ranking 1 Pararel",
      avatarId: "avatar-3",
      comment: "Math Spark ngebantu banget pas mau persiapan olimpiade. Cara ngerjainnya simpel dan nggak kaku. Rekomen banget!"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 text-primary/5 -z-10">
        <Quote className="h-64 w-64 rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline uppercase tracking-tight">Suara Siswa & Orang Tua</h2>
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => {
            const avatarImg = PlaceHolderImages.find(img => img.id === review.avatarId);
            return (
              <Card key={idx} className="border-none shadow-xl bg-background rounded-[2rem] p-4">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-14 w-14 border-2 border-primary/20">
                      <AvatarImage src={avatarImg?.imageUrl} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.class}</p>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-xl mb-6">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{review.result}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
