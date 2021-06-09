setTimeout(function changeHeader () {
        console.log("Поймали элемент");
        const old = document.querySelector('.container-fluid').classList.remove('container-fluid');
        const newEl = old.classList.add('container');
        return newEl;
}, 1000);

changeHeader();