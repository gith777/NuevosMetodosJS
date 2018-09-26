var frutas=['fresa', 'uva', 'manzana', 'naranja', 'pera'];

/*console.log(frutas.length);*/ 
frutas.push('mandarina');
/*Push agrega un nuevo elemento a un arreglo*/

console.log(frutas.length);
/*Length cuenta la cantidad de 
elementos de un arreglo*/
frutas.push('melon');
mostrar_frutas();

frutas.pop();
/*Pop elimina el ultimo elementode un arreglo*/

console.log('------------------------------------');
mostrar_frutas();

function mostrar_frutas(){

	console.log("En total hay "+frutas.length+ " frutas");

for(var i=0; i<frutas.length; i++){
	console.log("En la posicion "+ i + " esta la fruta "+frutas[i]);
}
/* Este for me recorre el arreglo */

}

/*-------------------------------------------*/
/*Este metodo me permite añadir un arreglo con otro arreglo*/

var amigos_estudio=['Juan', 'Yefersson', 'Laura'];
var amigos_trabajo=['Gineth','Daniela', 1000, 20];

var amigos=amigos_estudio.concat(amigos_trabajo);

console.log(amigos);

/*-------------------------------------------*/
/*Metodo Join - me convierte el arreglo en texto*/

console.log(amigos);
console.log(amigos.join(" - "));

/*Join conviente en una cadena de texto y separa las posiciones por los caracteres, que yo 
defina como parametro. Si no le coloco nada el por defecto los coloca por comas! */

/*El metodo sort me permite ordenarlos primero numero o si son letras lo ordena por 
orden alfabetico*/

console.log(amigos.sort());

var pos_yefersson=amigos.indexOf('Yefersson');

console.log(pos_yefersson);

/*---------------------------------*/

amigos.splice(pos_yefersson, 1);

/*splice elimina la cantidad de elementos que especifiquemos a partir de una posicion*/
console.log(amigos);

/*-----------------------------------------*/

var persona={

	nombre:"Yefersson",
	 edad:27, 
	 tiene_mascota:true,
	 mascota:{nombre:"Fido", raza:"galgo"}

	}

/*
console.log(persona['nombre']);
console.log(persona.nombre);
*/

console.log(persona.nombre);
console.log(persona.mascota.raza);

var ahora= new Date();
console.log(ahora);


/*el typeof me permite saber que tipo de dato es... */
console.log(typeof persona.edad);
console.log(persona.edad);
console.log(persona.edad.toString());

var cantidad=" 25 manzanas";
console.log(parseInt(cantidad)); 

/*-----------------------------------------------------*/
/*Me busca una cadena o una sub-cadena*/

var texto= " En algun lugar de la mancha de cuyo nombre no quiero acordarme "; 

console.log(texto.length);
console.log(texto.indexOf('lugar'));

/*-----------------------------------------------------*/
/*Metodo slice - extraer*/


var palabra= texto.slice(9, 14);
console.log(palabra);

var palabra2= texto.substr(9, 5);
console.log(palabra2);

/*Metodo replace - me remplaza al y los sustituye por otra cosa*/
console.log(texto.replace('mancha','emprendedor'));


/*Este metodo me permite cambiar todo a mayusculas o todo a minusculas*/

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

console.log(texto);
console.log(texto.trim());



