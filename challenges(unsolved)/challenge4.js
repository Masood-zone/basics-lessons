//**Challenge 4 — Label Transformer (array.map)**
const weights = [12, 5, 30, 7];
const weightsInKg = weights.map((weight) => `${weight}kg`);
console.log(weightsInKg);

const weightsInCentimeters = weights.map((weight) => `${weight}cm`);
console.log(weightsInCentimeters);

const weightsInNothing = weights.filter((weight) => weight > 8);
console.log(weightsInNothing);