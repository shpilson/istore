setTimeout(function changeHeader () {
        console.log("Поймали элемент");
        document.querySelector('.container-fluid').className = 'container';
}, 100);