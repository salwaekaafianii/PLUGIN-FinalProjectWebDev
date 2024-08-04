## HTML
1. `<!DOCTYPE html>`: Menandakan bahwa ini adalah dokumen HTML5.
2. `<html lang="id">`: Menetapkan bahasa halaman sebagai bahasa Indonesia.
3. `<head>`: Berisi informasi metadata tentang halaman web, seperti charset, viewport, title, dan link ke file CSS.
   - `<meta charset="UTF-8">`: Menetapkan encoding karakter sebagai UTF-8.
   - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Memastikan halaman responsif dengan lebar perangkat.
   - `<title>Website Pribadi - Salwa Eka Afiani</title>`: Menetapkan judul halaman.
   - `<link rel="stylesheet" href="styles.css">`: Menghubungkan file CSS eksternal.

4. `<body>`: Berisi konten utama dari halaman web.
   - `<header>`: Bagian atas halaman dengan menu navigasi.
     - `<nav>`: Menyediakan tautan navigasi ke berbagai bagian halaman menggunakan list (`<ul>` dan `<li>`).
   - `<main>`: Bagian utama dengan empat bagian: Hallo, Tentang Saya, Pendidikan, Keahlian, dan Kontak.
     - `<section class="hallo">`: Menampilkan sambutan dan link media sosial.
     - `<section id="about" class="about">`: Bagian tentang diri Anda dengan foto profil dan deskripsi.
     - `<section id="education" class="education">`: Menampilkan informasi pendidikan.
     - `<section id="skills" class="skills">`: Menampilkan keahlian dengan ikon dan deskripsi.
     - `<section id="contact" class="contact">`: Bagian kontak dengan formulir dan link media sosial.
   - `<footer>`: Bagian bawah halaman dengan hak cipta.

## CSS
**1. Global Style:**
   - `*.{ margin: 0; padding: 0; box-sizing: border-box; }`: Mengatur margin, padding, dan box-sizing untuk semua elemen untuk memastikan konsistensi.
   - `body`: Mengatur font, ukuran teks, warna latar belakang, dan warna teks untuk keseluruhan halaman.

**2. Header**
   - `header`: Menetapkan gaya untuk header termasuk latar belakang transparan, padding, posisi tetap, dan efek blur pada latar belakang. Juga, mengatur gaya untuk menu navigasi di dalamnya.
   - `nav ul`: Mengatur daftar menu menjadi fleksibel dengan item menu yang tersusun horizontal.
   - `nav ul li a`: Mengatur tampilan link menu, termasuk warna, padding, dan efek transisi pada hover.
     
**3. Bagian/Section:**
   - `section`: Memberikan padding, latar belakang, dan styling umum untuk semua section. 
   - `.hallo`: Menetapkan latar belakang gradien dan padding untuk tampilan sambutan.
   - `.about`: Mengatur tata letak untuk bagian "Tentang Saya" dengan foto profil dan teks yang disejajarkan.
   - `.education`: Mengatur tampilan bagian "Pendidikan" termasuk daftar item pendidikan.
   - `.education-intent-item-content`: Gaya untuk item daftar pendidikan dengan gambar, judul, dan informasi waktu.
   - `.skills`: Memberikan gaya untuk elemen keahlian, termasuk efek hover untuk item keahlian.
   - `.skills-item`: Menetapkan gaya untuk setiap item keahlian, termasuk gambar dan deskripsi.
   - `.social-links`: Styling untuk link media sosial dengan background putih dan efek hover.
   - `.contact`: Mengatur gaya untuk formulir kontak dan deskripsi kontak.
   - `.contact-form`: Menetapkan gaya untuk formulir, termasuk padding, border, dan box-shadow.
     
**4. Footer:**
   - `footer`: Memberikan gaya dasar untuk bagian footer dengan warna latar belakang, teks, dan padding.

**5. Responsivitas:**
   - `@media (max-width: 1200px)`, `@media (max-width: 992px)`, `@media (max-width: 768px)`, `@media (max-width: 576px)`: Mengatur gaya untuk ukuran layar yang berbeda untuk memastikan tampilan yang baik pada perangkat yang berbeda, termasuk pengaturan lebar header, ukuran gambar, dan tata letak.