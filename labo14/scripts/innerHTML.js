function setup() {
    let btn = document.getElementById("btnWijzig");
    btn.addEventListener("click", wijzigTekst);
}

function wijzigTekst() {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}

setup();
