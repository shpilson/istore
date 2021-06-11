// Сужаем верхнюю шапку, меняя класс

setTimeout(function changeHeader() {
    document.querySelector('.container-fluid').className = 'container';
}, 100);


// Навигация -> Перезвоните

const nav = document.querySelector(".nav.sf-menu");

function addNavContacts() {
    advantage1.insertAdjacentHTML('afterend', `
    <div class="nav_contacts">
    <a href="tel:null" role="link">+7 (968)<b>327-27-00</b></a>
    </div>`)
};
