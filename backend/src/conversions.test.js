import assert from 'node:assert/strict';
import test from 'node:test';
import { convert, getLengthFunFact } from './conversions.js';

test('convertit une longueur en mètres', () => {
  assert.equal(convert({ category: 'length', from: 'foot', to: 'meter', value: 10 }), 3.048);
});

test('associe la longueur à une référence proche', () => {
  assert.match(getLengthFunFact(1.7), /taille moyenne d'un adulte/);
});

test('compare les valeurs négatives en valeur absolue', () => {
  assert.match(getLengthFunFact(-30), /^En valeur absolue/);
});

test('retourne un message particulier pour zéro', () => {
  assert.match(getLengthFunFact(0), /longueur nulle/);
});

test('ignore les valeurs non finies', () => {
  assert.equal(getLengthFunFact(Number.NaN), null);
});
