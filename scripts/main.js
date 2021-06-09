const header = document.querySelector(".container-fluid");

function changeHeader (el) {
    if (el != null) {
        el.class = ".container";
    }

    else {
        console.log("Менять нечего")
    }

}

changeHeader(header);