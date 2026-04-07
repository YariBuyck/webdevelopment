const geboortedatum = new Date(2007, 6, 2);

const vandaag = new Date();

const verschil = vandaag - geboortedatum;

const verschilInDagen = Math.floor(verschil / (1000 * 60 * 60 * 24));

console.log("Aantal dagen:", verschilInDagen);