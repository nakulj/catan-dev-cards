import { Client } from 'boardgame.io/client';
import { Game } from './Game';

class GameClient {
  constructor() {
    this.client = Client({ game: Game });
    this.client.start();
  }
}

const app = new GameClient();
