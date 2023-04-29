import Character from '../character.js';

test('Correct character creation', () => {
    const description = new Character('Nick', 'Bowman');

    const result = {
        name: 'Nick', 
        type: 'Bowman', 
        level: 1,
        health: 100    
    };
    expect(description).toEqual(result);
});

test('Increase character level', () => {
    const description = new Character('Nick', 'Bowman');
    description.health = 50;
    description.attack = 10;
    description.defense = 10;
    description.levelUp();

    const result = {
        name: 'Nick', 
        type: 'Bowman',
        health: 100, 
        level: 2, 
        attack: 12, 
        defense: 12
    };
    expect(description).toEqual(result);
});

test('Impossible to increase level of dead character', () => {
  function test() {
    const description = new Character('Nick', 'Bowman');
    description.health = 0;
    return description.levelUp();
  }
  expect(test).toThrow("It's impossible to increase level of dead character");
});


test('Name length error', () => {
  const description = () => new Character('Bravo111111', 'Bowman');
  expect(description).toThrow('Name length should be between 2 and 10 letters');
});

test('Name type error', () => {
    const description = () => new Character(15, 'nsw');
    expect(description).toThrow('Name should be string');
});

test('Type error', () => {
    const description = () => new Character('Nick', 15);
    expect(description).toThrow('Type should be string');
});

test('Type error2', () => {
    const description = () => new Character('Nick', '15');
    expect(description).toThrow('Type should be one of this: Bowman, Daemon, Magician, Swordsman, Undead, Zombie');
});

test('Check Damage', () => {
    const description = new Character('Nick', 'Bowman'); 
    description.health = 50; 
    description.defense = 25;
    const points = 15;
    description.damage(points);      
    expect(description.health).toBeCloseTo(50 - points * (1 - description.defense / 100));    
});
