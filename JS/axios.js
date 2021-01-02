axios.get("https://api.github.com/users/snarloff")
	.then(function(response){ // .data.avatar_url
		console.log(response);// Qnd chamar a resolve
	}) 
	.catch(function(error) {
		console.warn(error);// Reject
	});