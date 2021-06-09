const header = document.querySelector(".container-fluid");

function changeHeader (el) {
    if (el) {
        console.log("Поймали элемент");
       // el.class = ".container";
    }

    else {
        console.log("Менять нечего")
    }

}

changeHeader(header);