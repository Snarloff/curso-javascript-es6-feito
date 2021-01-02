const usuario = {
	nome: "Snarloff",
	idade: 14,
	endereco: {
		cidade: "Catanduva",
		estado: "SP"
	},
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraInfo({ nome, idade, endereco: { cidade, estado } }){
	console.log(nome, idade, cidade, estado)
}

mostraInfo(usuario)