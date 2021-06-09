const header = document.querySelector(".container-fluid");

setTimeout(function changeHeader (el) {
    if (el !== null) {
        console.log("Поймали элемент");
        el.className = "container";
    }

    else {
        console.log("Менять нечего")
    }

}, 1000);

changeHeader(header);