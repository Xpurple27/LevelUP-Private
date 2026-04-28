
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

export default function TutorsPage() {
  const profile = {
    name: "Arya Wijaya, S.Si.",
    title: "Lead Mathematics Tutor & Curriculum Designer",
    location: "Jakarta, Indonesia",
    email: "arya@mathspark.id",
    phone: "+62 812-3456-789",
    summary: "Seorang pengajar matematika yang berdedikasi dengan pengalaman lebih dari 5 tahun dalam membimbing siswa tingkat SMP, SMA, dan persiapan masuk Perguruan Tinggi Negeri. Spesialis dalam penyederhanaan konsep kalkulus dan aljabar melalui metode visual dan logika terapan.",
    education: [
      {
        degree: "Sarjana Sains (S.Si.) Matematika",
        institution: "Universitas Indonesia",
        year: "2015 - 2019",
        description: "Lulus dengan predikat Cum Laude. Fokus pada Matematika Terapan dan Komputasi."
      }
    ],
    experience: [
      {
        role: "Lead Tutor",
        company: "Math Spark",
        year: "2020 - Sekarang",
        description: "Mengembangkan kurikulum belajar mandiri dan mengajar lebih dari 500 siswa secara online maupun offline."
      },
      {
        role: "Senior Math Instructor",
        company: "Bimbel Terkemuka Nasional",
        year: "2019 - 2020",
        description: "Bertanggung jawab atas kelas persiapan UTBK khusus bidang studi Matematika IPA."
      },
      {
        role: "Asisten Dosen Kalkulus",
        company: "Departemen Matematika UI",
        year: "2017 - 2019",
        description: "Membimbing mahasiswa tingkat pertama dalam memahami konsep dasar kalkulus dan analisis real."
      }
    ],
    skills: [
      "Kalkulus (Turunan & Integral)",
      "Statistika & Peluang",
      "Geometri Analitik",
      "Trigonometri",
      "Persiapan UTBK/SBMPTN",
      "Olimpiade Matematika (OSN)"
    ],
    certifications: [
      "Certified Professional Teacher - Kemendikbud",
      "Outstanding Instructor Award 2022",
      "Advanced Statistics Certification - Coursera"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Card */}
          <Card className="border-none shadow-xl overflow-hidden rounded-[2rem] bg-white mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative aspect-[4/5] md:aspect-auto">
                <Image 
                  src="https://picsum.photos/seed/math-tutor/600/800" 
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary/10 text-primary border-none py-1 px-3">Available for Private Classes</Badge>
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
                    <a href="https://wa.me/628123456789">Pesan Sesi Belajar</a>
                  </Button>
                  <Button variant="outline" className="rounded-full px-8 border-primary text-primary w-full sm:w-auto">Download Portfolio</Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Summary & Skills */}
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

            {/* Right Column: Experience & Education */}
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
