// Hello Im yassine this website is created on 21/10/2022 //

let svg_up = document.getElementById('svg-up')
let svg_down = document.getElementById('svg-down')
let proflie_menu = document.getElementById('proflie-menu')
let nav_profile = document.getElementById('nav-profile')

function showProfile(params) {
    svg_down.style.display = 'none'
    svg_up.style.display = 'block'
    proflie_menu.style.display = 'flex'
    nav_profile.setAttribute('onclick', 'closeProfile()')
}

function closeProfile(params) {
    svg_down.style.display = 'block'
    svg_up.style.display = 'none'
    proflie_menu.style.display = 'none'
    nav_profile.setAttribute('onclick', 'showProfile()')
}
// search part //

let svg_open = document.getElementById('svg-open')
let svg_close = document.getElementById('svg-close')
let search_bar = document.getElementById('search-bar')

function svgOpen(params) {
    svg_open.style.display = 'none'
    search_bar.style.display = 'flex'
}

function showDelete(params) {
    svg_close.style.display = 'block'
}


function svgClose(params) {
    svg_open.style.display = 'block'
    search_bar.style.display = 'none'
}

// Sfoglia links //

let svg_sfoglia = document.getElementById('svg-sfoglia')
let links_other = document.getElementById('links-other')
let sfoglia_parent = document.getElementById('sfoglia-parent')

function showLinks(params) {
    svg_sfoglia.style.rotate = '180deg'
    sfoglia_parent.style.color = '#e50914'
    links_other.style.display = 'flex'

    sfoglia_parent.setAttribute('onclick', 'closeLinks()')
}

function closeLinks(params) {
    sfoglia_parent.style.color = 'white'
    svg_sfoglia.style.rotate = '3600deg'
    links_other.style.display = 'none'

    sfoglia_parent.setAttribute('onclick', 'showLinks()')
}

// loding //

const myProfile = document.querySelectorAll('.profile-all')
let loader = document.getElementById('loader')
 for (let i = 0; i < myProfile.length; i++) {
    myProfile[i].setAttribute('onclick', 'goHome()');
 }

 function goHome() {
    loader.style.display = 'flex'
    for (let i = 0; i < myProfile.length; i++) {
        myProfile[i].setAttribute('class', 'hidden-profile');
     }

     setTimeout(() => {
        window.location.href = './index.html'
     }, 3000);
 }

