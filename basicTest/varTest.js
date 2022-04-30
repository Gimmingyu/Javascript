// 변수 
// 예약어 이름은 변수로 사용할 수 없다. 
// class = '수업'; (x)
// alert() 경고 창을 띄우는 함수 
// console.log() 로그를 찍는 함수 

// name = "Mike";
// age = 30;
// alert(name);
// console.log(name);

// 변수를 선언할 때, 값만 할당하게 되면 후에 쓰여지는 변수 선언으로 덮어씌워진다.
// let

// 이미 선언된 이름이라서 재할당 불가능
// let name = "Mike";
// 반드시 이 변수명을 사용해야 할 때는 let없이 덮어씌우면 된다. 
// name = "google";

// const는 상수. 수정할 수 없다. 

// const name = "Mike";

// javascript에서 변하지 않는 값은 const, 변할 수 있는 값은 let으로 선언한다. 
// 변수 작성 rule
/*
1. 변수는 문자와 숫자, $와 _만 사용.
2. 첫 글자는 숫자가 될 수 없다. 
3. 예약어는 사용할 수 없다. 
4. 가급적 상수는 대문자로 선언한다.
5. 변수명은 읽기 쉽고 이해할 수 있게 선언. 
*/

const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

// const message = "I'm a boy.";
// const message2 = 'I\'m a boy.';

// 내부 변수 혹은 표현식 삽입할 때.
// const message3 = `My name is ${name}`;
// const message4 = `Age is ${20 + 7}`;

// console.log(message3);
// console.log(message4);


// 숫자 
console.log(1 + 2); // 3
console.log(10 - 3); // 7
console.log(10 / 5); // 2
console.log(10 % 4); // 2
console.log(10 * 5); // 50
console.log(1**2); // 1
console.log(1 / 0); // 숫자를 0으로 나누면 infinity가 된다. 

// const y = name / 2;
// console.log(y); // NaN == Not a Number

// Boolean 

// const a = true;
// const b = false;

// const name = "Mike";
// const age = 30;

// console.log(name == "Mike"); // true 
// console.log(age == 30); // true


// null && undefined
// let age;
// console.log(age); // undefined

let user = null;
console.log(user);


// typeof 연산자는 python의 type과 같다. 

console.log(typeof 3); // number
console.log(typeof "Mike"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined

const a = "나는 "
const b = "입니다.";

console.log(a + name1 + b);

const age = 30;
console.log(a + age + "살" + b);


console.log('1' === 1);
console.log('1' == 1);