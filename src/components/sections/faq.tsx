
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Apakah kelas online seefektif kelas tatap muka?",
      a: "Tentu! Kami menggunakan platform interaktif (pen tablet & whiteboard online) sehingga siswa bisa melihat proses pengerjaan soal secara real-time. Efektivitasnya sama dengan tatap muka langsung."
    },
    {
      q: "Bagaimana jika siswa merasa sangat kesulitan dengan dasar matematika?",
      a: "Jangan khawatir. Kami akan melakukan placement test di awal untuk mengetahui di mana letak kelemahannya, lalu kami akan memperkuat dasar tersebut sebelum masuk ke materi yang lebih sulit."
    },
    {
      q: "Bagaimana sistem pembayarannya?",
      a: "Pembayaran dilakukan di awal setiap paket melalui transfer bank. Kami menyediakan invoice resmi dan laporan kehadiran untuk setiap sesi."
    },
    {
      q: "Apakah jadwal belajarnya fleksibel?",
      a: "Ya, jadwal ditentukan berdasarkan kesepakatan antara siswa dan tutor. Jika ada kendala mendadak, jadwal bisa di-reschedule dengan pemberitahuan minimal 24 jam sebelumnya."
    },
    {
      q: "Area mana saja yang tercover untuk les offline?",
      a: "Saat ini kami melayani bimbingan belajar offline untuk seluruh area Kota Banda Aceh dan sekitarnya. Untuk area lain, silakan konsultasikan lebih lanjut."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline uppercase tracking-tight">Ada Pertanyaan?</h2>
          <p className="text-muted-foreground">
            Temukan jawaban untuk pertanyaan yang paling sering diajukan oleh calon siswa.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border/50 py-2">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
