var minhaPromise = function(){
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://api.github.com/users/snarloff");
		xhr.send(null);
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4){
				if (xhr.status === 200){
					resolve(JSON.parse(xhr.responseText));
				} else{
					reject(`Erro na requisição\nStatus: ${xhr.status}`)
				}
			}
		}
	});
}
minhaPromise()
	.then(function(response){
		console.log(response);// Qnd chamar a resolve
	}) 
	.catch(function(error) {
		console.warn(error);// Reject
	});

996 837210