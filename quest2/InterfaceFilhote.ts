export interface FilhoteInterface {
    readonly cores: string[];
    readonly pelagem: number;
    readonly tutor: string | undefined;
}
  
export class Filhote implements FilhoteInterface {
    readonly cores: string[];
    readonly pelagem: number;
    tutor: string | undefined;
  
    constructor(cores: string[], pelagem: number) {
      this.cores = cores;
      this.pelagem = pelagem;
      this.tutor = undefined;
    }
  
    adotar(tutor: string): void {
      this.tutor = tutor;
    }
}