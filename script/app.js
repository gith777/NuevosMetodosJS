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

var pos_jonathan=amigos.indexOf('Yefersson');

console.log(pos_jonathan);





