import '../scss/style.scss'

console.log('Works!')


function initSwiper() {
    if (window.innerWidth < 761) {
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



const showButton1 = document.querySelector('.toggle-button:not(.hidden)');
const hideButton1 = document.querySelector('.toggle-button.hidden');
const additionalItems1 = document.querySelector('.content-text__more');

// Обработчик для кнопки "Показать все"
showButton1.addEventListener('click', function () {
    additionalItems1.style.display = 'inline-flex';
    showButton1.style.display = 'none'; // Скрываем верхнюю кнопку
    hideButton1.style.display = 'inline-flex'; // Показываем кнопку "Скрыть"
});

// Обработчик для кнопки "Скрыть"
hideButton1.addEventListener('click', function () {
    additionalItems1.style.display = 'none';
    showButton1.style.display = 'inline-flex'; // Показываем верхнюю кнопку
    hideButton1.style.display = 'none'; // Скрываем кнопку "Скрыть"
});



// ============================================================= //

// ============================================================================ //

const showButton3 = document.querySelector('.section-type__button:not(.hidden)');
const hideButton3 = document.querySelector('.section-type__button.hidden');
const additionalItems3 = document.querySelector('.section-types__inner.second-block');
showButton3.addEventListener('click', function () {
    additionalItems3.style.display = 'flex';
    showButton3.style.display = 'none'; // Скрываем верхнюю кнопку
    hideButton3.style.display = 'flex'; // Показываем кнопку "Скрыть"
});
hideButton3.addEventListener('click', function () {
    additionalItems3.style.display = 'none';
    showButton3.style.display = 'flex'; // Показываем верхнюю кнопку
    hideButton3.style.display = 'none'; // Скрываем кнопку "Скрыть"
});



document.querySelector('.app-header__burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.navigation-wrapper').classList.toggle('open');
    document.querySelector('.navigation__overlay').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('open');
    
});

document.querySelector('.button.navigation__burger').addEventListener('click', function(){
    this.classList.toggle('none');
    document.querySelector('.navigation-wrapper').classList.toggle('open');
    document.querySelector('.navigation__overlay').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('open');
    
});

document.querySelector('.button__item.message').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.app-header__popup').classList.toggle('open');
    document.querySelector('.app-header__wrapper').classList.toggle('open');
    document.querySelector('.app-header__overlay').classList.toggle('open');
});





document.querySelector('.button.popup__close').addEventListener('click', function(){
    this.classList.toggle('none');
    document.querySelector('.app-header__popup').classList.toggle('open');
    document.querySelector('.app-header__wrapper').classList.toggle('open');
    document.querySelector('.app-header__overlay').classList.toggle('open');
    
});

document.querySelector('.button__item.call').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.app-header__call').classList.toggle('open');
    document.querySelector('.app-header__call-wrapper').classList.toggle('open');
    document.querySelector('.app-header__call-overlay').classList.toggle('open');
});


document.querySelector('.button.call__close').addEventListener('click', function(){
    this.classList.toggle('none');
    document.querySelector('.app-header__call').classList.toggle('open');
    document.querySelector('.app-header__call-wrapper').classList.toggle('open');
    document.querySelector('.app-header__call-overlay').classList.toggle('open');
    
});



document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.brands-item');
    const toggleButton = document.querySelector('.brands-button__more');
    if (!toggleButton) {
        console.warn('Элемент .brands-button__more не найден.');
        return;
    }
    const buttonText = toggleButton.querySelector('.brands-button__hidden');
    const buttonIcon = toggleButton.querySelector('.icon');
    const visibleCount = 8;
    let expanded = false;

    items.forEach((item, index) => {
        if (index < visibleCount) item.classList.add('visible');
    });

    if (items.length > visibleCount) toggleButton.style.display = 'flex';

    toggleButton.addEventListener('click', function() {
        expanded = !expanded;
        items.forEach((item, index) => {
            if (index >= visibleCount) item.classList.toggle('visible', expanded);
        });
        buttonText.textContent = expanded ? 'Скрыть' : 'Показать все';
        buttonIcon.classList.toggle('rotated', expanded);
    });
});