/*Modulo de Orientacao a objeto em JavaScript*/ 

class Carro{
    velocidade =  0 ;
    nivelCombustivel= 100;
    ligado = false;
    cor;
    constructor(cor){
        this.cor = cor;
    }
    ligar(){
        if(this.ligado){
            console.log('Carro já esta ligado');
        }else{
            this.ligado = true; 
        }
    }    
}
let carro = new Carro("Vermelhes");
carro.ligar;
console.log(carro.nivelCombustivel);
console.log(carro.cor);
let carro2 = Object.create(carro);
console.log(carro2.cor);

class CarroQuebrado extends Carro{}
let carro3 = new CarroQuebrado()
console.log(carro3);

function automovel(){
    this.velocidade =  0 ;
    this.nivelCombustivel= 100;
    this.ligado = false;
    this.cor;
  
    this.ligar = function(){
        if(this.ligado){
            console.log('Carro já esta ligado');
        }else{
            this.ligado = true; 
        }
    }    
}
console.log(carro2.constructor.name)

let objeto1 = { 
    "funcao1": function(){
        console.log("funcao1");
    }
}
objeto1.funcao1();