# Portfolio Andi Asyraful Amal Ilham

Website portfolio interaktif dengan animasi dan desain modern.

## 📁 Struktur File

```
portfolio/
├── index.html          # File HTML utama
├── style.css           # Stylesheet dengan animasi & gradasi
├── script.js           # JavaScript untuk interaktivitas
├── portfolio.html      # (Legacy) File HTML alternatif
├── images/             # Folder untuk menyimpan foto
│   ├── profile.jpg     # Foto profil (hero section) - 120x120px
│   ├── about.jpg       # Foto section About - 300x300px
│   ├── project-calculator.jpg
│   ├── project-guestbook.jpg
│   ├── project-report.jpg
│   ├── project-flappy.jpg
│   └── project-kacirebonan.jpg
└── README.md          # File ini
```

## 🎨 Fitur

- ✨ **Animasi Smooth** - Fade-in, slide-in, dan floating animations saat scroll
- 🎨 **Gradasi Warna** - Gradient backgrounds untuk hero, skills, dan projects
- 🖼️ **Image Placeholders** - Tempat untuk menambahkan foto di berbagai section
- 📱 **Responsive Design** - Optimal untuk desktop, tablet, dan mobile
- ⚡ **Interaktif** - Hover effects, smooth scroll, dan stagger animations
- 🎯 **Modern UI** - Glass morphism, rounded corners, dan shadows

## 📸 Cara Menambahkan Foto

### 1. Foto Profil (Hero Section)
- Nama file: `profile.jpg`
- Ukuran: 120x120px (persegi)
- Path: `images/profile.jpg`
- Tipe: JPG, PNG, atau WebP

### 2. Foto About Section
- Nama file: `about.jpg`
- Ukuran: 300x300px
- Path: `images/about.jpg`

### 3. Foto Project (setiap project)
- **Kalkulator**: `project-calculator.jpg` - 160x160px
- **Buku Tamu**: `project-guestbook.jpg` - 160x160px
- **Pelaporan**: `project-report.jpg` - 160x160px
- **Flappy Bird**: `project-flappy.jpg` - 160x160px
- **Kacirebonan**: `project-kacirebonan.jpg` - 160x160px
- Path: `images/[nama-file].jpg`

### Langkah Upload:
1. Simpan file foto ke folder `images/`
2. Pastikan nama file sesuai dengan yang tertera di HTML
3. Refresh browser untuk melihat perubahan
4. Jika foto tidak muncul, akan otomatis menampilkan emoji placeholder

## 🎭 Animasi yang Tersedia

- **fadeInUp** - Fade in dengan translasi ke atas (0.6-1s)
- **slideInLeft** - Slide dari kiri ke kanan
- **slideInRight** - Slide dari kanan ke kiri
- **float** - Floating/melayang (4s loop)
- **glow** - Glow effect pada teks (3s loop)
- **shimmer** - Shimmer effect pada image (3s loop)

Semua animasi terpicu saat element masuk viewport menggunakan Intersection Observer API.

## 🎨 Palet Warna

```
--bg: #0f1724         // Background utama
--panel: #0b1220      // Panel background
--muted: #9aa4b2      // Teks secondary
--accent: #6ee7b7     // Warna accent (hijau tosca)
--surface: #071028    // Surface color
```

## 💻 Browser Support

- Chrome/Edge (terbaru)
- Firefox (terbaru)
- Safari (terbaru)
- Mobile browsers (iOS/Android)

## 🚀 Tips

1. **Optimize Foto**: Kompres foto menggunakan tools seperti TinyPNG atau ImageOptim
2. **Format Konsisten**: Gunakan JPG untuk foto, PNG untuk logo/icon
3. **Aspect Ratio**: Perhatikan proporsi saat upload foto
4. **File Size**: Maksimal 500KB per foto untuk performa optimal

## 📝 Customization

### Mengubah Warna:
Edit variabel di `style.css` bagian `:root`:
```css
:root {
  --accent: #6ee7b7;  /* Ubah warna accent di sini */
}
```

### Mengubah Animasi:
Edit duration/delay di `script.js` atau `style.css`

### Mengubah Teks:
Edit konten di `index.html` sesuai kebutuhan

## 📞 Kontak

- Email: asyrafulamal06@gmail.com
- LinkedIn: linkedin.com/in/andi-asyraful-amal-ilham-8b09b730a
- GitHub: github.com/asrapul
- Instagram: @asrapulamal

---

**Dibuat dengan ❤️ untuk portfolio pribadi Andi Asyraful Amal Ilham**
