import Daemon from './daemon.js';
import Magician from './magician.js';


const magician = new Magician('Mag');

const daemon = new Daemon('Devil');

console.log(magician, daemon);
