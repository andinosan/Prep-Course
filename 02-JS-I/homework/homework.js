// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Aqui esta es mi string';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 99;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var newstr, newresultado;
  // En mis funciones, hago una distribución de tareas. Los argumentos de la función sólo son usados para
  // recibir los datos, son otras variables locales dentro de la función las que actúan en el procesamiento y
  // la devolución de resultados...

  newstr = str;
  // ... entonces, en una variable local copio esos datos, el procesamiento va a afectar únicamente esa
  // variable local...

  newresultado = newstr;
  // ... cuando ya está terminado el proceso de esos datos y ya tengo su resultado, copio ese resultado a otra
  // variable, que es la que va a ser específicamente usada para la devolución de la función...

  return newresultado;
  // ... en este caso en particular es una función muy sencilla que sólo repite el texto ingresado, pero más
  // adelante en funciones más complejas que tienen varios parámetros, operaciones, posibles resultados, etc.
  // se verá con más detalle el funcionamiento de mi enfoque para funciones.
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var newx, newy, newsuma, newresultado;
  newx = x;
  newy = y;
  newsuma = newx + newy;
  newresultado = newsuma;
  return newresultado;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var newx, newy, newresta, newresultado;
  newx = x;
  newy = y;
  newresta = newx - newy;
  newresultado = newresta;
  return newresultado;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var newx, newy, newmultiplica, newresultado;
  newx = x;
  newy = y;
  newmultiplica = newx * newy;
  newresultado = newmultiplica;
  return newresultado;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var newx, newy, newdivide, newresultado;
  newx = x;
  newy = y;
  newdivide = newx / newy;
  newresultado = newdivide;
  return newresultado;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var newx, newy, newsonIguales, newresultado;
  newx = x;
  newy = y;
  if (newx === newy)
  {
    newsonIguales = true;
  }
  else
  {
    newsonIguales = false;
  }
  newresultado = newsonIguales;
  return newresultado;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var newstr1, newstr2, newtienenMismaLongitud, newresultado;
  newstr1 = str1;
  newstr2 = str2;
  if (newstr1.length === newstr2.length)
  {
    newtienenMismaLongitud = true;
  }
  else
  {
    newtienenMismaLongitud = false;
  }
  newresultado = newtienenMismaLongitud;
  return newresultado;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var newnum, newmenosQueNoventa, newresultado;
  newnum = num;
  if (newnum < 90)
  {
    newmenosQueNoventa = true;
  }
  else
  {
    newmenosQueNoventa = false;
  }
  newresultado = newmenosQueNoventa;
  return newresultado;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var newnum, newmayorQueCincuenta, newresultado;
  newnum = num;
  if (newnum > 50)
  {
    newmayorQueCincuenta = true;
  }
  else
  {
    newmayorQueCincuenta = false;
  }
  newresultado = newmayorQueCincuenta;
  return newresultado;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var newx, newy, newobtenerResto, newresultado;
  newx = x;
  newy = y;
  newobtenerResto = newx % newy;
  newresultado = newobtenerResto;
  return newresultado;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var newnum, newesPar, newresultado;
  newnum = num;
  if ((newnum % 2) === 0)
  {
    newesPar = true;
  }
  else
  {
    newesPar = false;
  }
  newresultado = newesPar;
  return newresultado;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var newnum, newesImpar, newresultado;
  newnum = num;
  if ((newnum % 2) !== 0)
  {
    newesImpar = true;
  }
  else
  {
    newesImpar = false;
  }
  newresultado = newesImpar;
  return newresultado;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var newnum, newelevarAlCuadrado, newresultado;
  newnum = num;
  newelevarAlCuadrado = (Math.pow (newnum, 2));
  newresultado = newelevarAlCuadrado;
  return newresultado;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var newnum, newelevarAlCubo, newresultado;
  newnum = num;
  newelevarAlCubo = (Math.pow (newnum, 3));
  newresultado = newelevarAlCubo;
  return newresultado;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var newnum, newexponent, newelevar, newresultado;
  newnum = num;
  newexponent = exponent;
  newelevar = (Math.pow (newnum, newexponent));
  newresultado = newelevar;
  return newresultado;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var newnum, newredondearNumero, newresultado;
  newnum = num;
  newredondearNumero = (Math.round (newnum));
  newresultado = newredondearNumero;
  return newresultado;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var newnum, newredondearHaciaArriba, newresultado;
  newnum = num;
  newredondearHaciaArriba = (Math.ceil (newnum));
  newresultado = newredondearHaciaArriba;
  return newresultado;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var newnumeroRandom, newresultado;
  newnumeroRandom = (Math.random(newnumeroRandom));
  newresultado = newnumeroRandom;
  return newresultado;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var newnumero, varnewesPositivo, newresultado;
  newnumero = numero;
  if (newnumero > 0)
  {
    varnewesPositivo = 'Es positivo';
  }
  else if (newnumero < 0)
  {
    varnewesPositivo = 'Es negativo';
  }
  else
  {
    varnewesPositivo = false;
  }
  newresultado = varnewesPositivo;
  return newresultado;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var newstr, newresultado;
  newstr = str + '!';
  newresultado = newstr;
  return newresultado;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var newnombre, newapellido, newcombinarNombres, newresultado;
  newnombre = nombre;
  newapellido = apellido;
  newcombinarNombres = `${newnombre} ${newapellido}`;
  newresultado = newcombinarNombres;
  return newresultado;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var newnombre, newobtenerSaludo, newresultado;
  newnombre = nombre;
  newobtenerSaludo = `Hola ${newnombre}!`;
  newresultado = newobtenerSaludo;
  return newresultado;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var newalto, newancho, newobtenerAreaRectangulo, newresultado;
  newalto = alto;
  newancho = ancho;
  newobtenerAreaRectangulo = newancho * newalto;
  newresultado = newobtenerAreaRectangulo;
  return newresultado;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var newlado, newretornarPerimetro, newresultado;
  newlado = lado;
  newretornarPerimetro = newlado * 4;
  newresultado = newretornarPerimetro;
  return newresultado;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var newbase, newaltura, newareaDelTriangulo, newresultado;
  newbase = base;
  newaltura = altura;
  newareaDelTriangulo = newbase * newaltura / 2;
  newresultado = newareaDelTriangulo;
  return newresultado;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var neweuro, newdeEuroAdolar, newresultado;
  const valordolar = 1.20; // Uso una constante porque el valor del dólar nunca será cambiado por la función
  neweuro = euro;
  newdeEuroAdolar = neweuro * valordolar;
  newresultado = newdeEuroAdolar;
  return newresultado;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  var newletra, newesVocal, newresultado;
  newletra = letra;
  if (newletra.length > 1)
  {
    newesVocal = 'Dato incorrecto';
  }
  else if (newletra === 'a' || newletra === 'e' || newletra === 'i' || newletra === 'o' || newletra === 'u')
  {
    newesVocal = 'Es vocal';
  }
  else
  {
    newesVocal = 'Dato incorrecto';
  }
  newresultado = newesVocal;
  return newresultado;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
