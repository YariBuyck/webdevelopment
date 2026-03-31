let global = {
    AANTAL_AFBEELDINGEN:12,
    AANTAL_KAARTEN_PER_AFBEELDING:2,
    AANTAL_KAARTEN_HORIZONTAAL:6,
    PREFIX_KAART_PATH:"image/kaart",
    SUFFIX_KAART_PATH:".png",
    ACHTERKANT_PATH:"image/achterkant.png",
}

const shuffle = (array) => {
    {
        array.sort((a, b) => {
            return Math.random() - 0.5;
        });
    }
}

const toonGoed = () => {
    let kaarten = document.getElementsByClassName("voorkant");
    let i;
    document.getElementById("goed").play();
    for (i = 0; i < kaarten.length; i++) {
        kaarten[i].className += " goed";
    }
}

const toonFout = () => {
    let kaarten=document.getElementsByClassName("voorkant");
    document.getElementById("fout").play();
    for (i = 0; i < kaarten.length; i++) {
        kaarten[i].className += " fout";
    }
}

const draaiKaartenMetVoorkantNaarAchterkant = () => {
    let kaartenMetVoorkant=document.getElementsByClassName("voorkant");
    while (kaartenMetVoorkant.length>0) {
        kaartenMetVoorkant[0].setAttribute("src", global.ACHTERKANT_PATH);
        kaartenMetVoorkant[0].className="kaart achterkant";
    }
    document.getElementById("playField").className="";
}

const verwijderKaartenMetVoorkant = () => {
    let kaart;
    let kaartenMetVoorkant=document.getElementsByClassName("voorkant");
    while (kaartenMetVoorkant.length>0) {
        kaart=kaartenMetVoorkant[0];
        kaart.removeEventListener("click", klikOpKaart);
        kaart.parentNode.removeChild(kaart);
    }
    document.getElementById("playField").className="";
    controleerSpelGedaan();
}

const controleerSpelGedaan = () => {
    let playField;
    let kaarten=document.getElementsByClassName("kaart");
    if (kaarten.length == 0) {
        playField=document.getElementById("playField");
        let savedHeight=playField.clientHeight;
        playField.innerHTML="";
        playField.style.height=savedHeight+"px";
        playField.className="klaar";
    }
}

const controleerOpOvereenkomst = (kaarten) => {
    let kaart=kaarten[0];
    let allenGelijk=true;
    let i;
    for (i=1;i<kaarten.length;i++) {
        if (kaart.getAttribute("src") != kaarten[i].getAttribute("src")) {
            allenGelijk=false;
            break;
        }
    }
    if (allenGelijk) {
        window.setTimeout(verwijderKaartenMetVoorkant, 1000);
        window.setTimeout(toonGoed, 500);
    } else {
        window.setTimeout(draaiKaartenMetVoorkantNaarAchterkant, 1000);
        window.setTimeout(toonFout, 500);
    }
}

const klikOpKaart = (e) => {
    if (document.getElementById("playField").className!="geblokkeerd") {
        let kaart= e.target;
        let kaartenMetVoorkant=document.getElementsByClassName("voorkant");
        document.getElementById("draai").play();
        kaart.className="kaart voorkant";
        kaart.setAttribute("src", kaart.getAttribute("data-imageSource"));
        if (kaartenMetVoorkant.length==global.AANTAL_KAARTEN_PER_AFBEELDING) {
            controleerOpOvereenkomst(kaartenMetVoorkant);
            document.getElementById("playField").className="geblokkeerd";
        }
    }
}

const addVak = (parent, kaartNummer) => {
    let vak=document.createElement("span");
    let kaart=document.createElement("img");

    kaart.className="kaart achterkant";
    kaart.setAttribute("src", global.ACHTERKANT_PATH);
    kaart.setAttribute("data-imageSource", global.PREFIX_KAART_PATH+kaartNummer+global.SUFFIX_KAART_PATH);
    kaart.addEventListener("click", klikOpKaart);

    vak.className="vak";
    vak.appendChild(kaart);

    parent.appendChild(vak);
}

const initialize = () => {
    let playField=document.getElementById("playField");
    let i;
    let kaartNummers=[];
    let lineBreakElement;
    let aantalKaarten = global.AANTAL_AFBEELDINGEN * global.AANTAL_KAARTEN_PER_AFBEELDING;

    for (i=0;i<aantalKaarten;i++) {
        kaartNummers.push(i%global.AANTAL_AFBEELDINGEN);
    }

    shuffle(kaartNummers);

    for (i=0;i<aantalKaarten;i++) {
        if (i%global.AANTAL_KAARTEN_HORIZONTAAL==0 && i!=0) {
            lineBreakElement=document.createElement("br");
            playField.appendChild(lineBreakElement);
        }
        addVak(playField, kaartNummers[i]);
    }
}

window.addEventListener("load", initialize);