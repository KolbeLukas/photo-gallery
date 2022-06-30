let landscape = ['landscape-img/0.jpg', 'landscape-img/1.jpg',
    'landscape-img/2.jpg', 'landscape-img/3.jpg', 'landscape-img/4.jpg',
    'landscape-img/5.jpg', 'landscape-img/6.jpg', 'landscape-img/7.jpg',
    'landscape-img/8.jpg', 'landscape-img/9.jpg', 'landscape-img/10.jpg',
    'landscape-img/11.jpg', 'landscape-img/12.jpg', 'landscape-img/13.jpg',
    'landscape-img/14.jpg', 'landscape-img/15.jpg', 'landscape-img/16.jpg',
    'landscape-img/17.jpg', 'landscape-img/18.jpg', 'landscape-img/19.jpg',
    'landscape-img/20.jpg', 'landscape-img/21.jpg', 'landscape-img/22.jpg',
    'landscape-img/23.jpg', 'landscape-img/24.jpg', 'landscape-img/25.jpg',
    'landscape-img/26.jpg', 'landscape-img/27.jpg', 'landscape-img/28.jpg',
    'landscape-img/29.jpg', 'landscape-img/30.jpg', 'landscape-img/31.jpg',
    'landscape-img/32.jpg', 'landscape-img/33.jpg', 'landscape-img/34.jpg',
    'landscape-img/35.jpg', 'landscape-img/36.jpg', 'landscape-img/37.jpg',
    'landscape-img/38.jpg', 'landscape-img/39.jpg', 'landscape-img/40.jpg',
    'landscape-img/41.jpg', 'landscape-img/42.jpg', 'landscape-img/43.jpg',
    'landscape-img/44.jpg', 'landscape-img/45.jpg', 'landscape-img/46.jpg',
    'landscape-img/47.jpg', 'landscape-img/48.jpg', 'landscape-img/49.jpg',
    'landscape-img/50.jpg', 'landscape-img/51.jpg', 'landscape-img/52.jpg',
    'landscape-img/53.jpg', 'landscape-img/54.jpg', 'landscape-img/55.jpg'];

let filter = ['bridge meadow', 'wood water',
    'mountain-rock snow', 'sand water', 'mountain-rock water sunset',
    'mountain-rock water wood', 'sand sunset', 'mountain-rock water wood',
    'wood', 'wood snow', 'sand',
    'water mountain-rock', 'mountain-rock water wood', 'mountain-rock snow water',
    'mountain-rock snow', 'bridge', 'water wood',
    'water wood mountain-rock', 'meadow wood', 'sand',
    'mountain-rock water meadow', 'water mountain-rock', 'mountain-rock wood water',
    'mountain-rock', 'water mountain-rock wood', 'water wood bridge',
    'wood', 'mountain-rock sunset', 'mountain-rock sand',
    'mountain-rock', 'wood', 'bridge water wood',
    'mountain-rock meadow sunset', 'water wood', 'mountain-rock meadow',
    'meadow', 'sand', 'mountain-rock water',
    'mountain-rock water sunset', 'mountain-rock water sunset', 'water mountain-rock',
    'mountain-rock water snow', 'water mountain-rock', 'sand',
    'water wood bridge', 'water sand wood', 'mountain-rock wood',
    'mountain-rock meadow', 'water sunset', 'sunset mountain-rock',
    'wood sunset', 'mountain-rock water wood', 'mountain-rock meadow',
    'bridge water wood', 'sand mountain-rock water', 'mountain-rock water wood'];


/* LOAD ALL FOTOS OUT OF THE ARRAY */
function loadFotoGallery() {
    for (i = 0; i < landscape.length; i++) {
        document.getElementById('foto-gallery').innerHTML += renderFotos(i);
    }
}


/* OPEN A FULLSCREEN-OVERLAY WITH THE FOTO YOU CLICKED */
function openOverlayFoto(i) {
    if (filters[0].classList.contains('active')) {
        document.getElementById('body').classList.add('stop-scolling');
        document.getElementById('main').classList.add('margin-right');
        document.getElementById('foto-overlay').innerHTML = renderOverlayFoto(i);
    } else {
        document.getElementById('body').classList.add('stop-scolling');
        document.getElementById('main').classList.add('margin-right');
        document.getElementById('foto-overlay').innerHTML = renderOverlayFoto(i);
        // document.getElementById('previous-foto').classList.add('d-none');
        // document.getElementById('next-foto').classList.add('d-none');
    }
}


/* CLOSE THE FULLSCREEN-OVERLAY OF THE FOTO */
function closeOverlayFoto() {
    document.getElementById('foto-overlay').innerHTML = '';
    document.getElementById('body').classList.remove('stop-scolling');
    document.getElementById('main').classList.remove('margin-right');
}


/* OPEN THE NEXT FOTO IN THE FULLSCREEN-OVERLAY */
function loadOneFotoForward(i) {
    let overlay = document.getElementById('foto-overlay');
    overlay.innerHTML = '';

    if (i < landscape.length) {
        if (document.getElementById('test' + i).classList.contains('d-none')) {
            i++;
            loadOneFotoForward(i);
        } else {
            overlay.innerHTML = renderOverlayFoto(i);
        }
    }
    if (i > landscape.length - 1) {
        i = 0
        if (document.getElementById('test' + i).classList.contains('d-none')) {
            i++;
            loadOneFotoForward(i);
        } else {
            overlay.innerHTML = renderOverlayFoto(i);
        }
    }
}


/* OPEN THE PREVIOUS FOTO IN THE FULLSCREEN-OVERLAY */
function loadOneFotoBack(i) {
    let overlay = document.getElementById('foto-overlay');
    overlay.innerHTML = '';

    if (i >= 0) {
        if (document.getElementById('test' + i).classList.contains('d-none')) {
            i--;
            loadOneFotoBack(i);
        } else {
            overlay.innerHTML = renderOverlayFoto(i);
        }
    }
    if (i < 0) {
        i = landscape.length - 1;
        if (document.getElementById('test' + i).classList.contains('d-none')) {
            i--;
            loadOneFotoBack(i);
        } else {
            overlay.innerHTML = renderOverlayFoto(i);
        }
    }
}


/* FILTERS */

const collection = document.getElementsByClassName('img');
const filters = document.getElementsByClassName('filter');

function showAll() {
    for (i = 0; i < collection.length; i++) {
        collection[i].classList.remove('d-none');
    }
    for (i = 0; i < filters.length; i++) {
        if (filters[i].classList.contains('active')) {
            filters[i].classList.remove('active');
        }
        filters[0].classList.add('active');
    }
}


function showFilter(x) {
    for (i = 0; i < collection.length; i++) {
        if (collection[i].classList.contains(x)) {
            collection[i].classList.remove('d-none');
        } else {
            collection[i].classList.add('d-none');
        }
    }
}


function addActiveFilterToMountainRock() {
    for (i = 0; i < filters.length; i++) {
        if (filters[i].classList.contains('active')) {
            filters[i].classList.remove('active');
        }
        filters[1].classList.add('active');
    }
}


function addActiveFilterToWood() {
    for (i = 0; i < filters.length; i++) {
        if (filters[i].classList.contains('active')) {
            filters[i].classList.remove('active');
        }
        filters[2].classList.add('active');
    }
}


function addActiveFilterToSand() {
    for (i = 0; i < filters.length; i++) {
        if (filters[i].classList.contains('active')) {
            filters[i].classList.remove('active');
        }
        filters[3].classList.add('active');
    }
}


function addActiveFilterToBridge() {
    for (i = 0; i < filters.length; i++) {
        if (filters[i].classList.contains('active')) {
            filters[i].classList.remove('active');
        }
        filters[4].classList.add('active');
    }
}


function addActiveFilterToMeadow() {
    for (i = 0; i < filters.length; i++) {
        if (filters[i].classList.contains('active')) {
            filters[i].classList.remove('active');
        }
        filters[5].classList.add('active');
    }
}


function addActiveFilterToWater() {
    for (i = 0; i < filters.length; i++) {
        if (filters[i].classList.contains('active')) {
            filters[i].classList.remove('active');
        }
        filters[6].classList.add('active');
    }
}


function addActiveFilterToSnow() {
    for (i = 0; i < filters.length; i++) {
        if (filters[i].classList.contains('active')) {
            filters[i].classList.remove('active');
        }
        filters[7].classList.add('active');
    }
}


function addActiveFilterToSunset() {
    for (i = 0; i < filters.length; i++) {
        if (filters[i].classList.contains('active')) {
            filters[i].classList.remove('active');
        }
        filters[8].classList.add('active');
    }
}


/* HTML-RENDERING */

function renderFotos(i) {
    return /*html*/ `
        <img id="test${i}" onclick="openOverlayFoto(${i})" src="${landscape[i]}" class="img ${filter[i]}">`;
}


function renderOverlayFoto(i) {
    return /*html*/ `
        <div class="foto-overlay">
            <div class="foto-overlay-box">
                <img onclick="closeOverlayFoto()" class="close-overlay" src="img/cross.png">
                <img id="previous-foto" onclick="loadOneFotoBack(${i - 1})" class="previous-foto" src="img/arrow-left.png">
                <img class="overlay-img" src="${landscape[i]}">
                <img id="next-foto" onclick="loadOneFotoForward(${i + 1})" class="next-foto" src="img/arrow-right.png">
            </div>
        </div>`;
}