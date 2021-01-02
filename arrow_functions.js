const arr = [1, 2, 3, 4, 5, 6];

/*

const newArr = arr.map(function(item){
	return item * 2;
});

const newArr = arr.map(item =>{
	return item *2;
});

*/

const newArr = arr.map(item => item * 2);

console.log(newArr);

const print = () => "teste";

console.log(print());