# Level Up - Private Matematika

Bimbingan belajar matematika private yang fokus pada pemahaman konsep dan kenaikan nilai yang signifikan.

## Teknologi yang Digunakan
- **Next.js 15 (App Router)**
- **Tailwind CSS**
- **ShadCN UI**
- **Lucide Icons**
- **Firebase** (Siap integrasi)

## Cara Menggunakan Foto Lokal
Jika Anda ingin menggunakan foto sendiri tanpa URL internet:
1. Unggah file gambar Anda ke folder **`public/`** di proyek ini.
2. Buka file `src/app/lib/placeholder-images.json`.
3. Ganti `imageUrl` menjadi path file tersebut, diawali dengan garis miring. 
   - Contoh: Jika foto ada di `public/logo-saya.png`, maka isi `imageUrl` dengan `"/logo-saya.png"`.

## Cara Mengembangkan Secara Lokal
1. Jalankan `npm install`
2. Jalankan `npm run dev`
3. Buka `http://localhost:9002`

## Cara Push ke Git & Deploy (Vercel/GitHub)
1. **Inisialisasi Git**: `git init`
2. **Hubungkan ke Repository**: 
   `git remote add origin https://TOKEN_ANDA@github.com/Xpurple27/LevelUP-Private.git`
   *Jika sudah ada, gunakan:* `git remote set-url origin ...`
3. **Simpan & Push**:
   ```bash
   git add .
   git commit -m "Update: Deskripsi perubahan"
   git push -u origin main
   ```

---
© 2024 Level Up. All rights reserved.
