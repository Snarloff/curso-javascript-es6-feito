// REST = resto da propriedade

const usuario = {
	nome: "Snarloff",
	idade: 23,
	empresa: "Cyber Technologies"
};


const { nome, ...resto } = usuario

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params){
	return params.reduce((total, next) => total + next);
}

console.log(soma(10, 10, 10))

// SPREAD = propagar e repassar as info de um obj ou array pra outra estrutura de dados

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ] // copiar cada uma e colocar dentro

console.log(arr3)

const usuario1 = {
	nome: "Snarloff",
	idade: 23,
	empresa: "Cyber Technologies"
};

const usuario2 = { ...usuario1, nome: "Luis" }
console.log(usuario2)