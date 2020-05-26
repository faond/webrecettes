// Js pour l'interface

//fonction pour le menu hamburger
const menuBtn = document.querySelector('.menu_btn'); //on récupère le menu grâce à sa classe
const menuListe = document.querySelector('.styles_menu');
let menuOpen = false; //on déclare une variable false qui va nous permettre de faire jouer l'événement
let mainContainer = document.querySelector('.main_container');

menuBtn.addEventListener('click', () => { //quand on clique sur le menu
    if(!menuOpen) { //on check si le menu est ouvert
        menuBtn.classList.add('open'); //on ajoute l'animation
        menuListe.classList.add('open');
        menuListe.classList.remove('fadeOut');
        mainContainer.classList.add('flou')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou');
        menuOpen = false;
    }
});


//fonction quand on clique dans le menu (plats, entrée, desserts etc...)
const menuEntree = document.querySelector('#entree');
const menuPlat = document.querySelector('#plat');
const menuDessert = document.querySelector('#dessert');
const menuBoisson = document.querySelector('#boisson');
const menuImage = document.querySelector('#uploadImage');
const menuMesRecettes = document.querySelector('#mesRecettes');
menuEntree.addEventListener('click', () => { //quand on clique sur le menu
    if(!menuOpen) { //on check si le menu est ouvert
        menuBtn.classList.remove('open'); //on ajoute l'animation
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou');
        menuOpen = false;
    }
});

menuPlat.addEventListener('click', () => { //quand on clique sur le menu
    if(!menuOpen) { //on check si le menu est ouvert
        menuBtn.classList.remove('open'); //on ajoute l'animation
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou');
        menuOpen = false;
    }
});

menuDessert.addEventListener('click', () => { //quand on clique sur le menu
    if(!menuOpen) { //on check si le menu est ouvert
        menuBtn.classList.remove('open'); //on ajoute l'animation
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou');
        menuOpen = false;
    }
});

menuBoisson.addEventListener('click', () => { //quand on clique sur le menu
    if(!menuOpen) { //on check si le menu est ouvert
        menuBtn.classList.remove('open'); //on ajoute l'animation
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou');
        menuOpen = false;
    }
});

menuMesRecettes.addEventListener('click', () => { //quand on clique sur le menu
    if(!menuOpen) { //on check si le menu est ouvert
        menuBtn.classList.remove('open'); //on ajoute l'animation
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou');
        menuOpen = false;
    }
});

menuImage.addEventListener('click', () => { //quand on clique sur le menu
    if(!menuOpen) { //on check si le menu est ouvert
        menuBtn.classList.remove('open'); //on ajoute l'animation
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuListe.classList.remove('open');
        menuListe.classList.add('fadeOut');
        mainContainer.classList.remove('flou');
        menuOpen = false;
    }
});
