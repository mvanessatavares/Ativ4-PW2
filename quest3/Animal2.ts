export type IComidaDePet = "insetos" | "frutas" | "plantas" | "sementes" | "vegetais";

export abstract class PequenoRoedor {
    readonly especie: string;
    felicidade: number = 0;
  
    constructor(especie: string) {
      this.especie = especie;
    }

    abstract comer(comida: IComidaDePet): boolean; 
  
    estaFeliz(): boolean {
      return this.felicidade > 0;
    }
} 

export class Furao extends PequenoRoedor {
    constructor() {
      super("Furão"); 
    }
  
    cavar(): void {
      this.felicidade ++;
    }
  
    comer(comida: IComidaDePet): boolean {
      return comida === "insetos" || comida === "plantas" || comida === "sementes" || comida === "vegetais";
    }
}

export class Hamster extends PequenoRoedor{
    constructor(){
        super("Hamster");
    }

    correr(): void{
        this.felicidade ++;
    }

    comer(comida: IComidaDePet): boolean {
        return true;
    }
}



