// <!-- ### 5. Tambah Item ke List

// * Ada `<input>` + tombol “Tambah”
// * Di bawahnya `<ul>`
// * Saat klik tombol:

//   * Ambil value input
//   * Tambahkan `<li>` baru ke `<ul>` dengan teks dari input -->

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  let baru = input.value;
  const li = document.createElement("li");
  li.textContent = baru;
  ul.appendChild(li);
});
