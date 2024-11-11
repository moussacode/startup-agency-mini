
    // Sélectionner tous les liens
const links = document.querySelectorAll('.linksection');

// Ajouter un gestionnaire d'événement pour chaque lien
links.forEach(link => {
    link.addEventListener('click', function() {
        // Retirer la classe 'active' de tous les liens
        links.forEach(l => l.classList.remove('active'));
        
        // Ajouter la classe 'active' au lien cliqué
        this.classList.add('active');
    });
});
    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-humburger");
    const cancelBtn = document.querySelector(".cancel-btn");
    const menu = document.querySelector(".navsection");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
      
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
        this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

    // Récupérer les éléments
const videoBtn = document.getElementById('video-btn');
const youtubeVideo = document.getElementById('youtube-video');
const closeBtn = document.getElementById('close-btn');

// Afficher la vidéo et cacher le bouton quand l'utilisateur clique sur l'icône
videoBtn.addEventListener('click', function(event) {
    event.preventDefault();
    youtubeVideo.style.display = 'block';
    videoBtn.style.display = 'none';
});

// Cacher la vidéo et réafficher le bouton quand l'utilisateur clique sur "Fermer"
closeBtn.addEventListener('click', function() {
    youtubeVideo.style.display = 'none';
    videoBtn.style.display = 'block';
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  breakpoint: {
    0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
    1024: {
        slidesPerView: 3,
        },
  }
});


   