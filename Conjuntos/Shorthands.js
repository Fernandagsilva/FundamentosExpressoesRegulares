const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`;

console.log(texto.match(/\d/g)); //números [0-9]
console.log(texto.match(/\D/g)); //todos os valores não números  [^0-9]

console.log(texto.match(/\w/g)); // caracteres [a-zA-Z0-9_]

console.log(texto.match(/\W/g)); // caracteres [^a-zA-Z0-9]

console.log(texto.match(/\s/g)); //espaço(espaço em branco, tab e nova linha) [\t\n\r\f]
console.log(texto.match(/\S/g)); //tudo que não é espaço(espaço em branco, tab e nova linha) [^\t\n\r\f]
