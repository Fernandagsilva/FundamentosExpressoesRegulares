const texto = "ABC [abc] a-c 1234";

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g)); // não define um intervalo(range)

console.log(texto.match(/[A-z]/g)); //intervalos usam a ordem da tabela UNICODE

//tem que respeitar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g)); //expressão inválida, intervalo fora de ordem
// console.log(texto.match(/[4-1]/g)); //expressão inválida, intervalo fora de ordem
