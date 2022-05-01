// const superman = {
// 	name: 'mingyu',
// 	age: 28,
// 	fly : function () {
// 		console.log("i am flying")
// 	}
// }

// superman.fly()

// const superman = {
// 	name: 'mingyu',
// 	age: 28,
// 	fly () {
// 		console.log("i am flying")
// 	}
// }

// object의 멤버변수를 직접적으로 호출하는 것은 좋지 않다. <-- Why?
// const superman = {
// 	name: 'mingyu',
// 	age: 28,
// 	fly () {
// 		console.log(`${superman.name} is flying`)
// 	}
// }

// this로 치환해서 사용하는 것이 좋다. 
// superman = this가 되는 것. 
// const superman = {
// 	name: 'mingyu',
// 	age: 28,
// 	fly () {
// 		console.log(`${this.name} is flying`)
// 	}
// }


// 함수 sayHello를 정의해주고, 멤버 변수로 넣을 수 있다.
// 각 object내 함수 sayHello의 this는 boy에서는 mingyu, dog에서는 mindong이 된다. 
// function sayHello() {
// 	console.log(`hello, ${this.name}`)
// }

// let boy = {
// 	name: 'Mingyu',
// 	sayHello
// }

// let dog = {
// 	name: 'Mindong',
// 	sayHello
// }

// boy.sayHello()
// dog.sayHello()

// 화살표 함수에서는 일반 함수와는 달리 자신만의 this를 가지지 않는다.
// 화살표 함수 내부에서 this를 사용하면 this는 외부에서 값을 가져온다. 
// sayHello: () => {
// 	console.log(`hello, ${this.name}`)
// }

// let boy = {
// 	name: 'Mingyu',
// 	sayHello
// }

// let dog = {
// 	name: 'Mindong',
// 	sayHello
// }

// boy.sayHello()
// dog.sayHello()


