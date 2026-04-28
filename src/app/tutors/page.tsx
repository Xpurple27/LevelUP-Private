
'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Star,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TutorsPage() {
  const tutorImage = PlaceHolderImages.find(img => img.id === 'hero-tutor')?.imageUrl || "/fototutor.jpg";

  const profile = {
    name: "Muhammad Wafiq Afansa, S.Mat.",
    title: "Lead Mathematics Tutor",
    location: "Banda Aceh, Indonesia",
    email: "afansa27@gmail.com",
    phone: "082369290805",
    summary: "Seorang pengajar matematika yang berdedikasi dengan pengalaman lebih dari 5 tahun dalam membimbing siswa tingkat SD, SMP, SMA, dan persiapan masuk Perguruan Tinggi Negeri. Spesialis dalam mengajar murid-murid dari sekolah unggulan dengan pendekatan logika yang kuat.",
    education: [
      {
        degree: "Sarjana Matematika",
        institution: "Universitas Syiah Kuala",
        year: "2018 - 2023",
        description: "Lulusan FMIPA Matematika Universitas Syiah Kuala. Fokus pada pemahaman konsep mendalam dan analisis matematika."
      }
    ],
    experience: [
      {
        role: "Lead Tutor",
        company: "Level Up Privat",
        year: "2024 - Sekarang",
        description: "Mengembangkan kurikulum belajar mandiri dan mengajar secara online maupun offline."
      },
      {
        role: "Senior Math Instructor",
        company: "Bimbel Terkemuka & Private Sekolah Unggulan",
        year: "2019 - 2026",
        description: "Bertanggung jawab atas kelas dari SD hingga persiapan UTBK dan olimpiade bagi siswa-siswa berprestasi dari sekolah unggulan."
      },
      {
        role: "Asisten Dosen / Tutor Sebaya",
        company: "FMIPA Universitas Syiah Kuala",
        year: "2019 - 2021",
        description: "Menjadi asisten lab Numerik dan Etnomatematika di lingkungan kampus."
      },
      {
        role : "Pembina Pramuka",
        company : "MTsN Model Banda Aceh",
        year : "2019 - 2023",
        description : "Mendidik serta membina peserta didik dengan nilai nilai pramuka seperti Tri Satya dan Dasa Darma",
      }
    ],
    skills: [
      "Kalkulus (Turunan & Integral)",
      "Statistika & Peluang",
      "Geometri Analitik",
      "Trigonometri",
      "Persiapan UTBK/SBMPTN",
      "Matlab"
    ],
    certifications: [
      "Excel Skill for Business at Macquarie University Australia 2023",
      "Linear Algebra for Machine Learning and Data Science at DeepLearning AI 2023",
      "Database and SQL for Data Science with Pyhton 2024"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-xl overflow-hidden rounded-[2rem] bg-white mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative aspect-[4/5] md:aspect-auto">
                <Image 
                  src={tutorImage} 
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary/10 text-primary border-none py-1 px-3 text-xs">Available for Private Classes</Badge>
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-slate-900 leading-tight">{profile.name}</h1>
                <p className="text-lg sm:text-xl text-primary font-semibold mb-6">{profile.title}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <span className="truncate">{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary shrink-0" />
                    <span>5.0 Rating dari Siswa</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="rounded-full px-8 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    <a href="https://wa.me/6282369290805" target="_blank" rel="noopener noreferrer">Pesan Sesi Belajar</a>
                  </Button>
                  <Button variant="outline" className="rounded-full px-8 border-primary text-primary w-full sm:w-auto">Download Portfolio</Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <Card className="border-none shadow-lg rounded-[2rem] bg-white p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Tentang Saya
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm italic">
                  "{profile.summary}"
                </p>
              </Card>

              <Card className="border-none shadow-lg rounded-[2rem] bg-white p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Keahlian Utama
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors py-1.5 px-3 rounded-full border-none text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="border-none shadow-lg rounded-[2rem] bg-white p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Sertifikasi
                </h3>
                <ul className="space-y-4">
                  {profile.certifications.map((cert, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600">
                      <div className="bg-primary/10 p-1 h-fit rounded-full shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <Card className="border-none shadow-lg rounded-[2rem] bg-white p-6 sm:p-10 lg:p-12">
                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Pengalaman Mengajar
                </h3>
                <div className="space-y-12">
                  {profile.experience.map((exp, i) => (
                    <div key={i} className="relative pl-6 sm:pl-8 border-l-2 border-slate-100 last:border-0 pb-2">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h4 className="text-lg font-bold text-slate-900">{exp.role}</h4>
                        <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full w-fit">{exp.year}</span>
                      </div>
                      <p className="text-primary font-medium mb-3 text-sm">{exp.company}</p>
                      <p className="text-slate-600 leading-relaxed text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="border-none shadow-lg rounded-[2rem] bg-white p-6 sm:p-10 lg:p-12">
                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Pendidikan
                </h3>
                <div className="space-y-6">
                  {profile.education.map((edu, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                        <span className="text-xs font-medium text-slate-500">{edu.year}</span>
                      </div>
                      <p className="text-primary font-semibold mb-4 text-sm">{edu.institution}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
