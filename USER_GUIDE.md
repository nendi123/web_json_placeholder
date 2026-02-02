# User Guide - SPA Manajemen Blog

## 📖 Panduan Pengguna Lengkap

Selamat datang di aplikasi Manajemen Blog! Panduan ini akan membantu Anda memahami dan menggunakan semua fitur yang tersedia.

---

## 🚀 Getting Started

### Membuka Aplikasi

1. Buka browser web Anda (Chrome, Firefox, Safari, atau Edge)
2. Akses URL aplikasi:
   - Development: `http://localhost:3000`
   - Production: `[URL production Anda]`

### Tampilan Awal

Saat aplikasi pertama kali dibuka, Anda akan melihat:
- **Loading Spinner** - Sementara data dimuat dari server
- **Notification** - Pesan "Data berhasil dimuat!" (hijau)
- **Dashboard** - Menampilkan 12 postingan blog dalam bentuk grid

---

## 🎛 Fitur & Cara Penggunaan

### 1. MEMBACA POSTINGAN (READ)

#### Melihat Daftar Postingan

**Tampilan Grid (Default):**
- Postingan ditampilkan dalam bentuk kartu
- Desktop: 4 kolom
- Tablet: 2-3 kolom
- Mobile: 1 kolom

**Informasi yang Ditampilkan:**
- 🆔 ID Post (badge biru)
- 👤 User ID (pojok kanan atas)
- 📝 Judul post (bold, capitalize)
- 📄 Konten post (preview 3 baris)
- ✏️ Tombol Edit (kuning)
- 🗑️ Tombol Hapus (merah)

#### Mengubah Tampilan

**Desktop:**
1. Lihat navbar (bagian atas)
2. Temukan toggle view mode di sebelah tombol "Tambah Post"
3. Klik icon **Grid** (4 kotak) untuk tampilan grid
4. Klik icon **List** (3 garis) untuk tampilan list

**Tampilan List:**
- Postingan ditampilkan horizontal
- Informasi lebih lengkap
- Cocok untuk membaca cepat

---

### 2. MENAMBAH POSTINGAN (CREATE)

#### Langkah-langkah:

**Step 1: Buka Form**
1. Klik tombol **"Tambah Post"** di navbar (biru)
2. Modal form akan terbuka

**Step 2: Isi Form**

Form berisi 3 field:

1. **Judul Post** (Required)
   - Ketik judul postingan Anda
   - Contoh: "Tutorial React untuk Pemula"
   - Wajib diisi (marked dengan *)

2. **Konten Post** (Required)
   - Ketik isi postingan Anda
   - Bisa multi-paragraf
   - Wajib diisi (marked dengan *)

3. **User ID** (Optional)
   - Default: 1
   - Bisa diubah (1-10)

**Step 3: Simpan**
1. Klik tombol **"Simpan Post"** (biru)
2. Button akan menampilkan loading spinner
3. Post langsung muncul di bagian atas list
4. Notification hijau: "Post berhasil ditambahkan!"
5. Form tertutup otomatis

#### Tips:
- ✅ Post akan langsung muncul (tidak perlu refresh)
- ✅ Jika gagal, post akan dihapus otomatis
- ✅ Anda akan melihat notifikasi error jika gagal

---

### 3. MENGEDIT POSTINGAN (UPDATE)

#### Langkah-langkah:

**Step 1: Pilih Post**
1. Cari post yang ingin diedit
2. Klik tombol **"Edit"** (kuning) pada post tersebut

**Step 2: Edit Data**
1. Form akan terbuka dengan data yang sudah ada
2. Ubah **Judul** atau **Konten** sesuai keinginan
3. User ID juga bisa diubah

**Step 3: Simpan Perubahan**
1. Klik tombol **"Update Post"** (biru)
2. Perubahan langsung terlihat di list
3. Notification hijau: "Post berhasil diupdate!"

#### Membatalkan Edit:
- Klik tombol **"Batal"** (abu-abu)
- Atau klik **X** di pojok kanan atas
- Data tidak akan berubah

---

### 4. MENGHAPUS POSTINGAN (DELETE)

#### Langkah-langkah:

**Step 1: Pilih Post**
1. Cari post yang ingin dihapus
2. Klik tombol **"Hapus"** (merah)

**Step 2: Konfirmasi**
1. Dialog konfirmasi akan muncul
2. Pesan: "Apakah Anda yakin ingin menghapus post ini?"
3. Klik **"OK"** untuk menghapus
4. Atau klik **"Cancel"** untuk membatalkan

**Step 3: Post Terhapus**
- Post langsung hilang dari list
- Notification hijau: "Post berhasil dihapus!"

#### Perhatian:
- ⚠️ Aksi ini tidak bisa di-undo
- ⚠️ Pastikan Anda benar-benar ingin menghapus

---

## 🎨 Fitur Tambahan

### Notifikasi

Aplikasi akan menampilkan notifikasi untuk setiap aksi:

**Jenis Notifikasi:**

1. **Success** (Hijau) ✅
   - "Data berhasil dimuat!"
   - "Post berhasil ditambahkan!"
   - "Post berhasil diupdate!"
   - "Post berhasil dihapus!"

2. **Error** (Merah) ❌
   - "Gagal memuat data..."
   - "Gagal menambahkan post..."
   - "Gagal mengupdate post..."
   - "Gagal menghapus post..."

**Karakteristik:**
- Muncul di pojok kanan atas
- Auto-close setelah 3 detik
- Bisa ditutup manual dengan klik X
- Slide-in animation

---

### Loading States

**Indikator Loading:**

1. **Initial Load**
   - Spinner besar di tengah halaman
   - Muncul saat pertama kali buka aplikasi

2. **Operation Load**
   - Button disabled
   - Spinner pada button
   - Text berubah: "Menyimpan..."

3. **Optimistic Update**
   - Perubahan langsung terlihat
   - Background process untuk API call

---

## 📱 Penggunaan di Mobile

### Navigasi Mobile

**Perbedaan dengan Desktop:**
- Toggle view mode tersembunyi (otomatis grid)
- Button lebih besar (touch-friendly)
- Form fullscreen
- Single column layout

### Tips Mobile:
- ✅ Scroll vertical untuk melihat semua post
- ✅ Tap button untuk aksi
- ✅ Pinch to zoom untuk baca detail (jika perlu)
- ✅ Landscape mode didukung

---

## ⌨️ Keyboard Shortcuts

### Navigasi:
- **Tab** - Navigate between elements
- **Enter** - Submit form / Activate button
- **Esc** - Close modal (future feature)

### Form:
- **Tab** - Jump to next field
- **Shift + Tab** - Jump to previous field
- **Enter** - Submit form

---

## 🔍 Troubleshooting

### Masalah Umum

#### 1. Post Tidak Muncul
**Kemungkinan:**
- Koneksi internet terputus
- API server down

**Solusi:**
- Cek koneksi internet
- Refresh halaman (F5)
- Tunggu beberapa saat

---

#### 2. Form Tidak Bisa Submit
**Kemungkinan:**
- Field belum lengkap
- Network error

**Solusi:**
- Pastikan semua field (*) terisi
- Cek koneksi internet
- Coba lagi setelah beberapa saat

---

#### 3. Loading Terus-menerus
**Kemungkinan:**
- Koneksi internet lambat
- API server slow

**Solusi:**
- Tunggu hingga selesai
- Refresh halaman jika > 30 detik
- Cek koneksi internet

---

#### 4. Notifikasi Error Muncul
**Yang Harus Dilakukan:**
- Baca pesan error
- Cek koneksi internet
- Coba lagi operasi tersebut
- Data Anda aman (auto-rollback)

---

## 💡 Tips & Best Practices

### Menulis Post yang Baik

1. **Judul:**
   - Jelas dan deskriptif
   - Tidak terlalu panjang (< 100 karakter ideal)
   - Capitalize first letter

2. **Konten:**
   - Gunakan paragraf untuk readability
   - Hindari terlalu panjang (split jika perlu)
   - Gunakan bahasa yang jelas

3. **Editing:**
   - Review sebelum submit
   - Edit jika ada kesalahan
   - Hapus jika tidak diperlukan

---

### Optimalisasi Pengalaman

1. **Gunakan Grid View:**
   - Lebih banyak post terlihat sekaligus
   - Cocok untuk browsing

2. **Gunakan List View:**
   - Lebih detail per post
   - Cocok untuk membaca

3. **Perhatikan Notifikasi:**
   - Selalu baca notifikasi
   - Konfirmasi aksi berhasil/gagal

---

## 📞 Bantuan & Support

### Pertanyaan Umum

**Q: Apakah data saya aman?**  
A: Data disimpan di server JSONPlaceholder (demo API). Untuk production, akan menggunakan database yang aman.

**Q: Berapa banyak post yang bisa dibuat?**  
A: Unlimited. Namun aplikasi menampilkan 12 post pertama.

**Q: Apakah bisa offline?**  
A: Saat ini belum. Membutuhkan koneksi internet untuk akses API.

**Q: Post yang dihapus bisa dikembalikan?**  
A: Tidak. Aksi delete bersifat permanen.

**Q: Apakah ada fitur search?**  
A: Belum tersedia. Planned untuk versi berikutnya.

---

### Kontak Support

Jika mengalami masalah atau memiliki pertanyaan:

- **GitHub Issues:** [Link repository]
- **Email:** [Email support]
- **Documentation:** Baca DOKUMENTASI_TEKNIS.md

---

## 🎓 Tutorial Video

### Coming Soon:
- [ ] Tutorial Dasar (5 menit)
- [ ] CRUD Operations (10 menit)
- [ ] Tips & Tricks (5 menit)

---

## 📊 Glossary

**API** - Application Programming Interface, untuk komunikasi dengan server  
**CRUD** - Create, Read, Update, Delete operations  
**Grid View** - Tampilan dalam bentuk kotak-kotak  
**List View** - Tampilan dalam bentuk list horizontal  
**Modal** - Pop-up window untuk form  
**Notification** - Pesan feedback untuk user  
**Optimistic Update** - Update UI sebelum konfirmasi server  
**Responsive** - Tampilan menyesuaikan ukuran layar  
**Rollback** - Kembalikan data jika operasi gagal  
**SPA** - Single Page Application, tidak reload halaman

---

## 🔄 Update History

**Version 1.0.0** (2 Feb 2026)
- ✅ Initial release
- ✅ All CRUD features
- ✅ Responsive design
- ✅ Notification system

---

**Terima kasih telah menggunakan aplikasi Manajemen Blog!**

Jika panduan ini membantu, jangan ragu untuk share dengan teman Anda. 😊

---

**Last Updated:** 2 Februari 2026  
**Guide Version:** 1.0.0
