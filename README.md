# Level Up - Private Matematika

Bimbingan belajar matematika private yang fokus pada pemahaman konsep dan kenaikan nilai yang signifikan.

## Teknologi yang Digunakan
- **Next.js 15 (App Router)**
- **Tailwind CSS**
- **ShadCN UI**
- **Lucide Icons**
- **Firebase** (Siap integrasi)

## Cara Mengembangkan Secara Lokal
1. Jalankan `npm install`
2. Jalankan `npm run dev`
3. Buka `http://localhost:9002`

## Cara Push ke Git & Deploy (Vercel/GitHub)
Jika Anda menggunakan Firebase Studio dan ingin menghubungkannya ke repositori Git Anda:

1. **Inisialisasi Git** (hanya jika folder .git belum ada):
   ```bash
   git init
   ```

2. **Hubungkan ke Repository Anda**:
   Ganti URL di bawah dengan URL repository GitHub Anda.
   ```bash
   git remote add origin <URL_REPOSITORY_ANDA>
   ```

3. **Simpan Perubahan (Stage & Commit)**:
   ```bash
   git add .
   git commit -m "Update: Mengganti nama brand ke Level Up dan perbaikan UI"
   ```

4. **Kirim ke Git (Push)**:
   ```bash
   git push -u origin main
   ```

5. **Deployment**:
   Hubungkan akun Vercel Anda ke repositori GitHub tersebut. Vercel akan secara otomatis melakukan build setiap kali Anda melakukan `git push`.

---
© 2024 Level Up. All rights reserved.
