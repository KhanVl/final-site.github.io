import '../scss/style.scss'

console.log('Works!')


function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display="inline";
        btn.innerHTML="Читать далее";
        more.style.display="none";
    } else{
        dots.style.display="none";
        btn.innerHTML="Скрыть";
        more.style.display="inline";
    }
    
}



document.querySelector('.app-header__burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.navigation-wrapper').classList.toggle('open');
    document.querySelector('.navigation__overlay').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('open');
    
})

document.querySelector('.button.navigation__burger').addEventListener('click', function(){
    this.classList.toggle('none');
    document.querySelector('.navigation-wrapper').classList.toggle('open');
    document.querySelector('.navigation__overlay').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('open');
    
})

document.querySelector('.button__item.message').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.app-header__popup').classList.toggle('open');
    document.querySelector('.app-header__wrapper').classList.toggle('open');
    document.querySelector('.app-header__overlay').classList.toggle('open');
})





document.querySelector('.button.popup__close').addEventListener('click', function(){
    this.classList.toggle('none');
    document.querySelector('.app-header__popup').classList.toggle('open');
    document.querySelector('.app-header__wrapper').classList.toggle('open');
    document.querySelector('.app-header__overlay').classList.toggle('open');
    
})

document.querySelector('.button__item.call').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.app-header__call').classList.toggle('open');
    document.querySelector('.app-header__call-wrapper').classList.toggle('open');
    document.querySelector('.app-header__call-overlay').classList.toggle('open');
})


document.querySelector('.button.call__close').addEventListener('click', function(){
    this.classList.toggle('none');
    document.querySelector('.app-header__call').classList.toggle('open');
    document.querySelector('.app-header__call-wrapper').classList.toggle('open');
    document.querySelector('.app-header__call-overlay').classList.toggle('open');
    
})

// Слайдер // 

function initSwiper() {
    if (window.innerWidth < 769) {
        swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 1.2,
            spaceBetween: 7,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (swiper) {
        swiper.destroy(); // Уничтожаем Swiper, если он уже инициализирован
        swiper = null; // Обнуляем переменную
    }
}

window.addEventListener('resize', initSwiper);
window.addEventListener('load', initSwiper);
