import { Animal } from './quest1/Animal';
import { FilhoteInterface, Filhote } from './quest2/InterfaceFilhote';
import { IComidaDePet, PequenoRoedor, Hamster, Furao } from './quest3/Animal2';

console.log("QUESTÃO 1");

const porco = new Animal("Porquinha Lili");

porco.exibirAnimal();

porco.cadastrar("Rosa com bolinhas preta");
porco.cadastrar("Ama frutas");
porco.cadastrar("Mãe de 3 porquinhos");
porco.cadastrar("Alegre");


console.log(porco.exibirCaracteristica());



console.log("QUESTÃO 2")
const filhote = new Filhote(["Rosa", "Marrom"], 1);

console.log("Cores:", filhote.cores);
console.log("Pelagem:", filhote.pelagem);
console.log("Tutor:", filhote.tutor);

filhote.adotar("Vanessa");

console.log("Tutor após adoção:", filhote.tutor);

console.log("QUESTÃO 3");

const furaoLindo = new Furao();
const hamsterLindo = new Hamster();

console.log(furaoLindo.especie)

console.log(furaoLindo.comer('sementes'));
console.log(furaoLindo.comer('vegetais'));

furaoLindo.cavar();
console.log(furaoLindo.estaFeliz());

console.log(hamsterLindo.especie)

console.log(hamsterLindo.comer('sementes')); 
console.log(hamsterLindo.comer('plantas')); 

hamsterLindo.correr();
console.log(hamsterLindo.estaFeliz()); 