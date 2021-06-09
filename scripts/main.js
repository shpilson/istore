setTimeout(function changeHeader () {
        console.log("Поймали элемент");
        const old = document.querySelector('.container-fluid').className = 'container';
}, 1000);

changeHeader();