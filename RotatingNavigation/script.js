
const container = document.querySelector('.container');
const circle = document.querySelector('.circle');
const circleContainer = document.querySelector('.circle-container');
const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('open');
const content = document.querySelector('.content');

if (openBtn && closeBtn && container) {
    openBtn.addEventListener('click', () => {
        container.classList.add('show-nav');
    });

    closeBtn.addEventListener('click', () => {
        container.classList.remove('show-nav');
    });
}


