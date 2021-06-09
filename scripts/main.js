// Сужаем верхнюю шапку, меняя класс

setTimeout(function changeHeader () {
        document.querySelector('.container-fluid').className = 'container';
}, 100);