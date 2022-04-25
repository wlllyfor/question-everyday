function swap1(arr, i, j) {
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
	return arr
}

function swap2(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]]
	return arr
}

console.log(swap1([1,2], 0, 1))
console.log(swap2([1,2], 0, 1))