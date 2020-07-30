const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaeGrande123456

#0pA1?
Foi123!
`;

console.log(texto.match(/^.{6,20}$/gm));
console.log(texto.match(/^(?=.*[A-Z]).{6,20}/gm));
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm));
console.log(
  texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm)
);
