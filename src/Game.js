const deck = require('./deck.js')

export const Game = {
  setup : () => ({mainDeck : deck.make(), playerDecks : Array(4).fill([])}),

  moves : {
    draw : (G, ctx) => { G.playerDecks[ctx.currentPlayer].push(G.mainDeck.pop());},
  },
};
