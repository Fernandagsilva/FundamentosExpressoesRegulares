const texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

const regexNove = RegExp("9");
console.log("Métodos da RegExp...");

//retorna true caso encontre o elemento procurado no texto
console.log(regexNove.test(texto));

//retorna um array com informações contendo o index em que o elemento procurado foi encontrado
console.log(regexNove.exec(texto));

const regexLetras = /[a-f]/g;
console.log("Métodos da string...");

//retorna uma lista com os elementos que encontrados
console.log(texto.match(regexLetras));

//retorna o indice do primeiro elemento encontrado a partir da regexLetras
console.log(texto.search(regexLetras));

//Substitui o elemento encontrado pela palavra escolhida
console.log(texto.replace(regexLetras, "Achei"));

//Realiza o split a partir da expressão encontrada
console.log(texto.split(regexLetras));
