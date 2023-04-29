import CharacterStoned from './characterStoned.js';

export default class Magician extends CharacterStoned {
  constructor(name) {
    super(
      name,
      'Magician',
      100,
      1,
      10,
      40,
    );
  }
}
