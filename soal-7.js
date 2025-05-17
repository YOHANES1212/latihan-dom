// <!-- ### 7. Toggle Tema Gelap/Terang

// * Ada tombol “Ganti Tema”
// * Saat diklik:

//   * Jika saat ini `body` belum ada class `dark`, tambahkan class itu
//   * Jika sudah ada, hapus
// * Class `dark` bikin background hitam & teks putih -->

// ---

const button = document.querySelector('button')
button.addEventListener('click', () => {
    if(document.body.style.backgroundColor === 'white'){
        document.body.style.backgroundColor = 'black'
    }else{
        document.body.style.backgroundColor = 'white'
    }
})