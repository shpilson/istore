// Сужаем верхнюю шапку, меняя класс

setTimeout(function changeHeader() {
    document.querySelector('.container-fluid').className = 'container';
}, 100);


// Навигация -> Перезвоните

setTimeout(function addNavContacts() {
    const nav = document.querySelector(".nav.sf-menu");
    nav.insertAdjacentHTML('afterend', `
    <div class="nav_contacts">
    <a href="tel:null" role="link">+7 (968)<b>327-27-00</b></a>
    </div>
    
    <div class="nav_text">
        Хочешь дешевле — позвони!
    </div>`)
}, 100);
