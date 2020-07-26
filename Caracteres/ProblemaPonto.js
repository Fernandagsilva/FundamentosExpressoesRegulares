const texto = "Bom\ndia";
console.log(texto.match(/./g));
console.log(texto.match(/..../gi)); //o ponto não engloba o \n

//dotall - algumas linguagens tem uma flag /exp/s, mas JS não!
