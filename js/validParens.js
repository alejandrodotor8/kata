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
	let cont = 0
	for (let i = 0; i < parens.length; i++) {
		parens[i] == '(' ? cont++ : cont--
		if (cont < 0) break
	}
	return cont == 0
}
console.log(validParentheses2('((('))

function validParentheses3(parens) {
	var re = /\(\)/
	while (re.test(parens)) parens = parens.replace(re, '')
	return !parens
}

console.log(validParentheses3('())(()'))

function validParentheses4(parens) {
	let cont = 0
	for (let i = 0; i < parens.length && cont >= 0; i++) {
		cont += parens[i] == '(' ? 1 : -1
	}
	return cont == 0
}
console.log(validParentheses4('((())'))

function validParentheses5(parens) {
	while (parens.indexOf('()') != -1) {
		parens = parens.replace('()', '')
	}
	return !parens.length
}
