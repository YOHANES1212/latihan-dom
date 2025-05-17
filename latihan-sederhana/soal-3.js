// ### 3. Tampilkan Nama dari Input

// * Ada `<input>` dan tombol “Tampilkan”
// * Saat tombol diklik, ambil isi input, lalu tampilkan di `<p>` seperti ini: `Halo, [nama]!`

// ---

const input = document.querySelector('input');
const button = document.querySelector('button');
const p = document.querySelector('.output');

button.addEventListener('click', () => {
  const nama = input.value;
  p.textContent = `Halo, ${nama}!`;
});
