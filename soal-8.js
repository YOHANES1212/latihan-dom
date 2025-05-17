// <!-- ---

// ### 8. Hover Efek

// * Buat satu elemen `<div>` kotak
// * Tambahkan event `mouseover` dan `mouseout`:

//   * Saat mouse masuk, ubah warna jadi merah
//   * Saat mouse keluar, kembali ke warna awal

// --- -->

const div = document.querySelector('.kotak')

div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'red';

div.addEventListener('mouseout', () => {
    div.style.backgroundColor = 'blue'
})
})