//* KATA 4
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
//TODO 1. split letters, 2. rec array, 3. count repeated (reduce(acumulado,valor) => ,inicial))

//? MY SOLUTION

function duplicateCount(text) {
	const repeated = text
		.toLowerCase()
		.split('')
		.reduce((acc, val) => {
			acc[val] = acc[val] ? acc[val] + 1 : 1
			return acc
		}, {})
	return Object.entries(repeated).filter((char) => char[1] > 1).length
}
console.log(duplicateCount('ABBA'))

//? CLEVER
function duplicateCount(text) {
	return (
		text
			.toLowerCase()
			.split('')
			.sort()
			.join('')
			.match(/([^])\1+/g) || []
	).length
}
