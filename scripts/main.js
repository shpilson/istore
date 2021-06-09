const header = document.querySelector(".container-fluid");

function changeHeader (el) {
    if (el != 0) {
        el.class = ".container";
    }

    else {
        console.log("Менять нечего")
    }

}

changeHeader(header);