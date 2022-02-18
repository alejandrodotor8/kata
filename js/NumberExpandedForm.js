//* KATA
/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

//? MY SOLUTION
function expandedForm(num) {
	let numbers = [...num.toString()]
	let long = numbers.length
	let result = ''

	for (let i = 0; i < long; i++) {
		if (numbers[i] != '0') {
			result += numbers[i] + '0'.repeat(long - 1 - i) + ' + '
		}
	}

	result.slice(-3) == ' + ' ? (result = result.slice(0, -3)) : null
	return result
}
console.log(expandedForm(900130))

//? CLEVER
function expandedForm2(num) {
	return String(num)
		.split('')
		.map((num, index, arr) => num + '0'.repeat(arr.length - index - 1))
		.filter((num) => Number(num) != 0)
		.join(' + ')
}
console.log(expandedForm2(900130)).length

//? Combination
function expandedForm3(num) {
	return [...num.toString()]
		.flatMap((num, i, arr) => (arr[i] != '0' ? num + '0'.repeat(arr.length - i - 1) : []))
		.join(' + ')
}
console.log(expandedForm3(900130))
