// 9) vertical line, intersection, horizontal line

console.log('Task 3')

const isPointIn = (x, y, lX, lY) => x === lX && y === lY

const pX = 3,
	pY = 5
const lX = 3, lY = 4

const result = isPointIn(pX, pY, lX, lY)

console.log(`Point (${pX}, ${pY}) is ${result ? '' : 'not '}in the intersection.`)
console.log(`Point (${pX}, ${pY}) is ${result ? '' : 'not '}in the intersection.`)
