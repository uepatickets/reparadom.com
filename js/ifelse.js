var nombre = 'Papa';
var dominicano = true;

if (dominicano = false){
    console.log(nombre + ' es dominicano.')
} else {
    console.log(nombre + ' no es dominicano.')
};

/****
 * Sentencia if..else */

var nombre = 'Valentina';
var edad = '8';

if (edad < 12){
    console.log(nombre + ' es una niña.')
} else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es una adolescente.')
} else if ((edad > 17) && (edad < 60)){
    console.log(nombre + ' es una adulta.')
} else {
    console.log(nombre + ' es una anciana.')
}