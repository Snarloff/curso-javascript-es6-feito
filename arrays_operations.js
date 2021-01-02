const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(function(item, index){
	return (item *2) + index;
}); // Percorre o vetor e executa algo

console.log(newArr);

const sum = arr.reduce(function(total, next){
	return total + next;
}); // Consumir vetor e transformar em uma unica variavel

console.log(sum);

const filter = arr.filter(function(item){
	return item % 2 === 0;	// retorne true ou false
});

console.log(filter);

const find = arr.find(function(item){
	return item === 4;
});	// encontra algo na array

console.log(find);
