import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((resolve) => json(resolve))
      .then((resolve) => new GameSaving(JSON.parse(resolve)));
  }
}
