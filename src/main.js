document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const mobNavContainer = document.querySelector('.mob-nav-container');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.mob-close-btn');
const body = document.body;

// Обработчик события для открытия меню
openMenuBtn.addEventListener('click', () => {
    mobNavContainer.classList.add('is-open'); // Добавляем класс для анимации открытия
});

// Обработчик события для закрытия меню
closeMenuBtn.addEventListener('click', () => {
    mobNavContainer.classList.remove('is-open'); // Убираем класс для анимации закрытия
});
