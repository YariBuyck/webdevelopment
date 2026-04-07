const setup = () => {
    let jsonString = `{"voornaam":"Yari","familienaam":"Buyck","geboorteDatum":"2007-07-02T00:00:00.000Z","adres":{"straat":"Vierlindenstraat 1","postcode":"8710","gemeente":"Wielsbeke"},"isIngeschreven":true,"namenVanTeamgenoten":["Messi","Neymar","Ronaldo","Vossen"],"aantalAutos":2}`;

    let student2 = JSON.parse(jsonString);

    console.log(student2.familienaam);
};

window.addEventListener("load", setup);