import '../scss/style.scss'

console.log('Works!')

let swiper = null; 

function initSwiper() {
    if (window.innerWidth < 761) {
        if (!swiper) { 
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
        }
    } else if (swiper instanceof Swiper) { 
        swiper.destroy();
        swiper = null;
    }
}

window.addEventListener('resize', initSwiper);
window.addEventListener('load', initSwiper);



const showButton1 = document.querySelector('.toggle-button:not(.hidden)');
const hideButton1 = document.querySelector('.toggle-button.hidden');
const additionalItems1 = document.querySelector('.content-text__more');

showButton1.addEventListener('click', function () {
    additionalItems1.style.display = 'inline-flex';
    showButton1.style.display = 'none'; 
    hideButton1.style.display = 'inline-flex'; 
});

hideButton1.addEventListener('click', function () {
    additionalItems1.style.display = 'none';
    showButton1.style.display = 'inline-flex'; 
    hideButton1.style.display = 'none';
});



document.querySelector('.app-header__burger').addEventListener('click', function(event) {
    event.stopPropagation(); 
    this.classList.toggle('active');
    document.querySelector('.navigation-wrapper').classList.toggle('open');
    document.querySelector('.navigation__overlay').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('open');
});

document.addEventListener('click', function(event) {
    const navigationWrapper = document.querySelector('.navigation-wrapper');
    const navigationBurger = document.querySelector('.navigation__burger');
    const isClickInside = navigationWrapper.contains(event.target);
    const isBurgerClick = navigationBurger.contains(event.target);

    if (!isClickInside && !isBurgerClick) {
        navigationWrapper.classList.remove('open');
        document.querySelector('.navigation__overlay').classList.remove('open');
        document.querySelector('.navigation').classList.remove('open');
        navigationBurger.classList.remove('active');
    }
});



// Функция для переключения классов, управляющих видимостью окна сообщений
function toggleMessageModal() {
    document.querySelector('.app-header__popup').classList.toggle('open');
    document.querySelector('.app-header__wrapper').classList.toggle('open');
    document.querySelector('.app-header__overlay').classList.toggle('open');
}

// Обработчик для кнопок вызова окна сообщений
document.querySelectorAll('.button__item.message, .navigation-button.message').forEach(function (element) {
    element.addEventListener('click', function () {
        this.classList.toggle('active');
        toggleMessageModal();
    });
});

// Обработчик для кнопки закрытия окна сообщений
document.querySelector('.button.popup__close').addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    toggleMessageModal();
});

// Обработчик для клика по затемнённому фону окна сообщений
document.querySelector('.app-header__popup').addEventListener('click', function (event) {
    if (event.target === this) {
        toggleMessageModal();
    }
});

// Функция для переключения классов, управляющих видимостью окна звонка
function toggleCallModal() {
    document.querySelector('.app-header__call').classList.toggle('open');
    document.querySelector('.app-header__call-wrapper').classList.toggle('open');
    document.querySelector('.app-header__call-overlay').classList.toggle('open');
}

// Обработчик для кнопок вызова окна звонка
document.querySelectorAll('.button__item.call, .navigation-button.call').forEach(function (element) {
    element.addEventListener('click', function () {
        this.classList.toggle('active');
        toggleCallModal();
    });
});

// Обработчик для кнопки закрытия окна звонка
document.querySelector('.button.call__close').addEventListener('click', function (event) {
    event.preventDefault();
    toggleCallModal();
});

// Обработчик для клика по затемнённому фону окна звонка
document.querySelector('.app-header__call').addEventListener('click', function (event) {
    if (event.target === this) {
        toggleCallModal();
    }
});




document.addEventListener('DOMContentLoaded', function() {
    function setupToggle(itemSelector, buttonSelector, buttonTextSelector, iconSelector, visibleCount) {
        const items = document.querySelectorAll(itemSelector);
        const toggleButton = document.querySelector(buttonSelector);
        if (!toggleButton) {
            console.warn(`Элемент ${buttonSelector} не найден.`);
            return;
        }
        const buttonText = toggleButton.querySelector(buttonTextSelector);
        const buttonIcon = toggleButton.querySelector(iconSelector);
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
    }

    // Инициализация для первого набора элементов
    setupToggle('.brands-item', '.brands-button__more', '.brands-button__hidden', '.icon', 8);

    // Инициализация для второго набора элементов
    setupToggle('.section-type', '.section-type__button', '.section-button__hidden', '.icon', 4);
});

