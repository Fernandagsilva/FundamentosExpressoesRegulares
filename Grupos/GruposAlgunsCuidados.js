const texto = "Pedrinho (filho de Pedro Silva) é doutor do ABC!";

console.log(texto.match(/[(abc)]/gi)); //isso não é um grupo

console.log(texto.match(/([abc])/gi)); //é um grupo
