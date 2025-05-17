// ### 10. Daftar Komentar

// * Buat input teks + tombol “Kirim Komentar”
// * Saat tombol ditekan:

//   * Tambahkan komentar baru ke `<div>` komentar
//   * Tampilkan waktu komentar dikirim (`new Date().toLocaleTimeString()`)

// ---

const input = document.querySelector('input')
const div = document.querySelector('.komentar')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    let hasil = input.value.trim()
    if(hasil === ""){
        hasil = alert("Jangan Kirim")
    }

    const komentarBaru = document.createElement('div')
    const waktu = new Date().toLocaleTimeString()
    div.textContent = `${hasil}, ${waktu}`

    div.appendChild(komentarBaru)
    input.value = ''
})