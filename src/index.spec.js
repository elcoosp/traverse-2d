import Traverser from "./index.js"

// NB: The matrix has a first row which is bigger
const matrix = [[0, 1, 2, 3], [4, 5, 6], [7, 8, 9]]

const T = Traverser()

test("Should traverse starting from top left", () => {
	expect([...T.fromTopLeft(matrix)]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test("Should traverse starting from top right", () => {
	expect([...T.fromTopRight(matrix)]).toEqual([3, 2, 1, 0, 6, 5, 4, 9, 8, 7])
})

test("Should traverse starting from bottom left", () => {
	expect([...T.fromBottomLeft(matrix)]).toEqual([7, 8, 9, 4, 5, 6, 0, 1, 2, 3])
})

test("Should traverse starting from bottom right", () => {
	expect([...T.fromBottomRight(matrix)]).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
})
