class Coche{

    constructor(modelo,velocidad,antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }
    aumentarVelocidad(){
        this.velocidad += 1;
    }
    reducirVelocidad(){
        this.velocidad -= 1;
    }
}
class AutoBus extends Coche{
    constructor(modelo,velocidad,antiguedad){
        super(modelo,velocidad,antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "La altura del bus es: "+this.altura;
    }
}


var coche1 = new Coche('BMW', 200, 2017);
var autoBus1 = new AutoBus('Pegasus', 200, 2010)

console.log(autoBus1.mostrarAltura());

document.write("<h1>"+coche1.velocidad+"</h1>");
for(i= coche1.velocidad; i < 300; i++){
    coche1.aumentarVelocidad();
}
document.write("<h1>"+coche1.velocidad+"</h1>");


