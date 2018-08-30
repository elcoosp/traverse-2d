const inBound = ([row, col], arr) =>
	arr[row] !== undefined && arr[row][col] !== undefined

const Traverser = (
	yielder = ([r, c], a) => a[r][c],
	rowPredicate = inBound,
	colPredicate = inBound
) => ({
	fromTopLeft: function*(arr) {
		let row = 0
		let col = 0

		while (rowPredicate([row, col], arr)) {
			while (colPredicate([row, col], arr))
				yield yielder([row, col], arr), col++

			row++
			col = 0
		}
	},
	fromTopRight: function*(arr) {
		let row = 0
		let col = arr[row].length - 1

		while (rowPredicate([row, col], arr)) {
			while (colPredicate([row, col], arr))
				yield yielder([row, col], arr), col--

			row++
			col = arr[row] ? arr[row].length - 1 : col - 1
		}
	},
	fromBottomRight: function*(arr) {
		let row = arr.length - 1
		let col = arr[row].length - 1

		while (rowPredicate([row, col], arr)) {
			while (colPredicate([row, col], arr))
				yield yielder([row, col], arr), col--

			row--
			col = arr[row] ? arr[row].length - 1 : col - 1
		}
	},
	fromBottomLeft: function*(arr) {
		let row = arr.length - 1
		let col = 0

		while (rowPredicate([row, col], arr)) {
			while (colPredicate([row, col], arr))
				yield yielder([row, col], arr), col++

			row--
			col = 0
		}
	}
})

export default Traverser
