// ---

// ##  **Level 1 – Dasar Ambil & Ubah Elemen**

// ### 1. Ganti Teks dengan Tombol

// Buat halaman HTML dengan:

// * 1 elemen `<p>` dengan teks “Halo Dunia!”
// * 1 tombol “Ganti Teks”

//  Saat tombol diklik, teks di paragraf berubah jadi “Halo, Yohanes!”

// ---

const p = document.querySelector('#pertama')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  p.innerHTML = 'Halo, Yohanes'
})