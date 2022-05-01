let students = ['mingyu', 'mindong', 'gildong']


// c에서의 for문과 일치 
for (let i = 0; i < students.length; i++) {
	console.log(students[i])
}

// for-of 로 하는 경우 원소가 나온다.
// python에서의 for i in ~ 와 같다. 
for (let student of students) {
	console.log(student)
}

// in으로 하는 경우 index번호가 나온다.
// python에서 for i in range(len()): 과 같다.
for (let idx in students) {
	console.log(students[idx])
}