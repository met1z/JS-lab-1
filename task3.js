// 7) vertical line, union, circle

console.log('Task 3')

const isPointIn = (x, y, lX, cX, cY, cRadius) => {
	const onLine = x === lX
	const inCircle = (x - cX) ** 2 + (y - cY) ** 2 <= cRadius ** 2
	return onLine || inCircle
}

const pX = 3,
	pY = 4
const lX = 2
const cX = 0,
	cY = 0,
	cRadius = 4

const result = isPointIn(pX, pY, lX, cX, cY, cRadius)

console.log(`Point (${pX}, ${pY}) is ${result ? '' : 'not '}in the union.`)
