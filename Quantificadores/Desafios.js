//Desafio CPF

const cpfs = `CPF dos aprovados:
	- 600.567.893-12
	- 765.998.345-23
`;

console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));

//Desafio telefone.js
const telefones = `Lista telefônica:
	- (11) 98756-1212
	-98765-4321
	- (21) 3245-7858`;

console.log(
  telefones.match(/\d{5}-\d{4}|\(\d{2}\)\s\d{5}-\d{4}|\(\d{2}\)\s\d{4}-\d{4}/g)
);
console.log(telefones.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g));

//Desafio Email
const emails = `Os e-mails dos convidados são: 
	- fulano@cod3r.com.br
	- xico.teste@gmail.com
	- xico_teste@empresa.info.br`;

console.log(emails.match(/\w+@\w+\.com[\.\w+]?/g));

console.log(emails.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0=9]{2,4}/g));
console.log(emails.match(/\w+@\w+\.\w{2,4}/g));
console.log(emails.match(/[\w.]+@\w+\.\w{2,4}/g));
console.log(emails.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g));
