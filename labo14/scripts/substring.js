const toonSubstring = () => {
    let tekst = document.getElementById("txtString").value;
    let start = document.getElementById("txtStart").value;
    let einde = document.getElementById("txtEinde").value;

    let resultaat = tekst.substring(start, einde);

    document.getElementById("txtOutput").innerHTML = resultaat;
}

let btn = document.getElementById("btnSubstring");
btn.addEventListener("click", toonSubstring);
