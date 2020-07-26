// g - global
// i - ignore case

const texto = "Fernanda assinou o abaixo-assinado.";
console.log(texto.match(/F|ab/));
console.log(texto.match(/f|as/g));
console.log(texto.match(/as|f/gi));
