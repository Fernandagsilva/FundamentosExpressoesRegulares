const texto = "supermercado minimercado hipermercado mercado,";
console.log(texto.match(/(super|hiper|mini)?mercado/g));
console.log(texto.match(/((hi|su)per|mini)?mercado/g));
