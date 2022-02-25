//* KATA SUM OF DIGITS
/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

//? MY SOLUTION
function digital_root(n) {
	let num = n.toString()
	while (num.length > 1) {
		num = [...num].reduce((pre, cur) => parseInt(pre) + parseInt(cur), 0).toString()
	}
	return parseInt(num)
}

console.log(digital_root(942))

//? CLEVER
function digital_root2(n) {
	console.log((n - 1) % 9)
	return ((n - 1) % 9) + 1
}

console.log(digital_root2(942))

function digital_root(n) {
	if (n < 10) return n

	return digital_root(
		n
			.toString()
			.split('')
			.reduce(function (acc, d) {
				return acc + +d
			}, 0)
	)
}
