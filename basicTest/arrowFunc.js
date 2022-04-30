function sayHello() {
	console.log("hello")
}

let sayhello = function() {
	console.log("Hello")
}

sayHello()
console.log(sayhello)


// 함수 선언문은 어디서든 호출 가능하다. 
// javascript는 인터프리터 언어이기 때문에 위에서 아래로 순차적으로 실행된다. 
// 그러나 함수의 경우에는 선언을 나중에 하더라도 
// 실행 전 초기화단계에서 코드의 모든 함수를 찾아서 생성해두기 때문에 
// 실행을 하고 나중에 선언해도 사용이 가능하다.

// 함수 표현식은 코드에 도달해야만 생성되기 때문에 그 이후에만 사용할 수 있다. 
// 대부분 상황에서는 상관이 없지만 편하게 쓰고 싶다면 함수 선언문으로 통일하는 것이 좋다.


// 화살표 함수 사용 예시
let add = (num1, num2) => {
	return num1 + num2
}


// return문 뿐인 함수는 일반 괄호로 대치 가능
let add2 = (num1, num2) => (
	num1 + num2
)


// 인자가 하나뿐인 경우에는 괄호 생략 가능
let sayhi = name => `Hello ${name}`


// 인수가 없는 함수의 경우에는 생략 불가능
let sayHi = () => {
	return "Hi"
}

