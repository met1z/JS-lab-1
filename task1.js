// 9) BCEAD

console.log('Task 1')

const printResult = (word, A, B, C, D, E) =>
	console.log(
		`Values ${word} permutation: A = ${A}, B = ${B}, C = ${C}, D = ${D}, E = ${E}`
	)

let A = 1,
	B = 2,
	C = 3,
	D = 4,
	E = 5

printResult('before', A, B, C, D, E)

const tempA = A
A = B
B = C
C = E
E = D
D = tempA
printResult('after', A, B, C, D, E)
