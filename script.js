//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log('Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5');


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let myString = "Hello";
let myNumber = 28;
let myBoolean = true;
let myNull = null;
let myObject =  { nombre: "Adi", edad: 30};
let myUndefined = undefined;
let myArray = [1, 2, 3];

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myNull);
console.log(myObject);
console.log(myUndefined);
console.log(myArray);
//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

 const postres = ['helado', 'tarta', 'pastel'];
 
 console.log(postres);


//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder = {
    name: "Adi",
    old: 28 
};

console.log(coder);


//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myNull);
console.log(myObject);
console.log(myUndefined);
console.log(myArray);

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let number1 = 10;
let number2 = 5;
let result = number1+number2;

console.log(result)


//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let number3 = 10;
let number4 = 5;
let result2 = number3-number4;

console.log(result2)


//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let number5 = 5;
let number6 = 6;
let result3 = number5*number6;

console.log(result3)


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let number7 =25;
let number8 =5;
let result4 = number7/number8;

console.log(result4)


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let number9 = 1;
let number10 = 2;
let result5 =  number9==number10;

console.log(result5)


// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let number11 = 1;
let number12 = 2; 
let result6 = number11 == number12;

let result7 = number11 !== number12;

console.log(result7)


//Ejercicio 11: completa el ejercicio

// Realiza la operación de comparación que consideres para que el resultado en consola sea true

let num1 = 15
let num2 = 20

let comparacion8 = num1 == num2;

let comparacion9 = num1 !==num2;

console.log(comparacion9)


//Ejercicio 12: completa el ejercicio
//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad

let num3 = 1;
let num3AsString = "1";

let result10 = num3 === num3AsString;

console.log(result10) 

//Ejercicio 13: completa el ejercicio

//Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.

let result11 = num3 === parseInt(num3AsString);

console.log(result11);

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let firstName = "Adiyie"
let lastName = "Radoine"

let fullName = firstName + " " + lastName

console.log(fullName); 

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) 
