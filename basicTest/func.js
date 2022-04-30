function helloWorld(name) {
	console.log(`Hello ${name}`);
	return	name;
}

let a = helloWorld("mingyu")

console.log(a)

let globalVar = 'GV'

function example(Var) {
	let globalVar = "LV"
	console.log(`In func, ${globalVar}`)
}

// 전역변수를 내부에서 let으로 다시 선언하면 지역변수로서 활용하게 된다. 
// 따라서 밖에는 영향을 미치지 못한다. 
console.log(globalVar)
example(globalVar)
console.log(globalVar)