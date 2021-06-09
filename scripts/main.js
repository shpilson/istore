const header = document.querySelector(".container-fluid");

function changeHeader (el) {
    if (el !== null) {
        console.log("Поймали элемент");
        el.className = "container";
    }

    else {
        console.log("Менять нечего")
    }

}

changeHeader(header);