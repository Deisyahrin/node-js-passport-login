// array untuk nyimpen semua elementId user -> biar ga passing string untuk akses element id. (minimize typo)
const idUsers = ["batuUser", "kertasUser", "guntingUser"];

// array untuk nyimpen semua elementId com 
const idCom = ["batuCom", "kertasCom", "guntingCom"];

function pilihanUser(parameter) {
    // function untuk update background by user click event parameter
    valueUser = parameter
    document.getElementById(idUsers[parameter]).style.background = "#C4C4C4"
}



function randomPilihan() {
    // function untuk update background com by random function
    valueCom = Math.floor(Math.random() * 3); // valueCom isinya 0, 1 atau 2
    document.getElementById(idCom[valueCom]).style.background = "#C4C4C4"

    return valueCom
}




var cekHasil = function (valueCom, valueUser) {
    // function cekHasil 

    // kalau pilihan user dan com sama, draw
    if (valueUser === valueCom) return 'DRAW';

    // kalau user pilih batu, cek apakah comp pilih gunting?  kalau iya player 1 menang, kalo engga (comp pilih kertas) com menang
    if (valueUser === 0) return (valueCom === 2) ? 'PLAYER 1 WIN' : 'COMP WIN';

    // kalau user pilih kertas, cek apakah comp pilih batu?  kalau iya player 1 menang, kalo engga (comp pilih kertas) com menang
    else if (valueUser === 1) return (valueCom === 0) ? 'PLAYER 1 WIN' : 'COMP WIN';

    // kalau user pilih gunting, cek apakah comp pilih kertas?  kalau iya player 1 menang, kalo engga (comp pilih kertas) com menang
    else if (valueUser === 2) return (valueCom === 1) ? 'PLAYER 1 WIN' : 'COMP WIN';

}




var resetBackgroundUser = function () {
    // semua elemen di user dihapus backgroundnya

    for (let i = 0; i < idUsers.length; i++) {
        document.getElementById(idUsers[i]).style.background = "none";
    }
}



var resetBackgroundCom = function () {
    // semua elemen di com dihapus backgroundnya

    for (let i = 0; i < idCom.length; i++) {
        document.getElementById(idCom[i]).style.background = "none";
    }
}

const pilih = document.querySelectorAll('li img');
pilih.forEach(function (milih) {
    milih.addEventListener('click', function () {
        // sebelum computer menentukan pilihan nya, kita reset dulu background nya (biar ga dobel dengan pilihan com sebelumnya)
        resetBackgroundCom()

        const pComp = randomPilihan(); // karena randomPilihan return value nya valueCom -> pComp = valueCom (antara 0, 1, 2) 

        // dari pulihan yang user klik, kita lihat indeks nya di array idUsers
        // indexOf akan return indeks array yang kalau matching dengan string yang di pass, kalau ga match return -1
        pUser = idUsers.indexOf(milih.className)

        // cek hasil siapa yang menang 
        const hasil = cekHasil(pComp, pUser);

        setTimeout(function () {
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, );

        // setelah selesai nampilin info menang ato kalah, background user di hapus/reset (biar ga dobel dengan pilihan user sebelumnya)
        resetBackgroundUser()


    });
});


function resetHasil() {
    const info = document.querySelector('.info');

    var img = document.createElement('img')
    img.src = "img/ss.png"
    img.classList.add('ss')
    info.innerHTML=''
    info.appendChild(img)
}

function refreshPage() {
    resetBackgroundCom()
    resetBackgroundUser()
    resetHasil ()
}