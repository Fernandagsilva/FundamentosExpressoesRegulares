const texto = "João é calmo, mas no trânsito fica nervoso.";

console.log(texto.match(/[\wÀ-ú]+/gi));

//Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=, )/gi));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=\, mas no)/gi));

//Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi));
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));
