# Level Up - Private Matematika

Bimbingan belajar matematika private yang fokus pada pemahaman konsep dan kenaikan nilai yang signifikan.

## 📁 Struktur Folder Utama
- **`/public`**: Tempat menyimpan logo, foto, dan aset gambar lokal. (Buat folder ini di root jika belum ada).
- **`/src/app`**: Berisi halaman website dan routing.
- **`/src/components`**: Berisi komponen UI (Navbar, Hero, Section, dll).
- **`package.json`**: Pengaturan proyek dan dependensi.

## 🖼️ Cara Menggunakan Foto Lokal (Upload Manual)
1. **Upload File**: Seret (drag) file gambar dari komputer Anda ke folder **`public/`** di panel file sebelah kiri.
2. **Konfigurasi**: Buka file `src/app/lib/placeholder-images.json`.
3. **Update Path**: Ganti `imageUrl` menjadi path file tersebut, diawali dengan garis miring. 
   - Contoh: Jika foto ada di `public/logo-saya.png`, maka isi `imageUrl` dengan `"/logo-saya.png"`.

## 🚀 Cara Pengembangan Secara Lokal
1. Jalankan `npm install`
2. Jalankan `npm run dev`
3. Buka `http://localhost:9002`

## 📤 Cara Push ke Git & Deploy (GitHub)
1. **Reset Remote (Jika error)**:
   `git remote set-url origin https://TOKEN_ANDA@github.com/Xpurple27/LevelUP-Private.git`
2. **Simpan & Push**:
   ```bash
   git add .
   git commit -m "Update: Perubahan terbaru"
   git push -u origin main
   ```

---
© 2024 Level Up. All rights reserved.