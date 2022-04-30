const superman = {
	name : 'clark',
	age : 33,
}

console.log(superman)
console.log(typeof superman)

superman.age = 28
superman.name = 'mingyu'

console.log(superman)
console.log(typeof superman)


let mingyu = superman

console.log("============================")
console.log(mingyu.name)
console.log(mingyu.age)

if (superman.birth) {
	console.log(superman.birth)
}

superman.birth = '0201'
if (superman.birth) {
	console.log(superman.birth)
}
