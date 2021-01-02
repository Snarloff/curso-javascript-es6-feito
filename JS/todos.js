var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var inputButton = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos(){

	listElement.innerHTML = ""; // Remover do listelement

	for(todo of todos){
		var todoElement = document.createElement("li");
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement("a");
		var linkText = document.createTextNode("Excluir");

		linkElement.appendChild(linkText);

		linkElement.setAttribute("href", "#excluir");

		var pos = todos.indexOf(todo); // Indice do TODO
		linkElement.setAttribute("onclick", "deleteTodo("+ pos +")")

		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		listElement.appendChild(todoElement);
	}
}

renderTodos();

function addTodo(){
	var todoText = inputElement.value; // Valor

	if (todoText === "") {
		return false
	}

	todos.push(todoText+" ");
	inputElement.value = "";
	renderTodos();
	saveToStorage();
}

inputButton.onclick = addTodo;

function deleteTodo(pos){
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
}

function saveToStorage(){
	localStorage.setItem("list_todos", JSON.stringify(todos));
}