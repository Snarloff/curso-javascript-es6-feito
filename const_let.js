const usuario = {nome: "Diego"}; // Não pode ser reatribuido

usuario.nome = "Snarloff"; // Mutando

function teste(x) {
	let y = 2;
	
	if(x > 5){
		console.log(x, y)
	}
}
teste(25);