import Traverser from "./index.js"

// NB: The matrix has a first row which is bigger
const matrix = [[0, 1, 2, 3], [4, 5, 6], [7, 8, 9]]

const T = Traverser()

test("should traverse starting fromTopLeft", () => {
	expect([...T.fromTopLeft(matrix)]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test("should traverse starting fromTopRight", () => {
	expect([...T.fromTopRight(matrix)]).toEqual([3, 2, 1, 0, 6, 5, 4, 9, 8, 7])
})

test("should traverse starting fromBottomLeft", () => {
	expect([...T.fromBottomLeft(matrix)]).toEqual([7, 8, 9, 4, 5, 6, 0, 1, 2, 3])
})

test("should traverse starting fromBottomRight", () => {
	expect([...T.fromBottomRight(matrix)]).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
})
