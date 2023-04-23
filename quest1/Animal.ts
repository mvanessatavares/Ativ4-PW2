export class Animal {
    private nome: string;
    private caracteristicas: string[] = [];
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    public exibirAnimal() {
      console.log(this.nome);
    }
  
    public cadastrar(característica: string) {
      this.caracteristicas.push(característica);
    }
  
    public exibirCaracteristica() {
      const main = Math.floor(Math.random() * this.caracteristicas.length);
      return this.caracteristicas[main];
    }
  }
  