let nombres : string [] = new Array(2);
let numeros : number [] = new Array(3) 

nombres[0] = "";
nombres[1] = "";

numeros[0] = 0;
numeros[1] = 0;
numeros[2] = 0;

for (let index = 0; index < nombres.length; index++) {
nombres[index] = prompt("ingrese dos nombres");

}
for (let contador = 0; contador < numeros.length; contador++) {
  nombres[contador] = prompt("ingrese dos numeros");

}


  
}
for (let contador = 0; contador < numeros.length; contador++) {
  console.log (`el nombre ingresado,${contador},es, ${nombres[contador]} y el numero ingresado es,${numeros[contador]}´)}


  
}