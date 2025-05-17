// ### 6. Hapus Item List saat Diklik

// Lanjutan dari no.5:

// * Kalau `<li>` diklik, maka `<li>` itu dihapus dari list.

// ---

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  let baru = input.value;
  const li = document.createElement("li");
  li.textContent = baru;
  ul.appendChild(li);
  li.addEventListener('click', () => {
    ul.removeChild(li)
  })
});
