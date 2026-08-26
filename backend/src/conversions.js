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
