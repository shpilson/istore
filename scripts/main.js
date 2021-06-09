const header = document.querySelector(".container-fluid");

function changeHeader (el) {
    if (el == 1) {
        el.div = ".container";
    }
    else {
        console.log("Менять нечего")
    }
}

changeHeader(header);