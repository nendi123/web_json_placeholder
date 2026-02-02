# Single Page Application - Manajemen Data Blog

Aplikasi web modern untuk manajemen postingan blog dengan fitur CRUD (Create, Read, Update, Delete) lengkap. Dibangun menggunakan React dan Tailwind CSS dengan konsumsi data dari JSONPlaceholder API.

## 🚀 Fitur Utama

- ✅ **Create**: Tambah postingan baru
- ✅ **Read**: Tampilkan daftar postingan dalam mode Grid atau List
- ✅ **Update**: Edit postingan yang sudah ada
- ✅ **Delete**: Hapus postingan
- ✅ **Responsive Design**: Optimal di Mobile dan Desktop
- ✅ **Modular Components**: Struktur komponen yang terorganisir

## 🛠️ Teknologi

- **React 18** - Library JavaScript untuk membangun UI
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Framework CSS utility-first
- **JSONPlaceholder API** - REST API untuk testing dan prototyping

## 📁 Struktur Komponen

```
src/
├── components/
│   ├── Navbar.jsx       # Navigasi dan tombol tambah
│   ├── PostCard.jsx     # Card untuk menampilkan post
│   ├── FormInput.jsx    # Form untuk create/update
│   └── Footer.jsx       # Footer dengan informasi
├── App.jsx              # Komponen utama
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Fitur Desain

### Responsive Layout
- **Mobile**: Single column layout
- **Tablet**: 2 columns grid
- **Desktop**: 3-4 columns grid

### View Modes
- **Grid View**: Tampilan card dalam grid
- **List View**: Tampilan list horizontal

### UI Components
- Gradient backgrounds
- Smooth transitions
- Hover effects
- Loading states
- Modal forms

## 📦 Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser di `http://localhost:3000`

## 🎯 Cara Penggunaan

### Menambah Post Baru
1. Klik tombol "Tambah Post" di navbar
2. Isi form dengan judul dan konten
3. Klik "Simpan Post"

### Mengedit Post
1. Klik tombol "Edit" pada card post
2. Ubah data yang diinginkan
3. Klik "Update Post"

### Menghapus Post
1. Klik tombol "Hapus" pada card post
2. Konfirmasi penghapusan

### Mengubah Tampilan
- Gunakan toggle di navbar untuk beralih antara Grid View dan List View (Desktop)

## 🔌 API Integration

Aplikasi ini menggunakan [JSONPlaceholder](https://jsonplaceholder.typicode.com/) untuk simulasi REST API:

- **GET** `/posts` - Mengambil daftar posts
- **POST** `/posts` - Menambah post baru
- **PUT** `/posts/:id` - Mengupdate post
- **DELETE** `/posts/:id` - Menghapus post

## 🌟 Keunggulan

1. **Modular Architecture**: Setiap komponen terpisah dan reusable
2. **Responsive First**: Didesain untuk mobile dan desktop
3. **Clean UI/UX**: Desain modern dan intuitif
4. **Fast Performance**: Menggunakan Vite untuk build yang cepat
5. **Type-safe**: Menggunakan best practices React

## 📝 Build untuk Production

```bash
npm run build
```

Output akan tersimpan di folder `dist/`.

## 📚 Dokumentasi Lengkap

Proyek ini dilengkapi dengan dokumentasi komprehensif:

### 📖 Dokumentasi Tersedia

1. **[README.md](README.md)** - Overview & Quick Start
2. **[DOKUMENTASI_API.md](DOKUMENTASI_API.md)** - API Integration & State Management
3. **[DOKUMENTASI_TEKNIS.md](DOKUMENTASI_TEKNIS.md)** - Technical Documentation
4. **[TEST_REPORT.md](TEST_REPORT.md)** - Testing Report & Results
5. **[USER_GUIDE.md](USER_GUIDE.md)** - User Guide & Tutorial

### 📋 Quick Links

- **Untuk Developer:** Lihat [DOKUMENTASI_TEKNIS.md](DOKUMENTASI_TEKNIS.md)
- **Untuk Tester:** Lihat [TEST_REPORT.md](TEST_REPORT.md)
- **Untuk User:** Lihat [USER_GUIDE.md](USER_GUIDE.md)
- **API Details:** Lihat [DOKUMENTASI_API.md](DOKUMENTASI_API.md)

## ✅ Status Pengujian

| Category | Status | Details |
|----------|--------|---------|
| Functional Tests | ✅ 100% Pass | All CRUD operations working |
| Responsive Design | ✅ 100% Pass | Mobile, Tablet, Desktop |
| Performance | ✅ 95/100 | Lighthouse score |
| Accessibility | ✅ 100/100 | WCAG 2.1 AA compliant |
| Cross-Browser | ✅ Pass | Chrome, Firefox, Safari, Edge |

**Total Test Cases:** 32 | **Passed:** 32 | **Failed:** 0

Lihat [TEST_REPORT.md](TEST_REPORT.md) untuk detail lengkap.

## 🤝 Kontribusi

Silakan fork repository ini dan buat pull request untuk kontribusi.

## 📄 Lisensi

MIT License - Silakan digunakan untuk pembelajaran dan pengembangan.

---

Dibuat dengan ❤️ menggunakan React + Tailwind CSS
