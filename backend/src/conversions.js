export const conversionCategories = {
  length: {
    label: 'Longueur',
    units: {
      meter: { label: 'Mètres', symbol: 'm', factor: 1 },
      foot: { label: 'Pieds', symbol: 'ft', factor: 0.3048 },
      kilometer: { label: 'Kilomètres', symbol: 'km', factor: 1000 },
      mile: { label: 'Miles', symbol: 'mi', factor: 1609.344 },
      inch: { label: 'Pouces', symbol: 'in', factor: 0.0254 }
    }
  },
  volume: {
    label: 'Volume',
    units: {
      liter: { label: 'Litres', symbol: 'L', factor: 1 },
      gallon: { label: 'Gallons américains', symbol: 'gal', factor: 3.785411784 },
      milliliter: { label: 'Millilitres', symbol: 'mL', factor: 0.001 },
      cubicMeter: { label: 'Mètres cubes', symbol: 'm³', factor: 1000 }
    }
  },
  mass: {
    label: 'Masse',
    units: {
      kilogram: { label: 'Kilogrammes', symbol: 'kg', factor: 1 },
      pound: { label: 'Livres', symbol: 'lb', factor: 0.45359237 },
      gram: { label: 'Grammes', symbol: 'g', factor: 0.001 },
      ounce: { label: 'Onces', symbol: 'oz', factor: 0.028349523125 }
    }
  },
  temperature: {
    label: 'Température',
    units: {
      celsius: { label: 'Celsius', symbol: '°C' },
      fahrenheit: { label: 'Fahrenheit', symbol: '°F' },
      kelvin: { label: 'Kelvin', symbol: 'K' }
    }
  }
};

const lengthReferences = [
  { meters: 0.001, label: "l'épaisseur d'une carte bancaire" },
  { meters: 0.01, label: "la longueur d'une abeille" },
  { meters: 0.0856, label: "la largeur d'une carte bancaire" },
  { meters: 0.3, label: "la longueur d'une règle d'école" },
  { meters: 1.7, label: "la taille moyenne d'un adulte" },
  { meters: 2.03, label: "la hauteur d'une porte standard" },
  { meters: 12, label: "la longueur d'un autobus urbain" },
  { meters: 30, label: "la longueur d'une baleine bleue" },
  { meters: 105, label: "la longueur d'un terrain de football" },
  { meters: 330, label: "la hauteur de la tour Eiffel" },
  { meters: 8848.86, label: "la hauteur du mont Everest" }
];

const formatRatio = (ratio) => new Intl.NumberFormat('fr-FR', {
  maximumFractionDigits: ratio < 10 ? 1 : 0
}).format(ratio);

export function getLengthFunFact(valueInMeters) {
  if (!Number.isFinite(valueInMeters)) return null;

  const size = Math.abs(valueInMeters);
  if (size === 0) return "Une longueur nulle : impossible de faire plus court !";

  const reference = lengthReferences.reduce((closest, candidate) => {
    const closestDistance = Math.abs(Math.log(size / closest.meters));
    const candidateDistance = Math.abs(Math.log(size / candidate.meters));
    return candidateDistance < closestDistance ? candidate : closest;
  });
  const ratio = size / reference.meters;
  const prefix = valueInMeters < 0 ? 'En valeur absolue, cette longueur' : 'Cette longueur';

  if (ratio >= 0.8 && ratio <= 1.25) {
    return `${prefix} est proche de ${reference.label}.`;
  }
  if (ratio > 1) {
    return `${prefix} représente environ ${formatRatio(ratio)} fois ${reference.label}.`;
  }
  return `${prefix} est environ ${formatRatio(1 / ratio)} fois plus petite que ${reference.label}.`;
}

function toCelsius(value, unit) {
  if (unit === 'celsius') return value;
  if (unit === 'fahrenheit') return (value - 32) * 5 / 9;
  if (unit === 'kelvin') return value - 273.15;
}

function fromCelsius(value, unit) {
  if (unit === 'celsius') return value;
  if (unit === 'fahrenheit') return value * 9 / 5 + 32;
  if (unit === 'kelvin') return value + 273.15;
}

export function convert({ category, from, to, value }) {
  const group = conversionCategories[category];
  if (!group || !group.units[from] || !group.units[to]) return null;

  if (category === 'temperature') return fromCelsius(toCelsius(value, from), to);
  return (value * group.units[from].factor) / group.units[to].factor;
}
