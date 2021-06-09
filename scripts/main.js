setTimeout(function changeHeader () {
        console.log("Поймали элемент");
        document.querySelector('.container-fluid').classList.remove('container-fluid');
        document.querySelector('.container-fluid').classList.add('container');
}, 1000);

changeHeader();