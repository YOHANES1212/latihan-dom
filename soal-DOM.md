Siap, Yohanes! Ini **latihan DOM JavaScript** dari **tingkat dasar ke menengah**, sesuai daftar yang kamu kasih. Fokus ke logika dan interaksi DOM **tanpa solusi dulu**, biar kamu bisa latihan mandiri. Kita mulai dari yang paling mudah.

---

## 🟢 **Level 1 – Dasar Ambil & Ubah Elemen**

### 1. Ganti Teks dengan Tombol

Buat halaman HTML dengan:

* 1 elemen `<p>` dengan teks “Halo Dunia!”
* 1 tombol “Ganti Teks”

🧠 Saat tombol diklik, teks di paragraf berubah jadi “Halo, Yohanes!”

---

### 2. Ubah Warna Latar

* Tambahkan tombol “Ganti Background”
* Saat diklik, ubah warna `background-color` body menjadi `lightgreen`.

---

## 🟡 **Level 2 – Input, Value, dan InnerHTML**

### 3. Tampilkan Nama dari Input

* Ada `<input>` dan tombol “Tampilkan”
* Saat tombol diklik, ambil isi input, lalu tampilkan di `<p>` seperti ini: `Halo, [nama]!`

---

### 4. Tambah HTML Dinamis

* Buat tombol “Tambah Pesan”
* Saat diklik, tambahkan `<p>` baru ke dalam `<div>` yang isinya: “Ini pesan baru!”

---

## 🟠 **Level 3 – Tambah & Hapus Elemen**

### 5. Tambah Item ke List

* Ada `<input>` + tombol “Tambah”
* Di bawahnya `<ul>`
* Saat klik tombol:

  * Ambil value input
  * Tambahkan `<li>` baru ke `<ul>` dengan teks dari input

---

### 6. Hapus Item List saat Diklik

Lanjutan dari no.5:

* Kalau `<li>` diklik, maka `<li>` itu dihapus dari list.

---

## 🔵 **Level 4 – Style Dinamis dan ClassList**

### 7. Toggle Tema Gelap/Terang

* Ada tombol “Ganti Tema”
* Saat diklik:

  * Jika saat ini `body` belum ada class `dark`, tambahkan class itu
  * Jika sudah ada, hapus
* Class `dark` bikin background hitam & teks putih

---

### 8. Hover Efek

* Buat satu elemen `<div>` kotak
* Tambahkan event `mouseover` dan `mouseout`:

  * Saat mouse masuk, ubah warna jadi merah
  * Saat mouse keluar, kembali ke warna awal

---

## 🔴 **Level 5 – Event & Form Handling**

### 9. Validasi Form Sederhana

* Buat form dengan input nama dan tombol submit
* Saat disubmit:

  * Cek kalau input kosong → tampilkan alert “Nama wajib diisi!”
  * Kalau tidak kosong → tampilkan `alert("Halo, [nama]!")`

---

### 10. Daftar Komentar

* Buat input teks + tombol “Kirim Komentar”
* Saat tombol ditekan:

  * Tambahkan komentar baru ke `<div>` komentar
  * Tampilkan waktu komentar dikirim (`new Date().toLocaleTimeString()`)

---

Kalau kamu sudah selesai semua latihan ini, aku bisa kasih:

✅ **Latihan Mini Project DOM**
✅ **Tantangan DOM lanjutan (drag & drop, tabs, accordion, dll)**

Mau aku buatin file HTML dasar buat mulai latihan ini?
