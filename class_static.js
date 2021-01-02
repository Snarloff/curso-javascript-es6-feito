// npx babel main.js --out-file bundle.js

class List{
	constructor(){
		this.data = [];
	}
	add(data){
		this.data.push(data);
		console.log(this.data)
	}
}

class TodoList extends List{
	constructor(){
		super(); // Chamar o constructor da classe pai
		this.usuario = "Snarloff";
	}
	mostraUsuario(){
		console.log(this.usuario);
	}
}

var MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function(){
	MinhaLista.add("Novo todo");
}
MinhaLista.mostraUsuario();

class _Math{
	static soma(a, b){
		return a + b;
	}
}
console.log(_Math.soma(1, 10));
