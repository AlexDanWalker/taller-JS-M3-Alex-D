// Parte 2: Variables y Tipos de Datos

// Se declara una variable tipo texto (string) y se imprime un saludo personalizado.
let nombre = "Daniel";
console.log("Hola", nombre);

// Se declaran variables con distintos tipos de datos: entero, decimal y cadena de texto.
let entero = 5;
let decimal = 5.5;
let cadena_texto = "Texto de ejemplo";

// Se muestran las variables anteriores en la consola.
console.log("¿Tu numero favorito es", entero, "?");
console.log("Tu numero favorito es", entero, "y tu numero decimal es", decimal);
console.log("Tu cadena de texto es:", cadena_texto);

// Se declara una constante (valor que no puede cambiar) para representar el valor de PI.
const PI = 3.1416;
console.log("El valor de PI es:", PI);

// Se declara una variable sin valor asignado. Su valor será `undefined`.
let vacio;
console.log("El valor de la variable vacio es:", vacio);

// Se declaran una variable booleana y una con valor nulo.
let booleano = true;
let text = null;
console.log("El valor de la variable booleano es:", booleano);
console.log("El valor de la variable text es:", text);

// Parte 3: Entrada y Salida de Datos

// Se solicita al usuario que ingrese su edad y se convierte a número.
let edad = prompt("Ingresa tu edad:");
edad = Number(edad);

// Se muestra la edad solo si el valor ingresado es mayor que cero.
if (edad > 0) {
    console.log("Tu edad es", edad);
}

// Se muestra un mensaje de bienvenida en una ventana emergente.
alert("Bienvenido a mi código");

// Se pregunta al usuario si desea continuar. El resultado es un valor booleano.
let continuar = confirm("¿Deseas seguir navegando en la página?");
console.log("Continuar:", continuar);

// Parte 4: Operadores

// Se declaran dos variables numéricas.
let num1 = 10;
let num2 = 5;

// Se realizan e imprimen las operaciones básicas: suma, resta, multiplicación,división y modulo.
let suma = num1 + num2;
console.log("El resultado de la suma es:", suma);

let resta = num1 - num2;
console.log("El resultado de la resta es:", resta);

let multiplicacion = num1 * num2;
console.log("El resultado de la multiplicación es:", multiplicacion);

let division = num1 / num2;
console.log("El resultado de la división es:", division);

let modulo = num1 % num2;
console.log("El modulo es:", modulo);


// Se declaran dos cadenas de texto y se concatenan en una nueva variable.
let variable1 = "Hola, ";
let variable2 = "mundo!";
let variable_concatenada = variable1 + variable2;
console.log(variable_concatenada);

// Se evalúan distintas comparaciones y operadores lógicos.
console.log(5 == "5");      // Comparación con coerción de tipo (true)
console.log(5 === "5");     // Comparación estricta sin coerción (false)
console.log(true && false); // AND lógico (false)
console.log(false || true); // OR lógico (true)
console.log(!true);         // NOT lógico (false)

// Parte 5: Condicionales


// Se solicita un número al usuario y se evalúa si es mayor, menor o igual a 10.
let numero = Number(prompt("Ingresa un número:"));
if (numero > 10) {
    console.log("El número es mayor que 10");
} else if (numero < 10) {
    console.log("El número es menor que 10");
} else {
    console.log("El número es igual a 10");
}

// Se solicita un nombre y se compara si es igual a "Admin".
let usuario = prompt("¿Cuál es tu nombre?");
if (usuario === "Admin") {
    console.log("¡Bienvenido, administrador!");
} else {
    console.log("Hola " + usuario);
}

// Se solicita un número y se determina si es par o impar usando el operador ternario.
let numero2 = Number(prompt("Ingresa un número:"));
let mensajeParImpar = (numero2 % 2 === 0) ? "Es par" : "Es impar";
console.log(mensajeParImpar);

// Parte 6: Consola del Navegador

// Muestra diferentes tipos de mensajes en la consola para depuración o comunicación.
console.info("Este es un mensaje informativo");
console.warn("Este es un mensaje de advertencia");
console.error("Este es un mensaje de error");

// Agrupación de mensajes en la consola.
console.group("Mensajes agrupados");
console.log("Mensaje prueba 1");
console.log("Mensaje prueba 2");
console.groupEnd();

// Mide el tiempo de ejecución de un bloque de código.
console.time("Tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {} // Bucle que se ejecuta 1 millón de veces.
console.timeEnd("Tiempo de ejecución");

//Parte 7//

//Ya hay una serie de codigos que comente arriba, ya que estoy haciendo todos los puntos en el mismo archivo//