const deck = require('./deck.js')

test('constant import', () => { expect(deck.Knight).toBe('Knight'); });

test('make', () => {
  d = deck.make();
  expect(d.length).toBe(25);
  expect(d.filter(c => c == deck.Knight).length).toBe(14);
});
