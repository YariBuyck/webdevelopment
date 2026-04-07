const setup = () => {
    let student1 = {
        voornaam : "Yari",
        familienaam : "Buyck",
        geboorteDatum : new Date("2007-07-02"),
        adres : { // een object
            straat : "Vierlindenstraat 1",
            postcode : "8710",
            gemeente : "Wielsbeke"
        },
        isIngeschreven : true,
        namenVanTeamGenoeten :
            ["Messi", "Neymar", "Ronaldo", "Vossen"], // een array
        aantalAutos : 2

    };

    let jsonString = JSON.stringify(student1);
    console.log(jsonString);
}

window.addEventListener("load", setup);