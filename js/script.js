let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");


function openTab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


let sidemenu = document.getElementById("sidemenu");


function openMenu() {
    sidemenu.style.right = "0";
}


function closeMenu() {
    sidemenu.style.right = "-200px";
}


const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
    const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }));
}


function cetak() {
    let newPesan = document.getElementById("pesan").value ;
    let newTotal = document.getElementById("total").value ;
    const hasil = document.getElementById("hasil");
    let hitung = 1;
    while (hitung <= newTotal) {
        hasil.innerHTML = hasil.innerHTML + `${newPesan}`;
        hitung++;
    }
}