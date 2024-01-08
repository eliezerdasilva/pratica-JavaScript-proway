
class Car{
    velocidade =  0 ;
    nivelCombustivel= 100;
    ligado = false;
    cor;
    constructor(cor){
        this.cor = cor;
    }
    ligar(){
        this.ligado = true;
    }    
    desligar(){
        this.ligado = false; 

    }
    andar(){
        if(!this.ligado) this.ligar()
        if(this.velocidade>0)console.log("Carro já em movimento")
        this.velocidade = 40;
    }
}
function calculaKm(litro, km){
return litro/km
}
export default calculaKm;
export{ Car };