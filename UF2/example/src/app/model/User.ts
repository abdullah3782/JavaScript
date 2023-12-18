export class User {
    #nom!: string;
    #cognom!: string;
  
    constructor(nom: string, cognom: string) {
      this.#nom = nom;
      this.#cognom = cognom;
    }
  
    get nom(): string {
      return this.#nom;
    }
  
    set nom(nuevoNom: string) {
      this.#nom = nuevoNom;
    }
  
    get cognom(): string {
      return this.#cognom;
    }
  
    set cognom(nuevoCognom: string) {
      this.#cognom = nuevoCognom;
    }
  }
  