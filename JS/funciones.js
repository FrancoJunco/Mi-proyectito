function darBienvenida(){
   alert("Bienvenido a BonitaNails!!!");
}
 
darBienvenida();

for (let i = 1; i <=1; i++){

    let ingresarNombre = prompt("Ingresar Nombre");
    alert("Bienvenido "+i+" Nombre: "+ingresarNombre);
}
function calcularIva(precio){
    let totalConIva = precio * 1.21
    alert("el precio total con Iva incluido es $"+totalConIva);
}

let precioProd = parseFloat(prompt("ingresa el precio del producto"));

calcularIva(precioProd);

