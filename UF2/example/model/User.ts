export class User{
  
  #nom:string;
  #cognom:string;

  constructor(nom:string, cognom:string){
    this.#nom=nom;
    this.#cognom=cognom;
  }

  get nom():string{
    return this.#nom
  }
  get cognom():string{
    return this.#cognom
  }

  set nom(nom:string){
    this.#nom=nom;
  }
  set cognom(cognom:string){
    this.#cognom=cognom;
  }
}
