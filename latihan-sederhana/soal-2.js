// ### 2. Ubah Warna Latar

// * Tambahkan tombol “Ganti Background”
// * Saat diklik, ubah warna `background-color` body menjadi `lightgreen`.

// ---

const button = document.querySelector('button')
button.addEventListener('click', () => {
    // document.body.style.backgroundColor = `lightgreen`;
    if(document.body.style.backgroundColor === `white`){
        document.body.style.backgroundColor = `lightgreen`;
    }else{
        document.body.style.backgroundColor = `white`
    }
})