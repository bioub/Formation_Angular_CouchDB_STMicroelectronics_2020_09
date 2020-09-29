const prenoms = ["Jean", "Eric", "Romain"];

// Algo :
// Créer un nouveau tableau avec les prénoms
// de 4 caractères uniquement et mis en majuscules

// style de programmation -> paradigme
// programmation impérative (for, if...)

const prenoms4CharUpper = [];

for (let i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];

  if (prenom.length === 4) {
    const prenom4Char = prenom;
    prenoms4CharUpper.push(prenom4Char.toUpperCase());
  }
}

// programmation fonctionnelle (array depuis ES5)

// (prenom) => prenom.length === 4
// equivaut à
// function (prenom) { return prenom.length === 4; }

const prenoms4CharUpper2 = prenoms
  .filter((prenom) => prenom.length === 4)
  .map((prenom) => prenom.toUpperCase());
console.log(prenoms4CharUpper2); // ['JEAN', 'ERIC']

const data = [
  {
    _id: "dell-streak-7",
    _rev: "1-4EG5H5EYHETRY5",
    name: "Dell Streak 7",
    hardware: { fmRadio: true },
  },
  {
    _id: "motorola-bravo",
    _rev: "1-76746357856GFD65",
    name: "Motorola Bravo",
    hardware: { fmRadio: false },
  },
];

// Transforme le tableau en une version simplifié (sans _rev et avec fmRadio applati)
const phonesList = data.map((el) => ({
  _id: el._id,
  name: el.name,
  fmRadio: el.hardware.fmRadio,
}));

console.log(phonesList);
/*
[
  { _id: 'dell-streak-7', name: 'Dell Streak 7', fmRadio: true },
  { _id: 'motorola-bravo', name: 'Motorola Bravo', fmRadio: false }
]
*/

// Filtre pour ne récupérer que les téléphone qui on la radio fm
const phonesFmRadio = phonesList.filter((el) => el.fmRadio);
console.log(phonesFmRadio);
/*
[
  { _id: 'dell-streak-7', name: 'Dell Streak 7', fmRadio: true }
]
*/

function map(array, transformFunction) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const newValue = transformFunction(array[i]);
    newArray.push(newValue);
  }

  return newArray;
}

const phoneList2 = map(data, (el) => ({
  _id: el._id,
  name: el.name,
  fmRadio: el.hardware.fmRadio,
}));

console.log(phoneList2);
