// Функция showMessage
function showMessage(message) {
    console.log(message);
}

// Функция changeBackgroundColor
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция toggleVisibility
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

// Функция, которая извлекает параметр utm_term из URL и изменяет текст H1
function updateH1FromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');
    if (h1) {
        if (utmTerm) {
            h1.textContent = utmTerm;
        } else {
            h1.textContent = 'Добро пожаловать на наш сайт!';
        }
    }
}

// Функция logCurrentTime
function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

// Функция resetBackgroundColor
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Часть 3. Порядок вызова функций
document.addEventListener('DOMContentLoaded', () => {
    // Вызов showMessage
    showMessage("Скрипт загружен!");

    // Вызов logCurrentTime
    logCurrentTime();

    // Вызов resetBackgroundColor
    resetBackgroundColor();

    // Вызов changeBackgroundColor
    changeBackgroundColor("lightblue");

    // Вызов toggleVisibility
    toggleVisibility('.content');

    // Вызов updateH1FromUrl
    updateH1FromUrl();
});
