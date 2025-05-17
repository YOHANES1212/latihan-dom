// 4. Tambah HTML Dinamis

//         * Buat tombol “Tambah Pesan”
//         * Saat diklik, tambahkan `<p>` baru ke dalam `<div>` yang isinya: “Ini pesan baru!”
        
//         ---

const button = document.querySelector('button')
const div = document.querySelector('.pesanan')

button.addEventListener('click', () => {
    const p = document.createElement('p')
    p.textContent = 'ini pesanan baru';
    div.appendChild(p)
})