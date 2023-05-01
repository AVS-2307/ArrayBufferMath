// jshint esversion:6
import Character from './character.js';

export default class StonedCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
  }

  get attack() {
    let attack = +(this.setAttack - (this.setAttack * ((this.distance - 1) / 10))).toFixed();
    if (this.setStoned) {
      attack = +(attack - Math.log2(this.distance) * 5).toFixed();
      if (attack < 0) {
        return 0;
      }
      return attack;
    }
    return attack;
  }

  set attack(damage) {
    this.setAttack = damage;
  }

  get stoned() {
    return this.setStoned;
  }

  set stoned(stoned) {
    this.setStoned = stoned;
  }
}
