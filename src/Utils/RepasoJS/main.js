// alert('Hola mundo');

var nombre = "Nicolás Meléndez";
var altura = 160;
var conte = nombre + " " + altura;


// datos.innerHTML = conte;


// si usas el + se suman y usas = cambia todo
if(altura <= 190){
    datos.innerHTML += `
        <h1>Eres bajo</h1>
    `;
}else{
    datos.innerHTML += `
    <h1>Eres alto</h1>
`;
}

for(var i = 2020; i <= 2022; i++){
    datos.innerHTML += `<h5>${i}</h5>`;
}

function MuestraEsto(nombre, altura){
    var misDatos = `
    <h1>Hola mi nombre es ${nombre}</h1>
    <p>Mi altura es ${altura}</p>
    `; 
    return misDatos;
}

function ImprimirDatos(){
    var datos = document.getElementById('datos');
    datos.innerHTML =MuestraEsto("Nicolás Meléndez", 170);
}

ImprimirDatos();

var nombres = ['Victor','Antonio','Nicolas'];

// for(i = 0; i < nombres.length; i++){
//     document.write(nombres[i] + '<br />');
// }

nombres.forEach((nombre)=>{
    document.write(nombre + '<br/>');
})

var valorSaludo = "Hola a todos";

var saludar = new Promise((resolve,rejects)=>{

    setTimeout(()=>{
        let saludo = valorSaludo;
        if(saludo){
            resolve(saludo)
        }else{
            rejects('No hay saludo disponible');
        }
    }, 2000);

})

saludar.then(resultado=>{
    alert(resultado);
}).catch(error=>{
    alert(error)
})