let familie = ["Yari", "Birger", "Wissem", "Adrian", "Robberto"];

console.log("Aantal familieleden:", familie.length);

console.log("Eerste familielid:", familie[0]);
console.log("Derde familielid:", familie[2]);
console.log("Vijfde familielid:", familie[4]);

function VoegNaamToe(array, naam) {
    array.push(naam);
}

let nieuweNaam = prompt("Geef een extra familielid in:");
VoegNaamToe(familie, nieuweNaam);


console.log("Array na toevoegen:", familie);

let familieString = familie.toString();
console.log("Familie als string:", familieString);
