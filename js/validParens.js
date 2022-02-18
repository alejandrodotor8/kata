//* KATA
/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
'())(()'          =>  false
Constraints
0 <= input.length <= 100
*/
//? MY SOLUTION
function validParentheses(parens) {
	let cont = 0
	let stack = []
	let arr = parens.split('')

	for (i = 0; i < arr.length; i++) {
		let last = stack[stack.length - 1]
		arr[i] == '(' ? cont++ : cont--

		if (arr[i] == '(') stack.push(arr[i])
		else if (last == '(' && arr[i] == ')') stack.pop()
		else break
	}
	return cont == -1 || stack.length ? false : true
}
console.log(validParentheses('())(()'))

//? CLEVER

function validParentheses2(parens) {
	let n = 0
	for (let i = 0; i < parens.length; i++) {
		parens[i] == '(' ? n++ : n--
		if (n < 0) break
	}
	return n == 0
}
console.log(validParentheses2('())(()'))

function validParentheses3(parens) {
	var re = /\(\)/
	while (re.test(parens)) parens = parens.replace(re, '')
	return !parens
}

console.log(validParentheses3('())(()'))
