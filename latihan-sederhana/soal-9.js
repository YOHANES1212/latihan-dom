// ---

// ## 🔴 **Level 5 – Event & Form Handling**

// ### 9. Validasi Form Sederhana

// * Buat form dengan input nama dan tombol submit
// * Saat disubmit:

//   * Cek kalau input kosong → tampilkan alert “Nama wajib diisi!”
//   * Kalau tidak kosong → tampilkan `alert("Halo, [nama]!")`

// ---

const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", () => {
  const input = document.querySelector("input").value;
  if (input === "") {
    input = alert("Nama Wajib diisi");
  } else {
    input = alert(`Halo, ${input}`);
  }
});
