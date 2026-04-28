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

1. **Inisialisasi Git**:
   ```bash
   git init
   ```

2. **Hubungkan ke Repository**:
   ```bash
   git remote add origin https://github.com/Xpurple27/LevelUP-Private.git
   ```

3. **Simpan Perubahan (Stage & Commit)**:
   ```bash
   git add .
   git commit -m "Update: Deskripsi perubahan Anda"
   ```

4. **Kirim ke Git (Push)**:
   ```bash
   git push -u origin main
   ```

### Troubleshooting: Authentication Failed / No Such File
Jika muncul error saat push, itu karena GitHub meminta **Personal Access Token (PAT)**.
1. Buat Token di: GitHub Settings > Developer Settings > Personal Access Tokens (classic).
2. Beri akses 'repo'.
3. **PENTING**: Jalankan perintah ini di terminal (Ganti `TOKEN_ANDA` dengan token asli, **JANGAN** gunakan tanda kurung `< >`):
   
   `git remote set-url origin https://TOKEN_ANDA_DISINI@github.com/Xpurple27/LevelUP-Private.git`

4. Ulangi perintah `git push -u origin main`.

---
© 2024 Level Up. All rights reserved.
