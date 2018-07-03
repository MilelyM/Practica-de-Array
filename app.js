/*1)**ENUCIADO

	//
	Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.
	Ejemplo de entrada:
	var output = computeAverageLengthOfWords('code', 'programs');
	console.log(output); // --> 6
	//
***RESPUESTA
*/
	function computeAverageLengthOfWords(word1, word2) {
	    var promedio =0;
	     promedio= parseInt((word1.length+word2.length)/2);
	return promedio;
	}
	//module.exports = computeAverageLengthOfWords;
	//inicializo mi variable en cero para tomar el valor de la solucion parseInt para convertirlo en numero//
/*________________________________________________________________
2)**ENUNCIADO

	//
	Escriba una función llamada getNthElement.

	Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.

	Notas:

	Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
	Ejemplo de entrada:

	var output = getNthElement([1, 3, 5], 1);
	console.log(output); // --> 3
	//
***RESPUESTA*/

	function getNthElement(array, n) {
	  return array[n];
	}
/*__________________________________________________________________
3)**ENUNCIADO

	//Escribe una función llamada convertDoubleSpaceToSingle.
	Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios 		simples.
	Ejemplo de entrada:
	var output = convertDoubleSpaceToSingle("string  with  double  spaces");
	console.log(output); // --> "string with double spaces"
	Notas:
	Para hacer este problema, debes estar familiarizado con String.split, y Array.join.
	//
***RESPUESTA*/
	function convertDoubleSpaceToSingle(str) {
	    let space= str.split("  ");
	    str= space.join(" ");
	    return str;
	}
	//module.exports = convertDoubleSpaceToSingle;
	// con el split le quite los espacios ,con el join le concateno un espacio //
/*____________________________________________________________________________
4)**ENUNCIADO

	//
	Escribe una función llamada areValidCredentials.

	Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene 		al menos 8 caracteres de longitud. De lo contrario, devuelve false.

	Ejemplo de entrada:

	var output = areValidCredentials('Ritu', 'mylongpassword');
	console.log(output); // --> true
	//
***RESPUESTA*/

	function areValidCredentials(name, password) {
	 if (name.length >=3 & password.length >= 8){
	 return true;
	 }
	 else
	  return false;
	}
	//module.exports = areValidCredentials;
/*______________________________________________________________________
5)**ENUNCIADO
	//
	Dada una lista de números enteros no negativos y una suma objetivo, encuentre un par de números que sumen a la suma objetivo.

	Ejemplo de entrada:

	var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
	console.log(pair); // --> [4, 5]
	//
***RESPUESTA*/
	function findPairForSum(array, number) {
	let a=[];
	for(i=0;i<array.length;i++){
	  for(j=0;j<array.length;j++){
	   
	    if((array[i]+array[j])==number)
	    if( i !==j){
	      a.push(array[i]);
	      a.push(array[j]);
	      return a;
	      
	    }
	  }
	}

	}
	//module.exports = findPairForSum;
/*_________________________________________________________________________
6)**ENUNCIADO
	//
	Escriba una función llamada "filterOddElements".

	Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.

	Ejemplo:

	var output = filterOddElements([1, 2, 3, 4, 5]);
	console.log(output); // --> [1, 3, 5]
	//
***RESPUESTA*/
	function filterOddElements(arr) {
	const imp = arr.filter(n => n % 2 !== 0);
	return  imp;
	}

	//module.exports = filterOddElements;
