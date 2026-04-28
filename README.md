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
   Jika muncul error `remote origin already exists`, gunakan perintah `set-url` di langkah ke-3.

3. **Update URL dengan Token**: 
   Masuk ke GitHub Settings > Developer Settings > Personal Access Tokens (classic). Buat token dengan akses 'repo'. Lalu jalankan:
   
   `git remote set-url origin https://TOKEN_ANDA@github.com/Xpurple27/LevelUP-Private.git`

4. **Simpan Perubahan (Stage & Commit)**:
   ```bash
   git add .
   git commit -m "Update: Deskripsi perubahan Anda"
   ```

5. **Kirim ke Git (Push)**:
   ```bash
   git push -u origin main
   ```

### Troubleshooting: Remote Origin Already Exists
Jika Anda melihat pesan ini, berarti remote sudah terkonfigurasi. Jangan gunakan `git remote add`, tapi gunakan:
`git remote set-url origin https://TOKEN_ANDA@github.com/Xpurple27/LevelUP-Private.git`

---
© 2024 Level Up. All rights reserved.
