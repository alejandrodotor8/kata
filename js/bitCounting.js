//? KATA 1 BIT COUNTING
/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
//! MY SOLUTION
var countBits = function (n) {
	// Program Me
	if (n > 0) {
		return n
			.toString(2)
			.split('')
			.reduce((total, number) => total + parseInt(number), 0)
	}
}
console.log(countBits(1234))

//! CLEVER

var countBits2 = (num) => num.toString(2).split('0').join('').length
console.log(countBits2(1234))
